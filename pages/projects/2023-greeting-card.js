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

  const projectId = "project027";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>

      <Section>
        <MediaList col={1} mCol={1}
          links={[
            link.image_01,

          ]} />
      </Section>



      <Section>
        <Title type='h1' content='卯兔 52 設計師賀卡創作聯展 參展' />
        <Text content=
          '文化如何以設計的語彙重新詮釋，本次展覽邀請 52 位優秀的設計師、藝術家共同創作。以「祝賀」作為主題，透過豐富的視覺觸發觀者深度思考，創作以不同的觀點造就了多元的視覺表現形式，讓人發現這些習以為常的生活可以有無限可能性，重新認識設計或藝術對於文化之間的相互關係。' />

        <Text content='
日期｜2023 年 1 月 08 日 (日)－1 月 18 日 (三)
時間｜11：00 － 19：00
地點｜Bits & Pieces
主辦｜MIDNIGHT DESIGN 半夜設計
協辦｜Bits & Pieces、龍鳳活動整合行銷、九水印刷、采憶紙業
活動連結｜https://www.facebook.com/events/528989875957818/' />

      </Section>

      <Section>
        <MediaList col={1} mCol={1}
          links={[
            link.image_02,
            link.image_03,

          ]} />
      </Section>


      <Section>
        <Title type='h2' content='設計概念' />
        <Text content='2023 年為癸卯年，天干「癸」屬水，地支「卯」為兔。五行中「水」屬黑，因此又稱為黑兔年。洞穴中的黑兔，透過不同的光影折射，依然綻放光芒。黑兔年也許有多災難性的傳說，依然期許大家以廣袤的心胸迎接新的一年，樂愛生活與其各個面向。 ' />

      </Section>


      <Section>
        <MediaList col={1} mCol={1}
          links={[
            link.video_01,

          ]} />
      </Section>

      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Design: 1000 Cheng',
          'Motion: 1000 Cheng',
        ]} />

    </Project>);
}