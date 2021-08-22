import React, { useState, useEffect, createRef } from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import propTypes from "prop-types";
import Loading from "./Loading";


const sizeRegex = /(.+)\?\[(\d+)[x*](\d+)\]/;  // aaaaaa:[100x200] or zzzzzz:[30*60]
const getMediaInfo = (link) => {
  const regResult = link.match(sizeRegex);

  if (!regResult) {
    return {
      urlLink: link,
      width: 10,
      height: 10,
    }
  }

  return {
    urlLink: regResult[1],
    width: parseInt(regResult[2]),
    height: parseInt(regResult[3]),
  }

}

function Media(props) {

  const {
    link,
    classes,
    position,
    enableLoading,
  } = props;

  const [isLoading, useIsLoading] = useState(true);

  const { urlLink, width, height } = getMediaInfo(link);

  const mediaRef = createRef();

  useEffect(() => {

    const updateFunc = () => {
      useIsLoading(false);
    };

    switch (mediaRef.current.nodeName) {
      case "IMG":

        const img = mediaRef.current;
        if (img.complete) {
          updateFunc();
        } else {
          img.onload = updateFunc;
        }

        break;

      case "VIDEO":
        const ved = mediaRef.current;
        console.log()
        if (ved.readyState >= 3) {
          updateFunc();
        } else {
          ved.onloadeddata = updateFunc;
        }

        break;
    }
  })


  function getMediaContent() {

    const subExMatch = (link, matchNames) => {
      let lowerLink = link.toLowerCase();
      return matchNames.some((n) => lowerLink.endsWith(n));
    }

    if (subExMatch(urlLink, [".mp4",])) {
      return (
        <video
          ref={mediaRef}
          className={classNames("media-video", ...classes, { loading: isLoading })}
          src={urlLink}
          type="video/mp4"
          width="100%"
          muted
          autoPlay
          loop
          playsInline
        />);
    }

    if (subExMatch(urlLink, [".png", ".jpg", ".jpeg",])) {
      return (
        <img
          ref={mediaRef}
          className={classNames("media-img", ...classes, { loading: isLoading })}
          src={urlLink}
          loading="lazy"
          width="100%"
          alt=""
          title=""
        />);
    }

    if (subExMatch(urlLink, [".gif",])) {
      return (
        <img
          ref={mediaRef}
          className={classNames("media-gif", ...classes, { loading: isLoading })}
          src={urlLink}
          loading="lazy"
          width="100%"
          alt=""
          title=""
        />);
    }

    return null;
  }


  return (
    <div
      ref={props.forwardedRef}
      style={{ position, inset: 0, paddingTop: `${(height / width * 100)}%` }}
      className={classNames("media-item", { "media-show": !props.forwardedRef || props.enterCount > 0 })}
    >
      {getMediaContent()}
      {enableLoading ? (<Loading isLoading={isLoading} />) : null}
    </div>
  );
}

Media.propTypes = {
  link: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(propTypes.string),
  position: PropTypes.oneOf(["relative", "absolute"]),
  enableLoading: PropTypes.bool,
}

Media.defaultProps = {
  link: "",
  classes: [],
  position: "relative",
  enableLoading: true,
};

Media.getInitialProps = async () => Media.defaultProps;


export default Media;