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
    <Project id="project004">

      <EmbedVideo link="project004.video_main" />

      <TextContainer>
        <TextTitle>Pony5ibe - They said ft.陳嫺靜 【Animated Music Video】</TextTitle>
        <TextContent>以分割畫面讓觀者在同一時間看見不同時空的故事，女主與男主在一條相同的「道路」行走，不過彼此的出發地、出發的起因、時空都不相同。而他們在道路中透過光的形式對話。</TextContent>
        <TextContent>在觀者的時間線視角來看，男主已經歷過一次整個道路，在這段道路他沒有得到任何覺醒，因此他做了一個決定，他回頭再次經歷一切。而女主是剛剛進入這段道路的人，從初始探索。兩者在對話的過程中有聆聽、有思辯、有反省，彼此的想法雖不同，卻也因為彼此在「道路」上的對話而產生變化。</TextContent>
        <TextContent>我負責的部分是製作 2D 的動態影像，這次創作計畫幾乎沒有任何的限制，我特別喜歡這種狀態 ──「在我做出來之前，我永遠不知道我最後會做出什麼」的感覺。對我來說，如果製作影像時不具有實驗性，那就太過乏味了。</TextContent>
        <TextContent>反覆地聽著歌曲，讓自己沉浸其中，直到腦海中浮現影像，最後憑著直覺創作，過程所帶來的興奮感與滿足感，也許是持續創作最重要的動力吧。</TextContent>
      </TextContainer>

      <MediaList col={2} mCol={1}
        links={[
          "project004.video_09",
          "project004.video_10",
        ]} />

      <MediaList col={1}
        title="2D Motion Design"
        links={[
          "project004.video_01",
          "project004.video_02",
        ]} />

      <MediaList col={2} mCol={1}
        links={[
          "project004.video_03",
          "project004.video_04",
          "project004.video_05",
          "project004.video_06",
          "project004.video_07",
          "project004.video_08",
        ]} />

      <Credits>
        <p>Director : Parker Shen 沈家緯</p>
        <p>Producer : Xue 0 呂學霖</p>
        <p>Lead 3D Designer : Roll + 梁若嘉</p>
        <p>Character Concept Artist : Xite 吳嘉進</p>
        <p>Character Designer : LoiSup 賴俊傑、River Lin 林詠順</p>
        <p>Scene Designer : Roll + 梁若嘉、Parker Shen 沈家緯</p>
        <p>3D Animator : River Lin 林詠順、Parker Shen 沈家緯 、Roll + 梁若嘉</p>
        <p>2D Motion Designer : 1000 Cheng 鄭詒謙</p>
        <p>Compositor : Roll + 梁若嘉 、 Parker Shen 沈家緯</p>
        <p>Visual Designer : Xue 0 呂學霖</p>
      </Credits>

    </Project>);
}