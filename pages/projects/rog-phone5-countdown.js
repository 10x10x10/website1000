import React from "react";
import Project from "../components/Project.js";
import MediaList from "../components/MediaList.js";
import Credits from "../components/Credits.js";
import EmbedVideo from "../components/EmbedVideo.js";
import TextContainer from "../components/TextContainer.js";
import TextTitle from "../components/TextTitle.js";
import TextContent from "../components/TextContent.js";

export default function ProjectPage(props) {

  return (
    <Project id="project013">

      <EmbedVideo link="project013.video_main" />

      <TextContainer>
        <TextTitle>ROG Phone 5 Launch Event Countdown Video</TextTitle>
        <TextContent>這是一支全世界引頸期盼的電競手機——ROG PHONE 5，是一款效能極佳的電競手機。</TextContent>
        <TextContent>這次的TextContent品發表從影像呈現到手機的開箱體驗，從影像拍攝、動畫製作到互動製作，
          都有夢想的全面參與，加上專案總監製 Freaks 4U Gaming 與各國 KOL 的聯合競賽，將線上線下的體驗連成一氣。</TextContent>
      </TextContainer>

      <MediaList col={3} mCol={1}
        title="Motion"
        links={[
          "project013.video_01",
          "project013.video_02",
          //"project013.video_03",
          "project013.video_04",
          "project013.video_05",
          "project013.video_06",
          "project013.video_07",
          //"project013.video_08",
          //"project013.video_09",
          "project013.video_10",
          "project013.video_11",
          "project013.video_12",
          //"project013.video_13",
          //"project013.video_14",
          "project013.video_15",
          //"project013.video_16",
          "project013.video_17",
          //"project013.video_18",
          "project013.video_19",
          //"project013.video_20",
          //"project013.video_21",
        ]} />

      <Credits>
        <p>Client : ASUS Republic of Gamers</p>
        <p>Production : MoonShine Animation</p>
        <p>Motion Design : 1000 Cheng, Li Feng Cheng</p>
      </Credits>

    </Project>);
}