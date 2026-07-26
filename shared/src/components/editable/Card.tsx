import React from "react";
import { z } from "zod";
import { createInspector, createEditor } from "../componentInspector";
import type { TreeComponentDefinition } from "../componentDefinition";

import { styled, css, } from "../../styles/stitchesStyles";

const StyledCard = styled('div', {
  backgroundColor: '#88888820',
  borderRadius: 8,
  padding: 16,
});

export type CardJsonProps = {};
export const CardPropsSchema = z.object({}).strict();

export const CardDefinition: TreeComponentDefinition<"Card", CardJsonProps> = {
  type: "Card",
  component: Card,
  propsSchema: CardPropsSchema,
  allowChildren: [
    "Title",
    "Text",
    "Space",
    "EmbedVideo",
    "MediaList",
  ],
  inspectorComponent: null,
  editorComponent: null,
};

type CardProps = React.PropsWithChildren<CardJsonProps>;

function Card({ children }: CardProps) {
  return (<StyledCard>
    {children}
  </StyledCard>)
}
