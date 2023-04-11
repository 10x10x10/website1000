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

  const projectId = "projectM001";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>



      <EmbedVideo link={link.video_main} />

      <Section>
        <Title type='h1' content='SIMPLEX' />
        <Text content={[
          'Simplex 是 simple 與 complex 的複合字，字面上的意思是「簡單的複雜」，隱含的意思是「人」。 但它同時也是數學上的專有名詞，意旨在 n 維空間中，取 n+1 個點，讓這些點相互連接，可構成 Simplex。 在零到三維空間中的 simplex，分別代表點、線段、三角形，與四面體。而這次動畫的主角即是三維的 Simplex 。 一如往常的話只說了一半，簡而言之是在描述人與想法的互動關係。',
          'Simplex is a compound word of simple and complex, literally meaning "simple complexity", implied meaning "people." But it is also a mathematical term, meaning that in n-dimensional space, take n+1 points, and connect these points to each other to form Simplex. Simplex in zero to three-dimensional space, representing points, line segments, triangles, and tetrahedrons. The protagonist of this animation is the 3D Simplex. As usual, I only said half of it. In short, it describes the interaction between people and ideas.',
        ]} />

      </Section>


      <Section>
        <Title type='h2' content='Motion' />
        <MediaList col={2} mCol={1}
          links={[
            link.video_01_s,
            link.video_02_s,
            link.video_03_s,
            link.video_04_s,

          ]} />
      </Section>

      <Section>
        <Title type='h2' content='Concept' />
        <MediaList col={1} mCol={1}
          links={[
            link.image_01,

          ]} />
      </Section>

      <Section>
        <Text content={[
          '「不要把你自己的想法當成你自己」是參考最高休息法這本書，我擷取出我覺得有趣的內容，書中的比喻是說，你是車站，而想法是來來去去的列車，但我們不會說，列車就是車站本身。在閱讀這個篇章時，我聯想到一個心理學的專有名詞「可愛侵略性」，是在描述有一群人會在看到可愛的動物時，產生想要捏死他的念頭，但研究發現，並不是這些人特別有變態，而是因為大腦，不論在開心或難過時，都傾向讓情緒趨於平衡，因此在開心的時候，產生負面念頭，只是大腦的一個正常機制。我覺得這也應證了「不要把你的想法當成你自己」。',
          '雖然一開始是以「不要把你的想法當成你自己為主題」，但後來在構思故事的過程中，覺得這本來就是描述冥想的其中一個概念，所以如果限縮在這裡，有些狹隘，因此後來還是以「冥想」本身為概念核心。這次想用幾何形去呈現故事，故事大綱是，主角是一個三角形，他接觸到象徵的想法的其他幾何形時，就會因此變形，原本對想法的態度是好奇興奮的，但隨著想法越來越多，他越來越無法專心，就因此變形得越來越快，直到他受不了崩潰之時，他選擇閉上眼睛，回歸自己的內心，透過冥想，調整自己的呼吸，他的內心世界才漸漸平和。',
          '"Don\'t treat your thoughts as yourself" is a concept taken from the book "The Highest Resting State", from which I have extracted interesting content. The book uses the metaphor of a train station and trains coming and going to explain that your thoughts are like trains passing through the station, but the trains are not the station itself. While reading this passage, I thought of a psychological term called "cute aggression", which describes the phenomenon of wanting to squeeze cute animals. Research has found that this is not abnormal, but rather a normal mechanism of the brain to balance emotions. Therefore, this also proves the concept of not identifying with one\'s thoughts.',
          'Although the initial theme was "Don\'t treat your thoughts as yourself," during the story conceptualization process, it became clear that this was one of the concepts of meditation. Thus, limiting it to just this concept was too narrow, so I chose to focus on the broader concept of meditation itself. I wanted to use geometric shapes to tell the story. The protagonist is a triangle, and whenever he encounters other geometric shapes that represent thoughts, he transforms accordingly. Initially, he is curious and excited about the thoughts, but as more thoughts come, he becomes increasingly distracted and starts to transform faster and faster until he breaks down. Finally, he decides to close his eyes, go inward, and meditate by regulating his breathing, allowing his inner world to gradually become peaceful.',

        ]} />

      </Section>

      <Section>
        <Title type='h2' content='Storyboard' />
        <MediaList col={2} mCol={1}
          links={[
            link.image_02,
            link.image_03,

          ]} />
      </Section>


      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Director : 鄭詒謙 1000 Cheng',
          'Music : 劉翼翬 Yi-Huei Liou',

        ]} />

    </Project>);
}