import React from "react";
import classNames from "classnames";
import { queryLink } from "../../lib/module.js";
import Media from "./Media.js";

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
              <div className="media-container" key={link}>
                <Media link={link} />
              </div>
            );
          })

        }
      </div>
    </div>
  );
}