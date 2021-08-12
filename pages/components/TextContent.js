import React from "react";

/**
 * 用來寫內容，只能放在 TextContainer裡面。
 */
export default function TextContent(props) {

  const { children, } = props;

  return (
    <p className="text-content">{children}</p>
  );
}