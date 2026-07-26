import React, { useEffect, useState } from "react";
import { z } from "zod";
import type { InspectorComponentProps, TreeComponentDefinition } from "../componentDefinition";
import Textarea from "../editor-inspector/Textarea";
import Field from "../editor-inspector/Field";
import StepCount from "../editor-inspector/StepCount";

import { styled, css, } from "../../styles/stitchesStyles";

const H = css({
  padding: 0,
  margin: 0,
  marginBottom: 16,
});

const H1 = styled('h1', H, {
  fontSize: 36,
  fontWeight: 700,
});

const H2 = styled('h2', H, {
  fontSize: 28,
  fontWeight: 500,
});

const H3 = styled('h3', H, {
  fontSize: 22,
  fontWeight: 400,
});

export const TitlePropsSchema = z.object({
  type: z.enum(['h1', 'h2', 'h3']).optional(),
  content: z.string().optional(),
}).strict();

export const TitleDefinition: TreeComponentDefinition<"Title", TitleProps> = {
  type: "Title",
  component: Title,
  propsSchema: TitlePropsSchema,
  allowChildren: [],
  inspectorComponent: TitleEditor,
  editorComponent: TitleViewer,
};

type TitleProps = z.infer<typeof TitlePropsSchema>;

/**
 * @param {!string} type - `'h1'` | `'h2'` | `'h3'`
 * @param {!string} content - 
 */

function Title({ type = 'h1', content = '' }: TitleProps) {
  switch (type) {
    case 'h1': return <H1 className='convert-selection'>{content}</H1>;
    case 'h2': return <H2 className='convert-selection'>{content}</H2>;
    case 'h3': return <H3 className='convert-selection'>{content}</H3>;
    default: return null;
  }
}

function TitleViewer({ node }: InspectorComponentProps<"Title", TitleProps>) {
  if (!node.props) {
    return <div style={{ color: '#888' }}>No title props.</div>
  }

  const type = node.props.type ?? 'h1'
  const content = node.props.content ?? ''

  switch (type) {
    case 'h1': return <H1>{content}</H1>;
    case 'h2': return <H2>{content}</H2>;
    case 'h3': return <H3>{content}</H3>;
    default: return <H1>{content}</H1>;
  }
}

function TitleEditor({ node, onChangeProps }: InspectorComponentProps<"Title", TitleProps>) {
  const props = node.props ?? {};
  const currentType = props.type ?? 'h1';
  const content = props.content ?? '';
  const [textValue, setTextValue] = useState(content);

  useEffect(() => {
    setTextValue(content);
  }, [content]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      onChangeProps({
        ...props,
        content: textValue,
      } as TitleProps);
    }, 300);

    return () => window.clearTimeout(timeout);
  }, [textValue, props, onChangeProps]);

  const flushChanges = () => {
    onChangeProps({
      ...props,
      content: textValue,
    } as TitleProps);
  };

  const updateType = (nextType: TitleProps['type']) => {
    onChangeProps({
      ...props,
      type: nextType,
    } as TitleProps);
  };

  return (
    <>
      <Field label="type" direction="row">
        <StepCount
          value={currentType === 'h1' ? 1 : currentType === 'h2' ? 2 : 3}
          max={3}
          labels={["h1", "h2", "h3"]}
          onChange={(value) => {
            updateType(value === 1 ? 'h1' : value === 2 ? 'h2' : 'h3');
          }}
        />
      </Field>
      <Field label="content" direction="column">
        <Textarea
          rows={4}
          value={textValue}
          placeholder="Enter title text"
          onChange={setTextValue}
          onBlur={flushChanges}
        />
      </Field>
    </>
  );
}

