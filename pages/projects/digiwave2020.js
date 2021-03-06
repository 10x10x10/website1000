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
    <Project id="project006">

      <EmbedVideo link="project006.video_main" />

      <TextContainer>
        <TextTitle>DigiWave 2020《遙視 Clairvoyance》</TextTitle>
        <TextContent>「遙視」一詞為專有名詞，係指能超越正常視力看到遙遠彼方、甚至不同時空外景象的特殊現象；
          我們認為此義貼切了形容了所有對於遙遠的未來有著無盡好奇，不斷透過想像力與科技推動著世界的人們，於是以此為主題打造了這件巨大的影像作品。
          遙視的表現形式以寬闊的立面與極長的地面影像所組成。
          立面的遠方，是我們遙望亟欲所見之處，腳下的地面，則是我們所途經之路；
          透過快速在不同空間、時間，甚至是維度的量級上跳躍，將觀者的全部觀感拉入「進位」的體驗，並以此作品向夢想家們致敬。</TextContent>
        <TextContent>為定義此作品的精神，我們留下了一些文字：</TextContent>
        <TextContent>面前是一個方框。</TextContent>
        <TextContent>方框裡沒有時間與空間的限制，任由你的意念飄移。</TextContent>
        <TextContent>將出現的是未見過的彼方，未解的謎團。</TextContent>
        <TextContent>當然也有關於你自己，那些已知的過去與未知的未來。</TextContent>
        <TextContent>最後畫面需要停下時，你會選擇留在哪一刻？</TextContent>
      </TextContainer>

      <MediaList col={2} mCol={1}
        links={[
          "project006.image_01",
          "project006.image_02",
          "project006.image_03",
          "project006.image_04",
        ]} />

      <MediaList col={1}
        title="Motion Graphics"
        links={[
          "project006.video_01",
        ]} />

      <MediaList col={2} mCol={1}
        links={[
          "project006.video_02",
          "project006.video_03",
          "project006.video_04",
          "project006.video_05",
          "project006.video_06",
          "project006.video_07",
        ]} />

      <Credits>
        <p>Producer : Ke Jyun Wu</p>
        <p>Art Director : Ting-An Ho</p>
        <p>Motion Graphics : Ting-An Ho, Ke Jyun Wu, 1000 Cheng, Mal Liu</p>
        <p>Interaction System Design, Execution : @chwan1</p>
        <p>Programming : chia Reng Tsai</p>
        <p>Sound Design : Zhen-Yang Huang (Triodust)</p>
      </Credits>

    </Project>);
}