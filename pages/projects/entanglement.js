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

  const projectId = "projectM002";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>



      <EmbedVideo link={link.video_main} />

      <Section>
        <Title type='h1' content='Entanglement' />
        <Text content={[
          '「是否有獨立於想法之外的自我? 或是是否有獨立於自我之外的想法?」',
          '從探討想法與自我的關係出發，將想法拆分為「定義」與「關係」，定義如點，關係如線，聚合而成的結構即是「自我」。接著延伸至建立穩定自我概念的過程，自我穩定後進而產生與外界的良好連結。',

        ]} />

        <Text content={[
          '"Is there a self that is independent of ideas? Or is there an idea that is independent of self?"',
          'Starting from exploring the relationship between ideas and ego, I thought the idea is divided into "definition" and "relationship", the definition is like a point, the relationship is like a line, and the aggregated structure is "self". It then extends to the process of establishing a stable self-concept, which leads to a good connection with the outside world after self-stabilization.',

        ]} />

      </Section>


      <Section>
        <MediaList col={2} mCol={2}
          links={[
            link.video_01_s,
            link.video_02_s,
            link.video_03_s,
            link.video_04_s,
            link.video_05_s,
            link.video_06_s,
            link.video_07_s,
            link.video_08_s,

          ]} />
      </Section>

      <Section>
        <Title type='h2' content='Concept' />
        <MediaList col={1} mCol={1}
          links={[
            link.video_09_s,

          ]} />
      </Section>

      <Section>
        <Text content={[
          '故事大綱是建立穩定自我概念的過程，而有穩定的自我概念才有辦法與外界建立良好的連結。',
          '這次的概念是由「不要把想法當成你自己」所延伸，而新的問題是「要如何區分自我與想法?」，思考過後所得出的結論是，全部的想法，皆可以拆分為「定義」與「關係」，「定義」是指某個個體、形象、概念等的規範、範圍，比如說，「我」可是說是一種定義，區分我與他者的不同，而「關係」即是每個定義之間的關聯，比如說，「我喜歡天空」即是兩個定義之間的關係。如果將上述的文字，轉化為圖像，每個「定義」即是一個點或是圓，而「關係」即是串聯起每個點的線，接著，如果認同「自我是全部想法的總和」，點與線串起來的結構，就可以說是「自我」。',
          '很多人會用「個」當作想法的單位，但我覺得並不精確，因為實際上想法總是有著前後關係，無法確切的區分一個想法的界線，以前後關係來說的話，用「串」來做為想法的量詞更適當，但想法總是會有分支，或許是網狀的思考方式，但「串」的定義並不侷限在一條線上。',

        ]} />

        <Text content={[
          'The storyline is about the process of establishing a stable self-concept, and only with a stable self-concept can one establish good connections with the outside world.This concept is extended from "Don\'t identify with your thoughts" , and the new question is "How to distinguish between the self and thoughts?" The new question that has arisen is "how to differentiate between oneself and one\'s thoughts?" After much consideration, the conclusion was reached that all thoughts can be divided into "definitions" and "relationships." "Definitions" refer to the norms and scope of an individual, image, concept, etc. For example, "I" can be said to be a definition that distinguishes oneself from others, while "relationships" refer to the connections between each definition, such as "I like the sky," which is a relationship between two definitions.',
          'If the above text is transformed into an image, each "definition" is a point or circle, and "relationships" are the lines that connect each point. If one agrees that "the self is the sum of all thoughts," the structure of points and lines connected together can be considered the "self."',
          'Many people use "ideas" as the unit of thought, but I believe this is not precise because thoughts always have a before and after relationship and it is difficult to distinguish the boundaries of a single thought. In terms of before and after relationships, it is more appropriate to use "string" as the unit of thought, but thoughts always have branches, perhaps in a networked thinking manner, and the definition of "string" is not limited to a single line.',

        ]} />

      </Section>

      <Section>
        <Title type='h2' content='Storyboard' />
        <MediaList col={1} mCol={1}
          links={[
            link.video_10_s,

          ]} />
      </Section>

      <Section>
        <Text content={[
          '外界刺激→自我生成→初次建立自我概念→試圖與外界接觸→不夠穩定的自我造成連結失敗→並且引響自我→回歸內在世界反覆修正→建立穩定的自我概念→成功建立良好連結',

        ]} />

      </Section>

      <Section>
        <Title type='h2' content='Styleframe' />
        <MediaList col={1} mCol={1}
          links={[
            link.video_11_s,

          ]} />
      </Section>


      <Space />

      <Title type='h2' content='Credits' />

      <Credits
        content={[
          'Director : 鄭詒謙 1000 Cheng',
          'Music : Trip Music - Deep Inside',

        ]} />

    </Project>);
}

