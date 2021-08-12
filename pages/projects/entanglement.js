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
    <Project id="projectM002">

      <EmbedVideo link="projectM002.video_main" />

      <TextContainer>
        <TextTitle>Entanglement</TextTitle>
        <TextContent>「是否有獨立於想法之外的自我? 或是是否有獨立於自我之外的想法?」</TextContent>
        <TextContent>從探討想法與自我的關係出發，將想法拆分為「定義」與「關係」，定義如點，關係如線，聚合而成的結構即是「自我」。接著延伸至建立穩定自我概念的過程，自我穩定後進而產生與外界的良好連結。</TextContent>
        <TextContent>"Is there a self that is independent of ideas? Or is there an idea that is independent of self?"</TextContent>
        <TextContent>Starting from exploring the relationship between ideas and ego, I thought the idea is divided into "definition" and "relationship", the definition is like a point, the relationship is like a line, and the aggregated structure is "self". It then extends to the process of establishing a stable self-concept, which leads to a good connection with the outside world after self-stabilization.</TextContent>
      </TextContainer>

      <MediaList col={2} mCol={2}
        links={[
          "projectM002.video_01_s",
          "projectM002.video_02_s",
          "projectM002.video_03_s",
          "projectM002.video_04_s",
          "projectM002.video_05_s",
          "projectM002.video_06_s",
          "projectM002.video_07_s",
          "projectM002.video_08_s",
        ]} />

      <MediaList col={1} mCol={1}
        title="Concept"
        links={[
          "projectM002.video_09_s",
        ]} />

      <TextContainer>
        <TextContent>故事大綱是建立穩定自我概念的過程，而有穩定的自我概念才有辦法與外界建立良好的連結。</TextContent>
        <TextContent>這次的概念是由上學期所延伸，上學期的主題是不要把想法當成你自己，而新延伸出的問題是「要如何區分自我與想法?」，思考過後所得出的結論是，全部的想法，皆可以拆分為「定義」與「關係」，「定義」是指某個個體、形象、概念等的規範、範圍，比如說，「我」可是說是一種定義，區分我與他者的不同，而「關係」即是每個定義之間的關聯，比如說，「我喜歡天空」即是兩個定義之間的關係。</TextContent>
        <TextContent>如果將上述的文字，轉化為圖像，每個「定義」即是一個點或是圓，而「關係」即是串聯起每個點的線，接著，如果認同「自我是全部想法的總和」，點與線串起來的結構，就可以說是「自我」。</TextContent>
        <TextContent>很多人會用「個」當作想法的單位，但我覺得並不精確，因為實際上想法總是有著前後關係，無法確切的區分一個想法的界線，以前後關係來說的話，用「串」來做為想法的量詞更適當，但想法總是會有分支，或許是網狀的思考方式，但「串」的定義並不侷限在一條線上。</TextContent>
      </TextContainer>

      <MediaList col={1} mCol={1}
        title="Storyboard"
        links={[
          "projectM002.video_10_s",
        ]} />

      <TextContainer>
        <TextContent>外界刺激→自我生成→初次建立自我概念→試圖與外界接觸→不夠穩定的自我造成連結失敗→並且引響自我→回歸內在世界反覆修正→建立穩定的自我概念→成功建立良好連結</TextContent>
      </TextContainer>

      <MediaList col={1} mCol={1}
        title="Styleframe"
        links={[
          "projectM002.video_11_s",
        ]} />

      <Credits>
        <p>Director : 鄭詒謙 1000 Cheng</p>
        <p>Music : Trip Music - Deep Inside</p>
      </Credits>

    </Project>);
}