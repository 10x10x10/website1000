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
          '從主視覺設計、到開幕沈浸式動畫監製、統籌虛擬人物互動技術，這次為台灣三得利的歐肯 14 年發表會打造了一個前所未有的體驗，從設計至統籌了一組結合動畫、聲效、AI生成互動的團隊。並完整活用台北 101 双融廳的沈浸環繞投影設備。',
          '客戶將原本環繞投影科技場域，打造成讓大家彷彿沈浸於黑潮之中的魔幻品酩發表會，來賓從踏進來到結束，所有的體驗，都與以往截然不同。',

        ]} />
        <Text content={[
          'From main visual design, to the production of immersive opening animations, and the coordination of virtual character interaction technology, this year\'s Auchentoshan 14-year presentation for Taiwan Suntory has crafted an unprecedented experience. It involved the coordination of a team that integrates animation, sound effects, and AI-generated interactivity from design to execution. Additionally, the immersive surround projection equipment at the AMBI SPACE ONE was fully utilized.',
          'The client transformed the venue, originally equipped with surround projection technology, into a magical presentation akin to immersing oneself in the Black Tide. From the moment guests entered until the event\'s conclusion, every aspect of the experience was distinctly different from previous iterations.',

        ]} />

        <Section>
          <Title type='h2' content='Visual Identity' />
          <MediaList col={1} mCol={1}
            links={[
              link.video_01,
              link.video_02,
              link.video_03,

            ]} />
        </Section>

        <Section>
          <Title type='h2' content='Opening Immersive Animation' />
          <Text content={[
          '序曲以蘇格蘭風笛旋律象徵來自蘇格蘭的歐肯14年，乘風飄洋，與孕育台灣豐富海島生命的黑潮相遇，並隨潮水氣泡湧出上岸；飄夾的海潮之氣，依地勢飄向田原、高山。歷經融合潮水、田園、山林之氣的豐富旅程後，再次回歸黑潮，生生不息，無形連結台灣與蘇格蘭。',

        ]} />
        <Text content={[
          'The overture begins with the melody of Scottish bagpipes, symbolizing Auchentoshan 14-year, originating from Scotland, drifting with the winds and encountering the Kuroshio, the rich life force of the Taiwanese island, before riding the bubbles ashore. The mingling sea breeze then meanders across fields and mountains. After a journey rich with the fusion of the sea, countryside, and forest atmospheres, it returns once again to the Kuroshio, perpetuating endlessly, invisibly connecting Taiwan and Scotland.',

        ]} />
          <MediaList col={2} mCol={1}
            links={[
              link.image_01,
              link.image_02,
              link.image_03,
              link.image_04,

            ]} />
        </Section>


      </Section>

      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Client: Suntory Taiwan Limited',
          'Agency: Dentsu One',
          '/',
          'VISUAL IDENTITY',
          'Curator/Art Director/Graphic Design: Yeh, ChungYi',
          'Motion Design: 1000 Cheng',
          'Sound Design: QQ Liu',
          '/',
          'OPENING IMMERSIVE ANIMATION',
          'Producer: Yeh, ChungYi',
          'Animator: 1000 Cheng',
          'Sound Production: QQ Liu',
          '/',
          'VIRTUAL AI WHISKY BRAND AMBASSADOR',
          'Curation : Yeh, ChungYi',
          'Character Production: D.A.M.N AI',
          'AI Real-time Computing: D.A.M.N AI',
          'Real-time Interaction Tech Support: D.A.M.N AI',
          '/',
          'PHOTOGRAPHY',
          'Event recording: M.Synchrony',
          'Space: Yeh, ChungYi',
          'Print Material: ShaoJou Huang',
        ]} />

    </Project>);
}