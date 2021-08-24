import React from "react";
import { footerData } from "../../data.js";
import PoweredBy from "./PoweredBy.js";

export default function Header(props) {

  const { links, description, copyright } = footerData;

  return (
    <div className="footer">

      <div className="link-icon-container">
        {
          links.map((item) => {
            return (
              <a href={item.link} key={item.link} target="_blank">
                <img src={item.icon} className="icon" />
              </a>);
          })
        }
      </div>
      <p>{description}</p>

      <div style={{height: 10}} />   {/* split space */}

      <p>{copyright}</p>
      <PoweredBy />

    </div>
  );
}