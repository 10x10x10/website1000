import React from "react";
import Head from 'next/head'
import { metaData, projectData } from "../../data.js";

export default function HeadMeta({ type, id }) {

  const defaultMetaData = metaData.defaultProjectMetaData;

  let targetMetaData;
  switch (type) {

    case "project":
      targetMetaData = projectData.projects.find((proj) => proj.id == id) || {};
      targetMetaData.ogImage = targetMetaData.cover;
      break;

    case "index":
      targetMetaData = metaData.indexMetaData;
      break;

    case "lab":
      targetMetaData = metaData.labMetaData;
      break;

    case "about":
      targetMetaData = metaData.aboutMetaData;
      break;

    default:
      targetMetaData = {};
      break;
  }

  const resultMetaData = {
    ...defaultMetaData,
    ...targetMetaData,
    title: targetMetaData.title ? `${targetMetaData.title} | ${defaultMetaData.title}` : `${defaultMetaData.title}` || '--',
  };

  return (
    <Head>
      <title>{resultMetaData.title}</title>
      <link rel="icon" href={resultMetaData.icon} />
      <meta name="description" content={resultMetaData.description} />
      <meta name="author" content={resultMetaData.author} />
      <meta property="og:type" content={resultMetaData.ogType} />
      <meta property="og:title" content={resultMetaData.title} />
      <meta property="og:description" content={resultMetaData.description} />
      <meta property="og:image" content={resultMetaData.ogImage} />
      <meta property="og:site_name" content={resultMetaData.ogSiteName} />
      <meta property="og:url" content={resultMetaData.ogUrl} />
    </Head>
  );
}