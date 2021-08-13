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
    <Project id="project001">

      <EmbedVideo link="project001.video_main" />

      <TextContainer>
        <TextTitle>TGIF 台北設計電波｜國際設計交流年會主視覺影片</TextTitle>
        <TextContent>《TGIF 台北設計電波》是一場在2019年舉辦的國際設計交流年會，邀請全球橫跨平面設計、視覺特效與與動態設計領域的翹楚與觀眾面對面剖析設計，吸取來自不同國界的新知，並展示未來的設計趨勢。</TextContent>
        <TextContent>設計電波的「電波」一詞取材自《達爾文電波》一書，旨在講述演化不是漸變，而是一種瞬間的進化，向超越自身常識外的事物學習，探索知識的盡頭。圍繞此概念做為發想，動態與設計使用不斷傳播、打破框架作為視覺意象，從台北二字出發，以此為中心發出一波波的射線不斷發送，最終塑造出令人驚豔的實驗性視覺動畫。</TextContent>
      </TextContainer>

      <MediaList col={2}
        links={[
          "project001.video_01_s",
          "project001.video_02_s",
          "project001.video_03_s",
          "project001.video_04_s",
        ]} />

      <MediaList col={4} mCol={2}
        links={[
          "project001.video_05_s",
          "project001.video_06_s",
          "project001.video_07_s",
          "project001.video_08_s",
          "project001.video_09_s",
          "project001.video_10_s",
          "project001.video_11_s",
          "project001.video_12_s",
          "project001.video_13_s",
          "project001.video_14_s",
          "project001.video_15_s",
          "project001.video_16_s",
        ]} />

      <Credits>
        <p>Production : G.Production</p>
        <p>Director : 林思翰 Hans Lin</p>
        <p>Storyboard Artist : 何庭安 Ting-An Ho、陳柏尹 Bruce Chen</p>
        <p>Designer : 何庭安 Ting-An Ho</p>
        <p>Animator : 陳柏尹 Bruce Chen</p>
        <p>3D Animator : 鄭詒謙 1000 Cheng</p>
        <p>Music {"&"} Sound Production : 空氣載體 The AirCarrier</p>
        <p>Original Music : 黃鎮洋 Triodust</p>
        <p>Sound Design : 黃鎮洋 Triodust</p>
      </Credits>

    </Project>);
}