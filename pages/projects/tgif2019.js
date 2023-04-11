import React from "react";
import Project from "../components/Project.js";
import { linkQuery } from "../../data.js";

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
  EmbedVideo,

  Credits,
} from "../components/v2";

export default function ProjectPage(props) {

  const projectId = "project001";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>



      <EmbedVideo link={link.video_main} />

      <Section>
        <Title type='h1' content='TGIF 台北設計電波｜國際設計交流年會主視覺影片' />
        <Title type='h1' content='Taipei Graphic Interflow Festival Promote Video' />
        <Text content={[
          '《TGIF 台北設計電波》是一場在 2019 年舉辦的國際設計交流年會，邀請全球橫跨平面設計、視覺特效與與動態設計領域的翹楚與觀眾面對面剖析設計，吸取來自不同國界的新知，並展示未來的設計趨勢。',
          '設計電波的「電波」一詞取材自《達爾文電波》一書，旨在講述演化不是漸變，而是一種瞬間的進化，向超越自身常識外的事物學習，探索知識的盡頭。圍繞此概念做為發想，動態與設計使用不斷傳播、打破框架作為視覺意象，從台北二字出發，以此為中心發出一波波的射線不斷發送，最終塑造出令人驚豔的實驗性視覺動畫。',
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

          ]} />
      </Section>

      <Section>
        <MediaList col={4} mCol={2}
          links={[
            link.video_05_s,
            link.video_06_s,
            link.video_07_s,
            link.video_08_s,
            link.video_09_s,
            link.video_10_s,
            link.video_11_s,
            link.video_12_s,
            link.video_13_s,
            link.video_14_s,
            link.video_15_s,
            link.video_16_s,

          ]} />
      </Section>

      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Production : G.Production',
          'Director : 林思翰 Hans Lin',
          'Storyboard Artist : 何庭安 Ting-An Ho、陳柏尹 Bruce Chen',
          'Designer : 何庭安 Ting-An Ho',
          'Animator : 陳柏尹 Bruce Chen',
          '3D Animator : 鄭詒謙 1000 Cheng',
          'Music & Sound Production : 空氣載體 The AirCarrier',
          'Original Music : 黃鎮洋 Triodust',
          'Sound Design : 黃鎮洋 Triodust',


        ]} />

    </Project>);
}
