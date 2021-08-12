import React from "react";

/**
 * 用來寫標題，只能放在 TextContainer裡面。
 */
export default function TextTitle(props) {

  const { children, } = props;

  return (
    <h2 className="text-title">{children}</h2>
  );
}