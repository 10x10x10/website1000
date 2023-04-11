import React from "react";
import Project from "../components/Project.js";
import { linkQuery } from "../../data.js";

import EmbedVideo from "../components/EmbedVideo.js";

import {

  Title,
  Text,

  Space,
  Divider,

  Section,
  List,
  MediaList,
  GridLayout,
  Card,

  Credits,
} from "../components/v2";

export default function ProjectPage(props) {

  const projectId = "project012";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>



      <EmbedVideo link="project012.video_main" />

      <Section>
        <Title type='h1' content='Gogoro VIVA MIX 新車發表會' />
        <Title type='h1' content='Gogoro VIVA MIX New Scooter Launch Event' />
        <Text content={[
          '2021 第一季，Gogoro 發表了全新車款 — VIVA MIX。一如其名強調混搭精神，兼具以往車型的特點，也一貫在騎乘體驗科技上持續突破，更加入 POP 個性化配件系統，與結合音樂主題元素的多款車色，自我風格更加鮮明。VIVA MIX 是近期 Gogoro 平衡市場需求、使用者體驗與品牌價值的巔峰之作。而 Gogoro 邀請團隊一起共同策劃此車款登場秀。',


        ]} />
        <Text content={[
          'In the first quarter of 2021, Gogoro unveiled a new scooter model - the VIVA MIX. As the name suggests, it emphasizes the spirit of mix and match, combining the characteristics of previous models while continuing to break through in riding experience technology. It also incorporates the POP personalized accessory system and multiple color schemes that combine music-themed elements to make the self-style more distinctive. VIVA MIX is the pinnacle of Gogoro\'s recent efforts to balance market demand, user experience, and brand value. Gogoro invited the team to jointly plan the launch of this new scooter model.',
        ]} />

      </Section>


      <Section>
        <MediaList col={1} mCol={1}
          links={[
            link.video_01,
            link.video_02,

          ]} />
      </Section>

      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Client : Gogoro',
          'Chief Director : Gogoro Creative Team',
          'Director & Executive : Ultra Combos',
          'Project Manager : William Liu',
          'Producer : Nate Wu',
          'Creative Director : Jay Tseng',
          'Art Director : Ting-An Ho',
          'Motion Designer : Ting-An Ho, Hauzhen Yen, Lynn Chiang, Group.G, 1000 Cheng',
          'Generative Designer : Ke Jyun Wu',
          

        ]} />

    </Project>);
}

