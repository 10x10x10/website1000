import React from "react";
import Head from 'next/head'

export default function HeadGoogleAnalytics(props) {

  const id = "UA-171392879-1";

  return (
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></script>
      <script>
        {`
        // Google Analytics - in HeadGoogleAnalytics.js
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${id}');
        `}
      </script>
    </Head>
  );
}