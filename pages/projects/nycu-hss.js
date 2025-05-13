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

    const projectId = "project044";

    const link = linkQuery[projectId];


    return (
        <Project id={projectId} showOtherProject={false}>

            <EmbedVideo link={link.video_main} />


            <Section>
                <Title type='h1' content='陽明交通大學人文藝術與社會學院 識別動態' />
                <Title type='h1' content='Identity Animation for College of Humanities, NYCU' />
                <Text content={[
                    '「人文藝術與社會學院」(College of Humanities, Arts, and Social Sciences) 取「觀乎人文，以化成天下」為銘言，識別定位由文學、視覺藝術、音樂與科技共同建構，跳脫慣性設計，朝向有動​​態潛能、可編碼擴充、具有適應性之設計。主視覺以「量測」為設計元素，「親身丈量山川」為核心理念。尺的指標採適應性設計可調動，既權衡知輕重，象徵著學院多樣性與包容。尺的邊界隨著科技文明累積可廣、可高、可延伸擴充，象徵著研究探索無涯，寓意積極迎向科技帶來之文明變動，以察時變以化成天下。',
                    '氣味若有餘韻，美妙旋律則能繞樑三日。在音樂世界中，「A音」頻率如同「尺」一般，人類文明藉此衍生出千變萬化的音樂風格。音樂設計以一顆鋼琴的「A音」單音作為起點，隨後展開音域和聲的延展、音色織度的擴展以及時間維度的延伸。整體設計有機地結合了實音樂器與數位合成音色，兩者音色以即興的方式追逐、碰撞、互動，共同譜出具活力的優雅聲響，象徵著學院未來的發展方向——在充滿人性溫度的交流中融入知識與智能。',

                ]} />
                <Text content={[
                    'The College of Humanities, Arts, and Social Sciences (HASS) embraces the motto “Observe the humanities to transform the world.” Its identity merges literature, visual arts, music, and technology, moving beyond conventional design toward a dynamic, adaptable, and code-expandable system. The core visual motif—measurement—draws from the idea of “personally measuring the landscape.” The adjustable ruler symbolizes balance, diversity, and the boundless nature of research, reflecting an openness to the evolving forces of technological and cultural change.',
                    'In parallel, the sound design begins with the piano’s “A note,” much like a ruler in music. From this tone unfolds a rich soundscape—expanding in range, harmony, and texture—blending acoustic instruments and digital synthesis. This interplay reflects the college’s vision: a future shaped by knowledge and creativity through human-centered exchange.',
                ]} />


            </Section>

                  {/* <Section>
                    <MediaList col={2} mCol={1}
                      links={[
                        link.image_01,
                        link.image_02,
                        link.image_03,
                        link.image_04,
            
                      ]} />
                  </Section> */}

            <Space />

            <Title type='h2' content='Credits' />

            <Credits
                content={[
                    'Art Director: yehchungyi',
                    'Graphic Design: yehchungyi',
                    'Motion Design: 1000 Cheng',
                    'Music: Mitch Lin',
                ]}

                
            />

        </Project>);
}