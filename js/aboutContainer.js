
const aboutData = {
    intro: {
        title: "I'm 1000 Cheng ✶ ✷ ✸",
        description: `
        1000，本名 鄭詒謙，居住於台北，畢業於實踐媒傳，擅長製作迷幻影像與實驗性影片。目前於新創團隊 Eagle App 擔任產品設計師，協助軟體增長與優化，同時以自由接案者身分與多元類型的公司合作，包含影像製作、互動藝術、服飾設計公司，如叁式、group.g、空集設計、羅藝設計等。
        I'm 1000, Yi-Chien Cheng, based in Taipei, Taiwan. I'm passionate about make some trippy 3d motion graphics by Cinema 4d and  After Effects. Currently working as a designer in the startup team Eagle App, assisting in software growth and optimization, and working as a freelancer with multiple types of companies, including video production, interactive art, and fashion design companies.
        `,
    },
    contacts: [
        {
            text: "10x10x10w1000@gmail.com",
            link: "mailto:10x10x10w1000@gmail.com",
        },
        {
            text: "Instagram",
            link: "https://www.instagram.com/10x10x10_1000/",
        },
        {
            text: "Facebook",
            link: "https://www.facebook.com/1000cheng",
        },
        {
            text: "Behance",
            link: "https://www.behance.net/10x10x10_1000",
        },
    ],
    experiences: [
        {
            year: "2021",
            items: [
                {
                    text: "Gogoro VIVA MIX 發表會 動態視覺設計",
                    link: "",
                },
                {
                    text: "ROG Phone 5 發表會 動態設計",
                    link: "",
                },
            ]
        },
        {
            year: "2020",
            items: [
                {
                    text: "DigiWave 2020《遙視 Clairvoyance》",
                    link: "https://vimeo.com/488057651",
                },
                {
                    text: "PONY5IBE -【They Said】ft 陳嫻靜",
                    link: "",
                },
                {
                    text: "台北電影節 Taipei Film Festival 片頭",
                    link: "/taipei-film-festival",
                },
                {
                    text: "PONY5IBE -【They Said】ft 陳嫻靜",
                    link: "",
                },
                {
                    text: "金馬 57 最佳攝影 入圍動畫",
                    link: "",
                },
                {
                    text: "金馬 57 最佳劇情短片 入圍動畫",
                    link: "",
                },
                {
                    text: "實踐大學媒體傳達設計學系 畢業",
                    link: "",
                },
            ]
        },
        {
            year: "2019",
            items: [
                {
                    text: "《 TGIF台北設計電波 》國際設計交流年會 宣傳片",
                    link: "/tgif",
                },
                {
                    text: "2019 實踐大學設計學院國際設計學術與創作研討會 宣傳片",
                    link: "https://youtu.be/4Jnoiwge4Xc",
                },
            ]
        },
    ],
}


Vue.component('about-container', {
    props: { },
    template: `
    <div class="project-container about-container">
        <h1>About</h1>
        <div class="row">
            <div>
                <h2>{{intro.title}}</h2>
                <p>{{intro.description}}</p>
            </div>
            <div style="margin-left: 40px;">
                <iframe src="https://editor.p5js.org/1000cheng/embed/AIYo4-nCa" 
                        height="400px" width="400px" style="border-style: none;"></iframe>
            </div> 
        </div>
        <div class="row">
            <div>
                <h2>Contact me</h2>
                <ul>
                    <li v-for="contact in contacts">
                        <a v-bind:href="contact.link" target="_blank">{{contact.text}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div>
                <h2>Experience</h2>
                <div v-for="experience in experiences">
                    <p>{{experience.year}}</p>
                    <ul v-for="item in experience.items">
                        <li v-if="item.link!==''"><a v-bind:href="item.link">{{item.text}}</a></li>
                        <li v-else>{{item.text}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function () { return aboutData; },
});