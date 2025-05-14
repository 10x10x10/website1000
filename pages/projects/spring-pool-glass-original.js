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

    const projectId = "project047";

    const link = linkQuery[projectId];


    return (
        <Project id={projectId} showOtherProject={false}>

            <EmbedVideo link={link.video_main} />


            <Section>
                <Title type='h1' content='春池 Original 識別動態' />
                <Title type='h1' content='Spring Pool Glass Original Identity Animation' />
                <Text content={[
                    '玻璃在退火之前的狀態，並不是透明的。  在綠能工廠內，有窯爐炙熱的橘紅色玻璃糕、有灰階的模具設備、也有穿梭於工作台揮汗如雨的工藝師傅，透明之前的玻璃有著生猛的活力，自由流體的姿態，由不同的製程方式，形塑出我們日常看見的剔透作品。',
                    '在近10年內W Glass Project與眾多設計師、藝術家合作，讓循環設計成為一種意識，2024年春池也將回到創立的第一間綠能觀光工廠，發起Original品牌再造計畫，標準字上也大膽的融合工藝師共創的玻璃字體，流動感中回溯透明之前的多元狀態，凝固成最終的透明作品。',

                ]} />
                <Text content={[
                    'Before annealing, glass is not transparent. Inside the green energy factory, there are molten, glowing orange slabs fresh from the furnace, grayscale mold machines, and artisans working tirelessly at their stations. Before it becomes clear, glass is full of raw vitality—fluid in form, shaped by diverse processes into the brilliant clarity we see in daily life.',
                    'Over the past decade, the W Glass Project has collaborated with numerous designers and artists, promoting circular design as a conscious practice. In 2024, Spring Pool Glass will return to its very first green energy tourism factory to launch the “Original” brand revival project. The new logotype boldly incorporates glass letterforms co-created with artisans, tracing the many states of glass before transparency—fluid, diverse, alive—until they are ultimately crystallized into clarity.',

                ]} />


            </Section>

            <Section>
                <MediaList col={2} mCol={1}
                    links={[
                        link.image_02,
                        link.image_03,
                    ]} />
                <MediaList col={1} mCol={1}
                    links={[
                        link.image_01,
                        link.image_04,

                    ]} />

            </Section>

            <Space />

            <Title type='h2' content='Credits' />

            <Credits
                content={[
                    'Exhibition Curators : W Glass Project & PiliWu Design',
                    'Brand Visual Design : PiliWu Design',
                    'Motion Identity Design : 1000 Cheng',
                    'Documentary Filming : Youren Lin',
                ]}
            />

        </Project>);
}