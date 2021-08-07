import React from "react";
import { queryLink } from "../../lib/module.js";

/**
 * 嵌入 Youtube 或 Vimeo 等外部影片。
 * 
 * @link  影片連結
 */
export default function EmbedVideo(props) {

  const {
    link = "",
  } = props;

  function getLink() {
    return queryLink(link);
  };

  return (
    <div className="video-container">
      <iframe
        src={getLink()}
        scrolling="no"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="true">
      </iframe>
    </div>);
}