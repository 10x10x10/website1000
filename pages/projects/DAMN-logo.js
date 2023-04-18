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

  const projectId = "project029";

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
        <Title type='h1' content='DAMN Logo 動態設計' />
        <Title type='h1' content='Animated logo design for DAMN' />
        <Text content={[
          'DAMN (Digital Asset Management Network) 是一間瞄準未來的新型態數位科技公司，服務項目有：創建虛擬偶像，並擴展整合元宇宙娛樂/廣告等相關內容。最近在 instagram 上，有一位新上線的虛擬偶像（Metahuman）：1na 伊娜 (@nu_1na)，便是 DAMN 正在嘗試的項目。',
          '在了解這家公司的新穎服務內容後，從種種的關鍵字：元宇宙／數位／虛擬／未來／虛實整合／概念／超現實／時尚／音樂／娛樂／虛擬人／科幻⋯⋯等等之中，將其靈感濃縮並具象化。',

        ]} />

        <Space />

        <Text content={[
          'DAMN (Digital Asset Management Network) is a new type of digital technology company aimed at the future, providing services such as creating virtual idols and expanding and integrating meta-universe entertainment/advertising-related content. Recently, a new virtual idol (Metahuman) named 1na (@nu_1na) was launched on Instagram, which is a project that DAMN is currently trying out.',
          'After understanding the innovative service content of this company, inspiration was condensed and visualized from various keywords such as meta-universe/digital/virtual/future/virtual-real integration/concept/surreal/fashion/music/entertainment/virtual humans/sci-fi, etc.',

        ]} />


        <Section>
          <MediaList col={1} mCol={1}
            links={[
              link.image_01,
              link.image_02,
              link.image_03,

            ]} />
        </Section>

        <Text content={[
          'logo 的概念分別從兩個部分來建構並重組：',
          '1.輪廓：形體借喻了世界各地會出現有的自然現象：飛碟雲 ，飛碟雲的特殊自然現象，引發了上世紀的飛碟熱，很多飛碟誤傳世界或科幻作品的靈感，都來自飛碟雲。',
          '2.字體的圖像形式結合了6,70\'s年代的space age / computer style 以及90\'s年代的SF（science fiction）的visual culture（無法被傳統工具書寫所定義的字體風格、復古未來的光學機能、水波紋鏡頭的變形感）。',
        ]} />
        
        <Space />

        <Text content={[
          'The concept of the logo is constructed and reorganized from two parts:',
          '1. Silhouette: The form is metaphorical to a natural phenomenon that appears worldwide, called the lenticular cloud. The special natural phenomenon of lenticular clouds led to the UFO craze of the last century, and the inspiration for many UFO-related world or sci-fi works came from lenticular clouds.',
          '2. The graphic form of the font combines the space age/computer style of the 60s and 70s with the visual culture of SF (science fiction) of the 90s (font style that cannot be defined by traditional writing tools, retro-futuristic optical functions, and the deformation feeling of water ripple lenses).',

        ]} />
      </Section>

      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Client: DAMN (Digital Asset Management Network)',
          'Ad / Deisgn: 葉忠宜 yehchungyi',
          'Motion:  鄭詒謙 1000 Cheng',

        ]} />

    </Project>);
}