import { Helmet } from 'react-helmet-async'
import HeadGoogleAnalytics from '@src/components/HeadGoogleAnalytics';
import { metaData, } from "@src/data";
import { HeadMetadata } from "@src/types/HeadMetadata";

export default function HeadMeta({ metadata }: { metadata: HeadMetadata }) {

  const defaultMetaData = metaData.defaultProjectMetaData;

  const resultMetaData = {
    ...defaultMetaData,
    title: metadata.title ? `${metadata.title} | ${defaultMetaData.title}` : `${defaultMetaData.title}` || '--',
    ogImage: "cover" in metadata && metadata.cover ? metadata.cover : defaultMetaData.ogImage,
  };

  return (
    <>
      <HeadGoogleAnalytics />
      <Helmet>
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
      </Helmet>
    </>
  );
}