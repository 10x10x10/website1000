import React from "react";
import { z } from "zod";
import { createInspector } from "../componentInspector";
import type { TreeComponentDefinition } from "../componentDefinition";

import { styled, css, } from "../../styles/stitchesStyles";

const StyledSpace = styled('span', {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  height: 32,
});

export const SpacePropsSchema = z.object({}).strict();

export const SpaceDefinition: TreeComponentDefinition<"Space", SpaceProps> = {
  type: "Space",
  component: Space,
  propsSchema: SpacePropsSchema,
  allowChildren: [],
  inspectorComponent: null,
  editorComponent: null,
};

type SpaceProps = z.infer<typeof SpacePropsSchema>;

function Space(_: SpaceProps) {
  return (<StyledSpace />);
}
