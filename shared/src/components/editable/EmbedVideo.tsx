import React from "react";
import { z } from "zod";
import type { InspectorComponentProps, TreeComponentDefinition } from "../componentDefinition";
import { styled, } from '../../styles/stitchesStyles';
import Input from "../editor-inspector/Input";
import Field from "../editor-inspector/Field";

const StyledEmbedVideo = styled('div', {
  position: 'relative',
  width: '100%',
  paddingTop: `${9 / 16 * 100}%`,

  '& iframe': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },

});

export const EmbedVideoPropsSchema = z.object({
  link: z.string().optional(),
}).strict();

export const EmbedVideoDefinition: TreeComponentDefinition<"EmbedVideo", EmbedVideoProps> = {
  type: "EmbedVideo",
  component: EmbedVideo,
  propsSchema: EmbedVideoPropsSchema,
  allowChildren: [],
  inspectorComponent: EmbedVideoInspector,
  editorComponent: EmbedVideoViewer,
};

type EmbedVideoProps = z.infer<typeof EmbedVideoPropsSchema>;

function EmbedVideo({ link = "" }: EmbedVideoProps) {

  return (
    <StyledEmbedVideo>
      <iframe
        src={link}
        scrolling="no"
        frameBorder={0}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}>
      </iframe>
    </StyledEmbedVideo>);
}

function EmbedVideoViewer({ node }: InspectorComponentProps<"EmbedVideo", EmbedVideoProps>) {
  if (!node.props) {
    return (<div style={{ color: '#888' }}>No media configuration provided.</div>)
  }

  const link = node.props.link;
  return <EmbedVideo link={link} />
}

function EmbedVideoInspector({ node, onChangeProps }: InspectorComponentProps<"EmbedVideo", EmbedVideoProps>) {
  const link = node.props?.link ?? '';

  return (
    <Field label="link" direction="column">
      <Input
        value={link}
        placeholder="Enter embed URL"
        type="url"
        updateStrategy="never"
        onChange={(value) => onChangeProps({
          ...(node.props ?? {}),
          link: value,
        })}
      />
    </Field>
  )
}