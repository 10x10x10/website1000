import React from "react";

type PoweredByProps = {
};

export default function PoweredBy(props: PoweredByProps) {

  const text = `© 2023 Website powered by `;

  const owenWebsiteUrl = "https://ttesttes93405.github.io/OwenCollections/";
  const owen = (<a
    href={owenWebsiteUrl}
    target="_blank"
  > Owen Sun </a>)

  return (
    <div className="powered-by" >
      <p>{text}{owen} </p>
    </div>
  );
}