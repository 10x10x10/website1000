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
    <Project id="project018">

      <EmbedVideo link="project018.video_main" />

      <TextContainer>
        <TextTitle>TIMF－The Song of Life</TextTitle>
        <TextContent>
          臺南國際音樂節藉由「生命之歌」的主題，與現處環境議題產生共鳴，期盼喚起後疫情時代的無限希望。
          主視覺設計上以抽象的方式詮釋生命的涵義，以層次相疊的不規則的透明流體造型搭配高彩度的光線折射效果，猶如演奏著優美的樂章，譜出生命美妙的韻律感。
          中心不規則的形體穿透背景、呈現純淨的透感，跨越版面的排版方式與文字間的互動關係，創造三維空間的感官體驗，讓觀者有更多的想像空間，感受生命給予那最初的悸動。
          </TextContent>
        
      </TextContainer>

      <MediaList col={1} mCol={1}
        links={[
          "project018.image_01",
          "project018.image_02",
        
        ]} />

      <MediaList col={2} mCol={1}
        links={[
          "project018.image_03",
          "project018.image_04",
          "project018.image_05",
          "project018.image_06",
        ]} />

      

      <Credits>
        <p>Client : Tainan City Government</p>
        <p>Art Director : Midnight Design</p>
        <p>Design : I Chan Su、Hsuan Yu Hsu</p>
        <p>3D Motion Design : 1000 Cheng</p>
        <p>Typeface : 文鼎字型</p>
      
      </Credits>

    </Project>);
}