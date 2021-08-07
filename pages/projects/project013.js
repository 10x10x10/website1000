import React from "react";
import Project from "../components/Project.js";
import MediaList from "../components/MediaList.js";
import Credits from "../components/Credits.js";
import EmbedVideo from "../components/EmbedVideo.js";
import TextContainer from "../components/TextContainer.js";

export default function ProjectPage(props) {

  return (
    <Project id="project013">

      <EmbedVideo link="project013.video_main" />

      <TextContainer>
        <h1>ROG Phone 5 Launch Event Countdown Video</h1>
        <p>這是一支全世界引頸期盼的電競手機——ROG PHONE 5，是一款效能極佳的電競手機。</p>
        <p>這次的產品發表從影像呈現到手機的開箱體驗，從影像拍攝、動畫製作到互動製作，
          都有夢想的全面參與，加上專案總監製 Freaks 4U Gaming 與各國 KOL 的聯合競賽，將線上線下的體驗連成一氣。</p>
      </TextContainer>

      <MediaList col={3}
        title="Motion"
        links={[
          "project013.video_01_s",
          //"project013.video_02_s",
          "project013.video_03_s",
          "project013.video_04_s",
          "project013.video_05_s",
          "project013.video_06_s",
          "project013.video_07_s",
          "project013.video_08_s",
          "project013.video_09_s",
          "project013.video_10_s",
          "project013.video_11_s",
          "project013.video_12_s",
          "project013.video_13_s",
          "project013.video_14_s",
          "project013.video_15_s",
          "project013.video_16_s",
          "project013.video_17_s",
          "project013.video_18_s",
          "project013.video_19_s",
          "project013.video_20_s",
          "project013.video_21_s",
          "project013.video_22_s",
        ]} />

      <Credits>
        <p>Client : ASUS Republic of Gamers</p>
        <p>Production : MoonShine Animation</p>
        <p>Motion Design : 1000 Cheng, Li Feng Cheng</p>
      </Credits>

    </Project>);
}