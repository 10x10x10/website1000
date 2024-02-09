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
} from "../components/v2/index.js";



export default function ProjectPage(props) {

  const projectId = "project032";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>

      <EmbedVideo link={link.video_main} />


      <Section>
        <Title type='h1' content='三得利歐肯 14 年品酩會' />
        <Title type='h1' content='Suntory Auchentoshan 14 wiskey launch party' />
        <Text content={[
          '從主視覺設計、到開幕沈浸式動畫監製、統籌虛擬人物互動技術，這次為台灣三得利的歐肯 14 年發表會打造了一個前所未有的體驗，從設計至統籌了一組結合動畫、聲效、AI生成互動的團隊。並完整活用台北 101 双融廳的沈浸環繞投影設備。從平面設計師，切換至各種項目統籌監製。客戶將原本環繞投影科技場域，打造成讓大家彷彿沈浸於黑潮之中的魔幻品酩發表會，來賓從踏進來到結束，所有的體驗，都與以往截然不同。',

        ]} />



        <Section>
          <MediaList col={1} mCol={1}
            links={[
              link.image_01,
              link.image_02,

            ]} />
        </Section>


      </Section>

      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Client: CNU Bridge Trading Co.',
          'Ad / Deisgn: 葉忠宜 yehchungyi',
          'Motion:  鄭詒謙 1000 Cheng',

        ]} />

    </Project>);
}