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

  const projectId = "project037";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>

      <Section>
        <MediaList col={1} mCol={1}
          links={[
            link.video_01,

          ]} />
      </Section>


      <Section>
        <Title type='h1' content='CNU Bridge Trading 識別動態' />
        <Title type='h1' content='CNU Bridge Trading Identity Animation' />
        <Text content={[
          '樂好實業 / 樂和實業是從一間面向歐美市場嬰兒設計家具起家的整合型貿易公司。CNU Bridge針對輸出貿易，NEXK2針對輸入貿易。',
          '象徵貿易的「橋樑」則是這間公司重要的符號。rebranding的logo圖形概念則以橋樑以及鐵橋結構（Truss）延伸成的雙向箭頭符號組合而成。並以互補色的藍橘，連結貿易輸出與輸入的互補意象。',

        ]} />

        <Text content={[
          'CNU Bridge Trading Company is a reputable and dynamic trading company that specializes in facilitating international trade and fostering business connections. With our extensive experience and expertise in the field, we strive to provide top-notch services to our clients, ensuring smooth and efficient transactions.',

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