import React from "react";

type PoweredByProps = {
  className?: string
}

export default function PoweredBy({ className }: PoweredByProps) {
  const text = `© 2026 powered by `;
  const owenWebsiteUrl = "https://ttesttes93405.github.io/OwenCollections/";

  return (
    <div className={className ?? "powered-by"}>
      <p>
        {text}
        <a href={owenWebsiteUrl} target="_blank" rel="noreferrer">
          Owen Sun
        </a>
      </p>
    </div>
  );
}
