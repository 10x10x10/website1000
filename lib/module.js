import { linkQuery } from "../data.js";
import classNames from "classnames";



const queryLink = function (link) {
  let linkBlocks = link.split(".");
  let pointer = linkQuery;
  for (let i = 0; i < linkBlocks.length; i++) {
    pointer = pointer[linkBlocks[i]];
  }
  return pointer;
};



const sizeRegex = /(.+)\?\[(\d+)[x*](\d+)\]/;  // aaaaaa:[100x200] or zzzzzz:[30*60]
function getMediaContent(link, classes = []) {

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

  const subExMatch = (link, matchNames) => {
    let lowerLink = link.toLowerCase();
    return matchNames.some((n) => lowerLink.endsWith(n));
  }

  const { urlLink, width, height } = getMediaInfo(link);


  if (subExMatch(urlLink, [".mp4",])) {
    return (
      <video
        className={classNames("media-video", ...classes)}
        src={urlLink}
        loading="lazy"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline=""
        width="100%"
        type="video/mp4"
      />);
  }

  if (subExMatch(urlLink, [".png", ".jpg", ".jpeg",])) {
    return (
      <img
        className={classNames("media-img", ...classes)}
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
        className={classNames("media-gif", ...classes)}
        src={urlLink}
        loading="lazy"
        width="100%"
        alt=""
        title=""
      />);
  }

  return null;
}





export { queryLink, getMediaContent };