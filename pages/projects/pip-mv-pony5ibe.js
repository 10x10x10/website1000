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

  const projectId = "project004";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>



      <EmbedVideo link="project004.video_main" />

      <Section>
        <Title type='h1' content='Pony5ibe - They said ft.陳嫺靜 【Animated Music Video】' />
        <Text content={[
          '以分割畫面讓觀者在同一時間看見不同時空的故事，女主與男主在一條相同的「道路」行走，不過彼此的出發地、出發的起因、時空都不相同。而他們在道路中透過光的形式對話。在觀者的時間線視角來看，男主已經歷過一次整個道路，在這段道路他沒有得到任何覺醒，因此他做了一個決定，他回頭再次經歷一切。而女主是剛剛進入這段道路的人，從初始探索。兩者在對話的過程中有聆聽、有思辯、有反省，彼此的想法雖不同，卻也因為彼此在「道路」上的對話而產生變化。',
          '我負責的部分是製作 2D 的動態影像，這次創作計畫幾乎沒有任何的限制，我特別喜歡這種狀態 ──「在我做出來之前，我永遠不知道我最後會做出什麼」的感覺。對我來說，如果製作影像時不具有實驗性，那就太過乏味了。反覆地聽著歌曲讓自己沉浸其中，直到腦海中浮現影像、憑著直覺創作，而過程所帶來的興奮感與滿足感，是持續創作重要的動力。',

        ]} />
        <Text content={[
          'Using split-screen to show different stories in different time frames simultaneously, the female and male protagonists walk on the same "road," but their starting points, reasons for departure, and time frames are all different. They communicate through light while walking on the road. From the viewer\'s perspective, the male protagonist has already gone through the entire road once, but he didn\'t have any awakening during that time. Therefore, he decides to turn back and experience everything again. The female protagonist is a newcomer to this road and is exploring the initial stages. Through their conversation, they listen, think, and reflect, and although their thoughts differ, their dialogue on the "road" leads to change.',
          'My responsibility is to create 2D motion graphics for this project, which has almost no restrictions. I especially enjoy the feeling of "not knowing what I\'ll create until I finish it." For me, if the production of the image lacks experimentation, it becomes too dull. I immerse myself in the music and repeat it until I visualize images in my mind, then I create based on my intuition. The excitement and satisfaction that come with the process are crucial driving forces for my continuous creation.',

        ]} />

      </Section>


      <Section>
        <MediaList col={2} mCol={1}
          links={[
            link.video_09,
            link.video_10,

          ]} />
      </Section>

      <Section>
        <Title type='h2' content='2D Motion Design' />
        <MediaList col={1} mCol={1}
          links={[
            link.video_01,
            link.video_02,

          ]} />
        <MediaList col={2} mCol={1}
          links={[
            link.video_03,
            link.video_04,
            link.video_05,
            link.video_06,
            link.video_07,
            link.video_08,

          ]} />
      </Section>




      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Director : Parker Shen 沈家緯',
          'Producer : Xue 0 呂學霖',
          'Lead 3D Designer : Roll + 梁若嘉',
          'Character Concept Artist : Xite 吳嘉進',
          'Character Designer : LoiSup 賴俊傑、River Lin 林詠順',
          'Scene Designer : Roll + 梁若嘉、Parker Shen 沈家緯',
          '3D Animator : River Lin 林詠順、Parker Shen 沈家緯 、Roll + 梁若嘉',
          '2D Motion Designer : 1000 Cheng 鄭詒謙',
          'Compositor : Roll + 梁若嘉 、 Parker Shen 沈家緯',
          'Visual Designer : Xue 0 呂學霖',


        ]} />

    </Project>);
}
