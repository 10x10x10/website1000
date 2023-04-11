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

  const projectId = "project013";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>



      <EmbedVideo link="project013.video_main" />

      <Section>
        <Title type='h1' content='ROG Phone 5 發表會倒數影片' />
        <Title type='h1' content='ROG Phone 5 Launch Event Countdown Video' />
        <Text content={[
          '這是一支全世界引頸期盼的電競手機——ROG PHONE 5，是一款效能極佳的電競手機。這次的產品發表從影像呈現到手機的開箱體驗，從影像拍攝、動畫製作到互動製作，都有夢想動畫的全面參與，加上專案總監製 Freaks 4U Gaming 與各國 KOL 的聯合競賽，將線上線下的體驗連成一氣。',
        ]} />
        <Text content={[
          'This is the highly anticipated gaming phone worldwide - the ROG PHONE 5, which is an extremely powerful gaming phone. The product launch this time involved Dream Animation\'s full participation in everything from image presentation to unboxing experience of the phone, from image shooting, animation production to interactive production. In addition, the project director Freaks 4U Gaming and KOLs from various countries were invited to join the joint competition, connecting the online and offline experiences seamlessly.',
        ]} />

      </Section>


      <Section>
        <MediaList col={3} mCol={1}
          links={[
            link.video_01,
            link.video_02,
            link.video_04,
            link.video_05,
            link.video_06,
            link.video_07,
            link.video_10,
            link.video_11,
            link.video_12,
            link.video_15,
            link.video_17,
            link.video_19,

          ]} />
      </Section>


      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Client : ASUS Republic of Gamers',
          'Production : MoonShine Animation',
          'Motion Design : 1000 Cheng, Li Feng Cheng',


        ]} />

    </Project>);
}
