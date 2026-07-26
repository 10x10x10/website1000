import type { ZodTypeAny } from 'zod'
import type { TreeComponentDefinition } from '@1000website/shared'

export type ComponentPropDefinition = {
  name: string
  type: string
  optional: boolean
  schema: ZodTypeAny
}

export function validateComponentProps(definition: TreeComponentDefinition<any, any>, props: unknown) {
  return definition.propsSchema.safeParse(props ?? {})
}

const getSchemaDef = (schema: unknown) => {
  if (schema && typeof schema === 'object') {
    return (schema as any)._def ?? (schema as any).def
  }
  return undefined
}

const getSchemaType = (schema: ZodTypeAny): string => {
  const def = getSchemaDef(schema)
  const typeName = def?.typeName ?? def?.type

  if (typeName === 'ZodString' || typeName === 'string') return 'string'
  if (typeName === 'ZodNumber' || typeName === 'number') return 'number'
  if (typeName === 'ZodBoolean' || typeName === 'boolean') return 'boolean'
  if (typeName === 'ZodEnum' || typeName === 'enum') {
    const values = def?.values ?? def?.options ?? Object.values(def?.enum ?? def?.entries ?? {})
    if (Array.isArray(values) && values.length > 0) {
      return `enum(${values.map((val: unknown) => JSON.stringify(val)).join(' | ')})`
    }
    return 'enum'
  }
  if (typeName === 'ZodArray' || typeName === 'array') {
    const elementSchema = def?.element ?? def?.type
    return `${getSchemaType(elementSchema)}[]`
  }
  if (typeName === 'ZodOptional' || typeName === 'optional') {
    return `${getSchemaType(def?.innerType)} | undefined`
  }
  if (typeName === 'ZodNullable' || typeName === 'nullable') {
    return `${getSchemaType(def?.innerType)} | null`
  }
  if (typeName === 'ZodDefault' || typeName === 'default') {
    return getSchemaType(def?.innerType)
  }
  if (typeName === 'ZodUnion' || typeName === 'union') {
    return ((def?.options ?? []) as ZodTypeAny[]).map(getSchemaType).join(' | ')
  }
  if (typeName === 'ZodLiteral' || typeName === 'literal') return JSON.stringify(def?.value)
  if (typeName === 'ZodObject' || typeName === 'object') return 'object'

  return String(typeName)
}

const isOptionalSchema = (schema: ZodTypeAny): boolean => {
  const def = getSchemaDef(schema)
  const typeName = def?.typeName ?? def?.type

  if (typeName === 'ZodOptional' || typeName === 'optional' || typeName === 'ZodNullable' || typeName === 'nullable' || typeName === 'ZodDefault' || typeName === 'default') {
    return true
  }

  if (typeName === 'ZodUnion' || typeName === 'union') {
    return ((def?.options ?? []) as ZodTypeAny[]).some(isOptionalSchema)
  }

  return false
}

const unwrapSchema = (schema: ZodTypeAny): ZodTypeAny => {
  const def = getSchemaDef(schema)
  const typeName = def?.typeName ?? def?.type

  if (typeName === 'ZodOptional' || typeName === 'optional' ||
      typeName === 'ZodNullable' || typeName === 'nullable' ||
      typeName === 'ZodDefault' || typeName === 'default') {
    return unwrapSchema(def?.innerType)
  }

  return schema
}

const getObjectSchemaProps = (schema: ZodTypeAny): ComponentPropDefinition[] => {
  const unwrapped = unwrapSchema(schema)
  const def = (unwrapped as any)._def
  const typeName = def?.typeName ?? def?.type
  if (!def || (typeName !== 'ZodObject' && typeName !== 'object')) {
    return []
  }

  const shapeDef = def.shape
  const shape = typeof shapeDef === 'function' ? shapeDef() : shapeDef
  if (!shape || typeof shape !== 'object') {
    return []
  }

  return Object.entries(shape).map(([name, fieldSchema]) => ({
    name,
    type: getSchemaType(fieldSchema as ZodTypeAny),
    optional: isOptionalSchema(fieldSchema as ZodTypeAny),
    schema: fieldSchema as ZodTypeAny,
  }))
}

export function getComponentPropDefinitions(definition: TreeComponentDefinition<any, any>): ComponentPropDefinition[] {
  return getObjectSchemaProps(definition.propsSchema)
}
