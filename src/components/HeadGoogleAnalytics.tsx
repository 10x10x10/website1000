import React from "react";
import { Helmet } from 'react-helmet-async'

export default function HeadGoogleAnalytics() {

  const id = "UA-171392879-1";
  const gaScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "${id}");`;

  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script>{gaScript}</script>
    </Helmet>
  );
}