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

    const projectId = "project049";

    const link = linkQuery[projectId];


    return (
        <Project id={projectId} showOtherProject={false}>

            <EmbedVideo link={link.video_main} />


            <Section>
                <Title type='h1' content='TTXC 2024「G.A.M.E.」未來主題展 主視覺動態' />
                <Title type='h1' content='TTXC 2024 “G.A.M.E.”  Future Theme Exhibition Main Visual Animation' />
                <Text content={[
                    '2024台灣文化科技大會未來主題展，以「衍生 Generative」、「人工智慧 AI」、「人 Mankind」、「進化 Evolution」四個面向組合而成遊戲的縮寫（G.A.M.E.）為主題，本展覽回應當前文化科技的重要議題。通過豐富多樣的內容和互動體驗，展示科技與文化的深層聯繫。展覽融合了創新的設計、引人入勝的藝術作品、刺激的遊戲展示及豐富的教育活動，不僅讓參觀者深入了解科技發展的前沿課題，還讓他們親身體驗和反思科技如何塑造並改變人類文化的未來。',

                ]} />
                <Text content={[
                    'The 2024 Taiwan Cultural and Technological Conference Future Theme Exhibition explores the theme “G.A.M.E.”—Generative, AI, Mankind, and Evolution. The exhibition responds to key issues in cultural technology through interactive experiences that highlight the deep connection between technology and culture. It features innovative design, digital art, gaming displays, and educational activities, inviting visitors to explore how technology is shaping the future of human culture.',
                ]} />


            </Section>

            <Space />

            <Title type='h2' content='Credits' />

            <Credits
                content={[
                    'Curation : 初未來 Exhibition, Hello World',
                    'Key Visual Design : 毛灼然 Javin Mo',
                    'Visual Motion Designer : 鄭詒謙 1000 Cheng',
                    'Music : 林欣傑 Keith Lam',
                    'Photography : 李奕瑲 Kito Li',
                ]}
            />

        </Project>);
}