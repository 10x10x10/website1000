import React from "react";
import classNames from "classnames";
import { queryLink } from "../../lib/module.js";

/**
 * 
 * 用欄位格狀清單顯示圖片、影片。
 * 
 * @links 圖片、影片的連結。可有多個，並用`,`分隔
 * @col   在電腦要顯示的欄位數
 * @mCol  在手機要顯示的欄位數 - `[可選]`
 * @title 此清單的標題 - `[可選]`
 * 
 */
export default function MediaList(props) {

  const {
    links = "",
    title = "",
    col = 0,
    mCol = col,
  } = props;

  function getLinks(links) {

    let linkList;
    if (Array.isArray(links) === false) {
      linkList = links
        .split(",")
        .map((n) => n.trim());
    } else {
      linkList = links;
    }

    let result = linkList
      .filter((n) => n !== "" && n.startsWith("//") === false)
      .map((n) => queryLink(n))
      .filter((n) => n !== undefined);

    return result;
  };

  function getClass(col, mCol) {
    let colClassName = "grid-c" + col;
    let mColClassName = "m-grid-c" + mCol;
    let result = {
      [colClassName]: true,
      [mColClassName]: true,
    };
    return result;
  };

  function getContent(link) {

    const isImg = function (link) {
      const compareName = [".gif", ".png", ".jpg", ".jpeg",];
      let lowerLink = link.toLowerCase();
      return compareName.some((n) => lowerLink.endsWith(n));
    };

    const isVideo = function (link) {
      const compareName = [".mp4",];
      let lowerLink = link.toLowerCase();
      return compareName.some((n) => lowerLink.endsWith(n));
    };

    if (isVideo(link)) {
      return (
        <video
          src={link}
          loading="lazy"
          autoPlay="true"
          loop="true"
          muted="true"
          playsinline=""
          width="100%"
          type="video/mp4"
        />);
    }

    if (isImg(link)) {
      return (
        <img
          src={link}
          loading="lazy"
          width="100%"
        />);
    }

    return null;
  }

  return (
    <div className="media-list-container">
      {
        (!title) ? (
          null
        ) : (
          <div className="project-text-container project-view-title">
            <h2>{title}</h2>
          </div>
        )
      }
      <div className={classNames("grid-c", getClass(col, mCol))}>
        {
          getLinks(links).map((link) => {
            return (
              <div className="background-video" key={link}>
                {getContent(link)}
              </div>
            );
          })

        }
      </div>
    </div>
  );
}