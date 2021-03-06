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
    <Project id="projectM001">

      <EmbedVideo link="projectM001.video_main" />

      <TextContainer>
        <TextTitle>SIMPLEX</TextTitle>
        <TextContent>Simplex 是 simple 與 complex 的複合字，字面上的意思是「簡單的複雜」，隱含的意思是「人」。 但它同時也是數學上的專有名詞，意旨在 n 維空間中，取 n+1 個點，讓這些點相互連接，可構成 Simplex。 在零到三維空間中的 simplex，分別代表點、線段、三角形，與四面體。而這次動畫的主角即是三維的 Simplex 。 一如往常的話只說了一半，簡而言之是在描述人與想法的互動關係。</TextContent>
        <TextContent>Simplex is a compound word of simple and complex, literally meaning "simple complexity", implied meaning "people." But it is also a mathematical term, meaning that in n-dimensional space, take n+1 points, and connect these points to each other to form Simplex. Simplex in zero to three-dimensional space, representing points, line segments, triangles, and tetrahedrons. The protagonist of this animation is the 3D Simplex. As usual, I only said half of it. In short, it describes the interaction between people and ideas.</TextContent>
      </TextContainer>

      <MediaList col={2} mCol={1}
        title="Motion"
        links={[
          "projectM001.video_01_s",
          "projectM001.video_02_s",
          "projectM001.video_03_s",
          "projectM001.video_04_s",
        ]} />

      <MediaList col={1} mCol={1}
        title="Concept"
        links={[
          "projectM001.video_05_s",
        ]} />

      <TextContainer>
        <TextContent>不要把你自己的想法當成你自己，是參考最高休息法這本書，我擷取出我覺得有趣的內容，書中的比喻是說，你是車站，而想法是來來去去的列車，但我們不會說，列車就是車站本身。在閱讀這個篇章時，我聯想到一個心理學的專有名詞「可愛侵略性」，是在描述有一群人會在看到可愛的動物時，產生想要捏死他的念頭，但研究發現，並不是這些人特別有變態，而是因為大腦，不論在開心或難過時，都傾向讓情緒趨於平衡，因此在開心的時候，產生負面念頭，只是大腦的一個正常機制。我覺得這也應證了「不要把你的想法當成你自己」。</TextContent>
        <TextContent>雖然一開始是以「不要把你的想法當成你自己為主題」，但後來在構思故事的過程中，覺得這本來就是描述冥想的其中一個概念，所以如果限縮在這裡，有些狹隘，因此後來還是以「冥想」本身為概念核心。這次想用幾何形去呈現故事，故事大綱是，主角是一個三角形，他接觸到象徵的想法的其他幾何形時，就會因此變形，原本對想法的態度是好奇興奮的，但隨著想法越來越多，他越來越無法專心，就因此變形得越來越快，直到他受不了崩潰之時，他選擇閉上眼睛，回歸自己的內心，透過冥想，調整自己的呼吸，他的內心世界才漸漸平和。</TextContent>
      </TextContainer>

      <MediaList col={2} mCol={1}
        title="Storyboard"
        links={[
          "projectM001.video_06_s",
          "projectM001.video_07_s",
        ]} />

      <Credits>
        <p>Director : 鄭詒謙 1000 Cheng</p>
        <p>Music : 劉翼翬 Yi-Huei Liou</p>
      </Credits>

    </Project>);
}