import React from "react";
import { z } from "zod";
import { createInspector, createEditor } from "../componentInspector";
import type { TreeComponentDefinition } from "../componentDefinition";

import { styled, css, mediaMap, } from "../../styles/stitchesStyles";

const StyledSection = styled('section', {
  boxSizing: 'border-box',
  variants: {
    size: {
      s: {
        margin: '40px 0',
        padding: 0,
      },
      l: {
        margin: '80px 0',
        padding: 0,
      },
    }
  }
});

type SectionJsonProps = {};
export const SectionPropsSchema = z.object({}).strict();

const Section: React.FC<React.PropsWithChildren<SectionJsonProps>> = ({ children }) => {
  return (
    <StyledSection size={mediaMap}>
      {children}
    </StyledSection>
  );
};

export const SectionDefinition: TreeComponentDefinition<"Section", SectionJsonProps> = {
  type: "Section",
  component: Section,
  propsSchema: SectionPropsSchema,
  allowChildren: [
    "Section",
    "Title",
    "Text",
    // "List",
    "Space",
    "Divider",
    "GridLayout",
    "Card",
    "Credits",
    "EmbedVideo",
    "MediaList",
  ],
  inspectorComponent: null,
  editorComponent: null,
};
