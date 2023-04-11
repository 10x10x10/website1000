import React from "react";
import { queryLink } from "../../../lib/module.js";
import { styled, MediaList, } from '../../../lib/stitches.config.js';

const StyledEmbedVideo = styled('div', {
  position: 'relative',

  '& iframe': {
    width: '100%',
    height: '100%',
  },

  variants: {
    size: {
      l: {
        width: 1200,
        height: 1200 / 16 * 9,
      },
      s: {
        width: '100%',
        height: 'calc(100vw / 16 * 9)',
      }
    }
  }
});



/**
 * 嵌入 Youtube 或 Vimeo 等外部影片。
 * 
 * @link  影片連結
 */
export default function EmbedVideo(props) {

  const {
    link = "",
  } = props;

  return (
    <StyledEmbedVideo size={MediaList}>
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