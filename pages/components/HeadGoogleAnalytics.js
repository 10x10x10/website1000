import React from "react";
import Script from 'next/script'

export default function HeadGoogleAnalytics(props) {

  const id = "UA-171392879-1";

  return (
    <>
      <Script
        strategy="beforeInteractive"
        async={true}
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />

      <Script
        id="headGoogleAnalytics"
      >
        {`
        // Google Analytics - in HeadGoogleAnalytics.js
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());

        gtag("config", "${id}");
        `}
      </Script>
    </>
  );
}