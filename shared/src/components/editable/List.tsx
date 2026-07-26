import React from "react";
import { z } from "zod";
import { createInspector, createEditor } from "../componentInspector";
import type { TreeComponentDefinition } from "../componentDefinition";

import { styled, css, } from "../../styles/stitchesStyles";
import { TextStyle, } from "./Text";

const ListStyle = css({
  paddingLeft: 24,
});

const UL = styled('ul', ListStyle, {

});

const OL = styled('ol', ListStyle, {

});


const LI = styled('li', TextStyle, {
});

export const ListPropsSchema = z.object({
  type: z.enum(['order', 'unorder']).optional(),
  content: z.array(z.string()).optional(),
}).strict();

export const ListDefinition: TreeComponentDefinition<"List", ListProps> = {
  type: "List",
  component: List,
  propsSchema: ListPropsSchema,
  allowChildren: [],
  inspectorComponent: createInspector(ListPropsSchema),
  editorComponent: createEditor(ListPropsSchema),
};

type ListProps = z.infer<typeof ListPropsSchema>;

/**
 * @param {!string} type - `'order'` | `'unorder'`
 * @param {!string} content - 
 */

function List({ type = 'order', content = [] }: ListProps) {


  const Wrapper = type === 'order' ? OL : UL;


  return (<Wrapper>
    {content.map((el, i) => (<LI key={i} type={'normal'}>{el}</LI>))}
  </Wrapper>)





}

