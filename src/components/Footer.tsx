import React from "react";
import PoweredBy from "@src/components/PoweredBy";

const footerData = {
  links: [
    {
      icon: "/icons/social-14-white.svg",
      link: "https://www.behance.net/10x10x10_1000",
    },
    {
      icon: "/icons/social-17-white.svg",
      link: "https://vimeo.com/user74287354",
    },
    {
      icon: "/icons/social-instagram.svg",
      link: "https://www.instagram.com/10x10x10_1000",
    },
    {
      icon: "/icons/social-mail.svg",
      link: "mailto:10x10x10w1000@gmail.com",
    },
  ],
  description: "Plz feel free to contact me",
  copyright: "Copyright © 2019-2025 1000 Cheng",
};

export default function Footer() {
  const { links, description, copyright } = footerData;

  return (
    <div className="footer">
      {/* 
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

      <div style={{height: 10}} />   

      <p>{copyright}</p>
      <PoweredBy /> */}

    </div>
  );
}