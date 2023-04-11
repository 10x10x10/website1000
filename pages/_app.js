import React from 'react';
import '../styles/main.scss';

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <div id="app">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
