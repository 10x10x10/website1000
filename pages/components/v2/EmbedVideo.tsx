import React from "react";

/**
 * 嵌入 Youtube 或 Vimeo 等外部影片。
 * 
 * @link  影片連結
 */

type EmbedVideoProps = {
  link: string;
}

export default function EmbedVideo(props: EmbedVideoProps) {

  const {
    link = "",
  } = props;


  return (
    <div className="video-container">
      <iframe
        src={link}
        scrolling="no"
        frameBorder={0}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}>
      </iframe>
    </div>);
}