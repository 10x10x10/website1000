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

  const projectId = "project003";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>



      <EmbedVideo link="project003.video_main" />

      <Section>
        <Title type='h1' content='2020 台北電影節 片頭動畫' />
        <Title type='h1' content='2020 Taipei Film Festival Opening Animation' />
        <Text content={[
          '台北電影節是每年於台灣台北市舉辦的電影節，主要由兩大競賽單元「國際新導演競賽」與「臺北電影獎」以及觀摩單元所組成。',
          '今年台北電影節再度邀請知名設計師廖小子創作主視覺，由「純粹」此一概念出發，運用光線直來直往的傳達與接收，呈現創作者的直抒胸臆與觀眾觀影時的感官動員。',
          '片頭動畫由平面主視覺所延伸，透過 3D 動畫呈現更豐的光影效果與金屬質感，觀影體驗猶如穿梭在三種感官之中，時而交替，時而重疊，最終由如快門般的出口看到全貌，也許觀者在觀影的同時於腦海錄製全新的影像。',
        ]} />
        <Text content={[
          '"Taipei Graphic Interflow Festival" was an international design exchange conference held in 2019, inviting top professionals in the fields of graphic design, visual effects, and motion design from around the world to discuss and analyze design face-to-face, absorb new knowledge from different countries, and showcase future design trends.',
          'The Chinese name of the event called “台北設計電波” (Taipei Design Radiowave). We visited the organizer for the reason for this naming: The word "radio wave" is taken from the book "Darwin Radio Waves". It aims to tell that evolution may not be a gradual change, but an instantaneous evolution. Inspired by this concept, dynamic and design elements were used as visual imagery, representing constant dissemination and breaking of frameworks, with Taipei as the center emitting waves of rays, ultimately creating stunning experimental visual animations.',
        ]} />

      </Section>


      <Section>
        <MediaList col={2} mCol={2}
          links={[
            link.video_01_s,
            link.video_02_s,
            link.video_03_s,
            link.video_04_s,
            link.video_05_s,
            link.video_06_s,

          ]} />
      </Section>

      <Section>
        <MediaList col={4} mCol={2}
          links={[
            link.video_08_s,
            link.video_09_s,
            link.video_10_s,
            link.video_11_s,
            link.video_12_s,
            link.video_13_s,
            link.video_14_s,

          ]} />
      </Section>

      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Client : 台北電影節 Taipei Film Festival',
          'Visual Art Designer : 廖小子 Godkidlla',
          'Production : 罡風創意映像有限公司 DCraft Studio、宇宙潔癖有限公司 JP SPACE Studio',
          'Producer : 嚴振欽 ArChin Yen',
          'Director : 蔣承翰 Double Jiang',
          'Concept & Storyboard : 鄭詒謙 1000 Cheng',
          'Motion Design : 鄭詒謙 1000 Cheng',
          'Sound Designer : 吳梵霖 Hans Wu',


        ]} />

    </Project>);
}
