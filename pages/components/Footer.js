import React from "react";
import { footerData } from "../../data.js";

export default function Header(props) {

  const { links, description, copyright } = footerData;

  return (
    <div className="footer">
      <div className="link-icon-container">
        {
          links.map((item) => {
            return (
              <a href={item.link} key={item.link}>
                <img src={item.icon} className="icon" />
              </a>);
          })
        }
      </div>
      <p>{description}</p>
      <p>{copyright}</p>
    </div>
  );
}