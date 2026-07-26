import React, { useEffect, useState } from "react";
import { z } from "zod";
import { createInspector } from "../componentInspector";
import type { InspectorComponentProps, TreeComponentDefinition } from "../componentDefinition";
import Textarea from "../editor-inspector/Textarea";
import Field from "../editor-inspector/Field";

import { styled, css, } from "../../styles/stitchesStyles";

export const TextPropsSchema = z.object({
  content: z.array(z.string()).optional(),
}).strict();

export const TextDefinition: TreeComponentDefinition<"Text", TextProps> = {
  type: "Text",
  component: Text,
  propsSchema: TextPropsSchema,
  allowChildren: [],
  inspectorComponent: TextEditor,
  editorComponent: TextViewer,
};

type TextProps = z.infer<typeof TextPropsSchema>;

export const TextStyle = css({
  padding: 0,
  margin: 0,
  marginBottom: 8,
  lineHeight: '26px',
  wordWrap: 'break-word',
  whiteSpace: 'pre-line',
  variants: {
    type: {
      small: {
        fontSize: 14,
        color: '#ffffff80',
      },
      normal: {
        fontSize: 16,
        color: '#ffffffc0',
      },
      big: {
        fontSize: 28,
        fontWeight: 600,
        color: '#ffffffe0',
      }
    }
  }
});

const P = styled('p', TextStyle, {
});



/**
 * @param {!string} type - `'normal'` | `'small'` | `'big'`
 * @param {!string|string[]} content - 
 */

function Text({ content = [] }: TextProps) {
  return content.map((c, i) => <P key={i}>{c}</P>);
}

function TextViewer({ node, onChangeProps }: InspectorComponentProps<"Text", TextProps>) {
  const content = node.props?.content ?? [];
  return (<Text content={content} />);
}

function TextEditor({ node, onChangeProps }: InspectorComponentProps<"Text", TextProps>) {
  const content = Array.isArray(node.props?.content) ? node.props.content : [];
  const initialText = content.join('\n');
  const [textValue, setTextValue] = useState(initialText);

  useEffect(() => {
    setTextValue(initialText);
  }, [initialText]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      onChangeProps({
        ...(node.props ?? {}),
        content: textValue.split('\n'),
      } as TextProps);
    }, 300);

    return () => window.clearTimeout(timeout);
  }, [textValue, node.props, onChangeProps]);

  const flushChanges = () => {
    onChangeProps({
      ...(node.props ?? {}),
      content: textValue.split('\n'),
    } as TextProps);
  };

  return (
    <Field label="content" direction="column">
      <Textarea
        rows={16}
        value={textValue}
        placeholder="Enter text, one line per row"
        onChange={setTextValue}
        onBlur={flushChanges}
      />
    </Field>
  );
}

