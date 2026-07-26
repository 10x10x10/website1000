import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import Loading from "./Loading";

const sizeRegex = /(.+)\?\[(\d+)[x*](\d+)\]/;

type MediaProps = {
  link: string
  classes?: string[]
  position?: 'relative' | 'absolute'
  enableLoading?: boolean
  forwardedRef?: React.Ref<HTMLDivElement>
  enterCount?: number
}

const getMediaInfo = (link: string) => {
  const regResult = link.match(sizeRegex);

  if (!regResult) {
    return {
      urlLink: link,
      width: 1,
      height: 1,
    }
  }

  return {
    urlLink: regResult[1],
    width: parseInt(regResult[2], 10),
    height: parseInt(regResult[3], 10),
  }
}

function Media(props: MediaProps) {
  const {
    link,
    classes = [],
    position = "relative",
    enableLoading = true,
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const { urlLink, width, height } = getMediaInfo(link);
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement | null>(null);

  useEffect(() => {
    const updateLoadingState = () => {
      setIsLoading(false);
    };

    const current = mediaRef.current;
    if (!current) {
      return;
    }

    if (current instanceof HTMLImageElement) {
      if (current.complete) {
        updateLoadingState();
      } else {
        current.onload = updateLoadingState;
      }
    } else if (current instanceof HTMLVideoElement) {
      if (current.readyState >= 3) {
        updateLoadingState();
      } else {
        current.onloadeddata = updateLoadingState;
      }
    }
  }, [mediaRef]);

  function getMediaContent() {
    const subExMatch = (linkValue: string, matchNames: string[]) => {
      const lowerLink = linkValue.toLowerCase();
      return matchNames.some((n) => lowerLink.endsWith(n));
    }

    if (subExMatch(urlLink, [".mp4"])) {
      return (
        <video
          ref={mediaRef as React.RefObject<HTMLVideoElement>}
          className={classNames("media-video", ...classes, { loading: isLoading })}
          src={urlLink}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
          muted
          autoPlay
          loop
          playsInline
        />
      );
    }

    if (subExMatch(urlLink, [".png", ".jpg", ".jpeg"])) {
      return (
        <img
          ref={mediaRef as React.RefObject<HTMLImageElement>}
          className={classNames("media-img", ...classes, { loading: isLoading })}
          src={urlLink}
          loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
          alt=""
          title=""
        />
      );
    }

    if (subExMatch(urlLink, [".gif"])) {
      return (
        <img
          ref={mediaRef as React.RefObject<HTMLImageElement>}
          className={classNames("media-gif", ...classes, { loading: isLoading })}
          src={urlLink}
          loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
          alt=""
          title=""
        />
      );
    }

    return null;
  }

  const aspectRatio = width > 0 && height > 0 ? `${width} / ${height}` : '1 / 1';

  return (
    <div
      ref={props.forwardedRef}
      style={{ position, width: '100%', aspectRatio }}
      className={classNames("media-item", { "media-show": !props.forwardedRef || (props.enterCount ?? 0) > 0 })}
    >
      {getMediaContent()}
      {enableLoading ? <Loading isLoading={isLoading} /> : null}
    </div>
  );
}

export default Media;
