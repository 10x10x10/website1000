import {
    headerData, 
    projectViewData,
    aboutData,
} from "data/data.js";


export const regProjectView = () => {
    Vue.component('project-view-container', {
        props: { },
        template: `
        <div class="porject-view-container">
            <a v-bind:href="project.link" v-for="project in projects" class="project-view">
                <img v-bind:src="project.cover" class="cover"/>
                <img v-bind:src="project.hover" class="hover"/>
                <h3 class="title">{{project.title}}</h3>
            </div>
        </div>
        `,
        data: function () { return projectViewData; },
    });
}

export const regHeader = () => {
    Vue.component('header-bar', {
        props: { 
            root: String
        },
        template: `
        <div class="header">
            <div class="title-conatainer">
                <h1 class="title">{{title}}</h1>
            </div>
            <div class="flex-space"></div>
            <div class="header-link-container">
                <a class="header-link" v-for="link in getLinks" v-bind:href="link.link">{{link.title}}</a>
            </div>
        </div>
        `,
        data: function () { return headerData; },
        computed: {
            getLinks: function(){
                let root = (this.root===undefined) ? "" : this.root;
                return this.links.map(n=>{
                    n.link = root + n.link;
                    return n;
                });
            }
        }
    });
}

export const regAbout = () => {
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
}





