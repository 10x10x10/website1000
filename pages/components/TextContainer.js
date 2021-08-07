import React from "react";

/**
 * 用來寫標題與內文的容器。
 * 標題使用`<h1>`，內文使用`<p>`。
 */
export default function TextContainer(props) {

  const { children, } = props;

  return (
    <div className="project-text-container">
      {children}
    </div>);
}