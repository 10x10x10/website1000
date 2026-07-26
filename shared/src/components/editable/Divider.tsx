import React from "react";
import { z } from "zod";
import { createInspector } from "../componentInspector";
import type { TreeComponentDefinition } from "../componentDefinition";

import { styled, css, } from "../../styles/stitchesStyles";

const StyledDivider = styled('span', {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  height: 2,
  margin: '16px 0',
  backgroundColor: '#ffffff20',
});

export const DividerPropsSchema = z.object({}).strict();

export const DividerDefinition: TreeComponentDefinition<"Divider", DividerProps> = {
  type: "Divider",
  component: Divider,
  propsSchema: DividerPropsSchema,
  allowChildren: [],
  inspectorComponent: null,
  editorComponent: null,
};

type DividerProps = z.infer<typeof DividerPropsSchema>;

function Divider(_: DividerProps) {
  return (<StyledDivider />);
}
