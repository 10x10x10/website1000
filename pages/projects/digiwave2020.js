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

  const projectId = "project006";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>



      <EmbedVideo link="project006.video_main" />

      <Section>
        <Title type='h1' content='DigiWave 2020《遙視 Clairvoyance》' />
        <Text content={[
          '「遙視」一詞為專有名詞，係指能超越正常視力看到遙遠彼方、甚至不同時空外景象的特殊現象；我們認為此義貼切了形容了所有對於遙遠的未來有著無盡好奇，不斷透過想像力與科技推動著世界的人們，於是以此為主題打造了這件巨大的影像作品。遙視的表現形式以寬闊的立面與極長的地面影像所組成。立面的遠方，是我們遙望亟欲所見之處，腳下的地面，則是我們所途經之路；透過快速在不同空間、時間，甚至是維度的量級上跳躍，將觀者的全部觀感拉入「進位」的體驗，並以此作品向夢想家們致敬。',
          '為定義此作品的精神，我們留下了一些文字：面前是一個方框。方框裡沒有時間與空間的限制，任由你的意念飄移。將出現的是未見過的彼方，未解的謎團。當然也有關於你自己，那些已知的過去與未知的未來。最後畫面需要停下時，你會選擇留在哪一刻？',
          'The term "remote viewing" is a proprietary term that refers to the special phenomenon of being able to see far-off places or even scenes outside of normal time and space with enhanced visual acuity. We believe that this term aptly describes those who are endlessly curious about the distant future and constantly pushing the world forward through imagination and technology, and so we have created this large-scale visual work with this theme in mind. The presentation of remote viewing takes the form of a wide facade and an extremely long ground-level image. The distant horizon on the facade is the desired destination we yearn to see, while the ground beneath our feet represents the path we travel. By rapidly jumping between different scales of space, time, and even dimensions, we immerse the viewer in an "ascending" experience and pay tribute to the dreamers through this artwork.',
          'To define the spirit of this work, we have left some words behind: "In front of you is a frame. There are no limitations of time and space within the frame, allowing your thoughts to drift freely. What will appear are the unseen and the unsolved mysteries, as well as your known past and unknown future. When the picture finally stops, at which moment will you choose to remain?"',

        ]} />

      </Section>


      <Section>
        <MediaList col={2} mCol={1}
          links={[
            link.image_01,
            link.image_02,
            link.image_03,
            link.image_04,

          ]} />
      </Section>

      <Section>
        <Title type='h2' content='Motion Design' />
        <MediaList col={1} mCol={1}
          links={[
            link.video_01,

          ]} />
        <MediaList col={2} mCol={1}
          links={[
            link.video_02,
            link.video_03,
            link.video_04,
            link.video_05,
            link.video_06,
            link.video_07,

          ]} />
      </Section>

      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Producer : Ke Jyun Wu',
          'Art Director : Ting-An Ho',
          'Motion Graphics : Ting-An Ho, Ke Jyun Wu, 1000 Cheng, Mal Liu',
          'Interaction System Design, Execution : @chwan1',
          'Programming : chia Reng Tsai',
          'Sound Design : Zhen-Yang Huang (Triodust)',

        ]} />

    </Project>);
}