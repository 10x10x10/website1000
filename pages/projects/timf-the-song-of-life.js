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

  const projectId = "project018";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>



      <EmbedVideo link="project018.video_main" />

      <Section>
        <Title type='h1' content='TIMF－The Song of Life' />
        <Text content={[
          '臺南國際音樂節藉由「生命之歌」的主題，與現處環境議題產生共鳴，期盼喚起後疫情時代的無限希望。',
          '主視覺設計上以抽象的方式詮釋生命的涵義，以層次相疊的不規則的透明流體造型搭配高彩度的光線折射效果，猶如演奏著優美的樂章，譜出生命美妙的韻律感。中心不規則的形體穿透背景、呈現純淨的透感，跨越版面的排版方式與文字間的互動關係，創造三維空間的感官體驗，讓觀者有更多的想像空間，感受生命給予那最初的悸動。',
        ]} />
        <Text content={[
          'The Tainan International Music Festival resonates with current environmental issues through the theme of "The Song of Life" and aims to evoke unlimited hope in the post-pandemic era.The main visual design interprets the meaning of life in an abstract way, using irregular transparent fluid shapes with layers and high-color light refraction effects. It looks like it is playing a beautiful melody, creating a wonderful sense of rhythm of life.The irregular shape of the center penetrates the background and presents a pure sense of transparency. The layout that spans the page and the interaction between the text creates a sensory experience of three-dimensional space, allowing the viewer to have more imaginative space and feel the initial heartbeat that life gives.',
        ]} />
      </Section>


      <Section>
        <MediaList col={1} mCol={1}
          links={[
            link.image_01,
            link.image_02,

          ]} />
      </Section>

      <Section>
        <MediaList col={2} mCol={1}
          links={[
            link.image_03,
            link.image_04,
            link.image_05,
            link.image_06,

          ]} />
      </Section>

      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Client : Tainan City Government',
          'Art Director : Midnight Design',
          'Design : I Chan Su、Hsuan Yu Hsu',
          '3D Motion Design : 1000 Cheng',
          'Typeface : 文鼎字型',


        ]} />

    </Project>);
}

