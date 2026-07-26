import React from "react";
import { z } from "zod";
import type { InspectorComponentProps, TreeComponentDefinition } from "../componentDefinition";

import { styled, } from "../../styles/stitchesStyles";
import Field from "../editor-inspector/Field";
import StepCount from "../editor-inspector/StepCount";

const StyledGridLayout = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  
  rowGap: 10,
  columnGap: 40,

});

export const GridLayoutPropsSchema = z.object({
  sCol: z.number().optional(),
  lCol: z.number().optional(),
}).strict();

export const GridLayoutDefinition: TreeComponentDefinition<"GridLayout", GridLayoutSchemaProps> = {
  type: "GridLayout",
  component: GridLayout,
  propsSchema: GridLayoutPropsSchema,
  allowChildren: [
    "Title",
    "Text",
    // "List",
    // "Space",
    // "Divider",
    "Card",
    "Credits",
    "EmbedVideo",
    "MediaList",
  ],
  inspectorComponent: GridLayoutInspector,
  editorComponent: null,
};

type GridLayoutSchemaProps = z.infer<typeof GridLayoutPropsSchema>;

type GridLayoutProps = GridLayoutSchemaProps & {
  children?: React.ReactNode;
};

function GridLayout({ children, sCol = 1, lCol = 1 }: GridLayoutProps) {
  return (<StyledGridLayout
    css={{
      '@s': { gridTemplateColumns: `repeat(${sCol}, 1fr)`, },
      '@l': { gridTemplateColumns: `repeat(${lCol}, 1fr)`, },
    }}
  >
    {children}
  </StyledGridLayout>)
}

function GridLayoutInspector({ node, onChangeProps }: InspectorComponentProps<"GridLayout", GridLayoutSchemaProps>) {
  if (!node.props) {
    return (<div style={{ color: '#888' }}>No props available.</div>)
  }

  return (
    <div>
      <Field label={'sCol'}>
        <StepCount
          value={node.props.sCol ?? 1}
          max={4}
          onChange={(v) => onChangeProps({
            ...node.props,
            sCol: v,
          })}
        />
      </Field>
      <Field label={'lCol'}>
        <StepCount
          value={node.props.lCol ?? 1}
          max={4}
          onChange={(v) => onChangeProps({
            ...node.props,
            lCol: v,
          })}
        />
      </Field>
    </div>
  )
}

