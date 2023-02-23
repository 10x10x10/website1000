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

  Credits,
} from "../components/v2";



export default function ProjectPage(props) {

  const projectId = "project022";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>

      <MediaList col={1} mCol={1}
        links={[
          link.video_02,
        ]} />

      <Section>
        <Title type='h1' content='臺北表演藝術中心開幕主視覺' />
        <Text content='位於士林的臺北藝術中心，因應近日的正式開幕，將展開整季的長時間開幕展演活動。北藝中心建築本體極具現代感視覺張力，因此主視覺以直拳方式直接地將北藝中心的兩大建築元素（球體、波浪）進行平面化解構，球體以金屬酸性視覺（Acid Graphics）、波浪牆以錯視（Optical illusion）等視覺效果，來作為成這次主視覺的呈現方式。  ' />

      </Section>


      <Section>
        <MediaList col={2} mCol={1}
          links={[
            link.image_05,
            link.video_01,

          ]} />
      </Section>

      <Section>
        <MediaList col={1} mCol={1}
          links={[
            link.image_03,
            link.image_04,

          ]} />
      </Section>

      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Client: 臺北表演藝術中心 Taipei Performing Arts Center',
          'Art Director: 葉忠宜 yehchungyi',
          'Design: 葉忠宜、家葳',
          'Motion: 鄭詒謙 1000 Cheng',
        ]} />

    </Project>);
}