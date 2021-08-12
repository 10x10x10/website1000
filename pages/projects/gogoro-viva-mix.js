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
    <Project id="project012">

      <EmbedVideo link="project012.video_main" />

      <TextContainer>
        <TextTitle>Gogoro VIVA MIX 新車發表會</TextTitle>
        <TextContent>2021 第一季，Gogoro 發表了全新車款 — VIVA MIX。</TextContent>
        <TextContent>一如其名強調混搭精神，兼具以往車型的特點，也一貫在騎乘體驗科技上持續突破，更加入 POP 個性化配件系統，與結合音樂主題元素的多款車色，自我風格更加鮮明。
          VIVA MIX 是近期 Gogoro 平衡市場需求、使用者體驗與品牌價值的巔峰之作。而 Gogoro 邀請團隊一起共同策劃此車款登場秀。</TextContent>
      </TextContainer>

      <MediaList col={1}
        links={[
          "project012.video_02",
          "project012.video_01_s",
        ]} />
        
      <Credits foldable>
        <p>Client : Gogoro</p>
        <p>Chief Director : Gogoro Creative Team</p>
        <p>Director & Executive : Ultra Combos</p>

        <p>Project Manager : William Liu</p>
        <p>Producer : Nate Wu</p>
        <p>Creative Director : Jay Tseng</p>
        <p>Art Director : Ting-An Ho</p>

        <p>Motion Designer : Ting-An Ho, Hauzhen Yen, Lynn Chiang, Group.G, 1000 Cheng</p>
        <p>Generative Designer : Ke Jyun Wu</p>
        <p>Character Design : Mix Code</p>
        <p>Motion Capture Operator : MoonShine Animation</p>
        <p>Choreographer : Les Petites Choses Production</p>
        <p>Technology Director : Nate Wu</p>
        <p>Programmer : Nate Wu, Hoba Yang, Wei-An Chen, Reng Tsai</p>
        <p>Hardware Director : Herry Chang</p>
        <p>Hardware Engineering : Herry Chang, Alex Lu, Chia-Yun Song, Chia-Wei Lin</p>
        <p>Executor Team : Prolong Lai, Joyce Huang, Hsin Chen, Chi-feng Ying, Choong-Wei Ng</p>
        <p>AGV Trackway Design : Glenn Huang</p>
        <p>AGV Programming : Reng Tsai, Wei-An Chen, Chia-Yun Song, Nate Wu</p>
        <p>AGV Technology Director : ECON Robot</p>
        <p>Spatial Design & Construction : Event Design</p>
        <p>Lighting Designer : Rokerfly Design</p>
        <p>Music Designer : DJ QuestionMark（Chi-Shuan Ying）</p>
        <p>Network Engineer : KlickKlack Communications</p>
        <p>Stage Manager : Hsu Cheng Lei</p>
        <p>Timecode Programming : Wei-An Chen</p>
        <p>Visual Operator : Wei-An Chen</p>
        <p>Rider Casting : OOAD</p>
        <p>Program Director : YAHOO TV</p>
        <p>Filming Team : Asking Gee</p>
        <p>Editor : Asking Gee, Nanez Chen</p>
      </Credits>

    </Project>);
}