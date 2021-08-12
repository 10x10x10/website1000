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
    <Project id="project003">

      <EmbedVideo link="project003.video_main" />

      <TextContainer>
        <TextTitle>2020 台北電影節 Taipei Film Festival | 片頭動畫</TextTitle>
        <TextContent>台北電影節是每年於台灣台北市舉辦的電影節，主要由兩大競賽單元「國際新導演競賽」與「臺北電影獎」以及觀摩單元所組成。</TextContent>
        <TextContent>今年台北電影節再度邀請知名設計師廖小子創作主視覺，由「純粹」此一概念出發，運用光線直來直往的傳達與接收，呈現創作者的直抒胸臆與觀眾觀影時的感官動員。</TextContent>
        <TextContent>片頭動畫由平面主視覺所延伸，透過 3D 動畫呈現更豐的光影效果與金屬質感，觀影體驗猶如穿梭在三種感官之中，時而交替，時而重疊，最終由如快門般的出口看到全貌，也許觀者在觀影的同時於腦海錄製全新的影像。</TextContent>
      </TextContainer>

      <MediaList col={2}
        links={[
          "project003.video_01_s",
          "project003.video_02_s",
          "project003.video_03_s",
          "project003.video_04_s",
          "project003.video_05_s",
          "project003.video_06_s",
        ]} />

      <MediaList col={4} mCol={2}
        title="Motion"
        links={[
          "project003.video_08_s",
          "project003.video_07_s",
          "project003.video_09_s",
          "project003.video_10_s",
          "project003.video_11_s",
          "project003.video_12_s",
          "project003.video_13_s",
          "project003.video_14_s",
        ]} />

      <Credits>
        <p>客戶 Client : 台北電影節 Taipei Film Festival</p>
        <p>主視覺設計 Visual Art Designer :  廖小子 Godkidlla</p>
        <p>製作 Production  : 罡風創意映像有限公司 DCraft Studio、宇宙潔癖有限公司 JP SPACE Studio</p>
        <p>監製 Producer : 嚴振欽 ArChin Yen</p>
        <p>導演 Director : 蔣承翰 Double Jiang</p>
        <p>創意 Concept & Storyboard : 鄭詒謙 1000 Cheng</p>
        <p>動態設計 Motion Design : 鄭詒謙 1000 Cheng</p>
        <p>聲音設計 Sound Designer  : 吳梵霖 Hans Wu</p>
      </Credits>

    </Project>);
}