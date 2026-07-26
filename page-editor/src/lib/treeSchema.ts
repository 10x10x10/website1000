import { z } from 'zod'
import { ComponentDefinitions } from '@1000website/shared'
import type { ComponentProps } from '@1000website/shared'

export type TreeNodeType = Extract<keyof typeof ComponentDefinitions, string>

const treeNodeTypes = Object.keys(ComponentDefinitions) as TreeNodeType[]
export const TreeNodeTypeSchema = z.enum(treeNodeTypes as [TreeNodeType, ...TreeNodeType[]])

export type TreeNodePrimitive = string | number | boolean | null | undefined

export type TreeNodePropsMap = {
  [K in TreeNodeType]: ComponentProps<typeof ComponentDefinitions[K]>
}

type TreeNodeChildType<K extends TreeNodeType> =
  typeof ComponentDefinitions[K] extends { allowChildren: readonly (infer C)[] }
    ? Extract<C, TreeNodeType>
    : never

type TreeNodeWithChildrenDefinitions = {
  [K in TreeNodeType]: TreeNodeChildType<K> extends TreeNodeType ? K : never
}[TreeNodeType]

export type TreeNodeMap = {
  [K in TreeNodeType]: {
    type: K
    props?: TreeNodePropsMap[K]
  } & (K extends TreeNodeWithChildrenDefinitions
    ? { children?: Array<TreeNodeMap[TreeNodeChildType<K>] | TreeNodePrimitive> }
    : {})
}

export type TreeNode = TreeNodeMap[TreeNodeType]

const primitiveTreeNodeSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
  z.undefined(),
])

const treeNodeSchemasByType = {} as { [K in TreeNodeType]: z.ZodTypeAny }

treeNodeTypes.forEach((type) => {
  treeNodeSchemasByType[type] = z.lazy(() => {
    const definition = ComponentDefinitions[type]
    const base = {
      type: z.literal(definition.type),
      props: definition.propsSchema.optional(),
    } as const

    if (!definition.allowChildren) {
      return z.object(base).strict()
    }

    const allowedChildren = definition.allowChildren.map((childType) =>
      z.lazy(() => treeNodeSchemasByType[childType as TreeNodeType]),
    )

    return z.object({
      ...base,
      children: z.array(z.union([
        ...allowedChildren,
        primitiveTreeNodeSchema,
      ])).optional(),
    }).strict()
  })
})

export const TreeNodeSchema: z.ZodType<TreeNode> = z.union(
  Object.values(treeNodeSchemasByType) as [z.ZodTypeAny, ...z.ZodTypeAny[]],
) as z.ZodType<TreeNode>

export const TreeNodeOrPrimitiveSchema: z.ZodType<TreeNode | TreeNodePrimitive> = z.lazy(() =>
  z.union([
    TreeNodeSchema,
    primitiveTreeNodeSchema,
  ]),
)

export const TreeNodeArraySchema = z.array(TreeNodeOrPrimitiveSchema)

export const ProjectTagSchema = z.enum(['default', 'uiux'] as const)

export const ProjectContentSchema = z.object({
  metadata: z.object({
    id: z.string(),
    title: z.string(),
    order: z.number(),
    cover: z.string(),
    hover: z.string(),
    tags: z.array(ProjectTagSchema),
  }),
  tree: TreeNodeArraySchema,
})

export type ProjectContent = z.infer<typeof ProjectContentSchema>

export function parseTreeNode(input: unknown) {
  return TreeNodeSchema.parse(input)
}

export function safeParseTreeNodeArray(input: unknown) {
  return TreeNodeArraySchema.safeParse(input)
}

export function parseProjectContent(input: unknown) {
  return ProjectContentSchema.parse(input)
}

export function safeParseProjectContent(input: unknown) {
  return ProjectContentSchema.safeParse(input)
}
