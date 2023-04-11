import React from "react";
import { queryLink } from "../../../lib/module.js";
import { styled, } from '../../../styles/stitchesStyles.js';

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