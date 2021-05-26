import {
    projectViewData,
    aboutData,
    headerData,
} from "../data/data.js";





Vue.component('project-view-container', {
    props: {
        projectType: String,
    },
    template: `
    <div class="porject-view-container">
        <a v-bind:href="project.link" v-for="project in getProjects" class="project-view">
            <img v-bind:src="project.cover" class="cover"/>
            <img v-bind:src="project.hover" class="hover"/>
            <h3 class="title">{{project.title}}</h3>
        </div>
    </div>
    `,
    data: function () { return projectViewData; },
    computed: {
        getProjects: function(){
            let type = this.projectType;
            console.log(type);
            if(type===undefined || type===""){
                return this.projects;
            }
            return this.projects.filter((n)=> n.type===type);
        }
    }
});


Vue.component('about-container', {
    props: { },
    template: `
    <div class="about-container">
        <div class="row">        
            <div class="m-hide" style="margin-right: 40px;">
                <iframe src="https://editor.p5js.org/1000cheng/embed/AIYo4-nCa" 
                        height="400px" width="400px" style="border-style: none;"></iframe>
            </div> 
            <div>
                <div class="row">
                    <div>
                        <h2>{{intro.title}}</h2>
                        <p v-for="description in intro.descriptions">{{description}}</p>
                    </div>
                </div>
                <div class="split-line"/>
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
                <div class="split-line"/>
                <div class="row">
                    <div>
                        <h2>Experience</h2>
                        <div v-for="experience in experiences">
                            <p>{{experience.year}}</p>
                            <ul v-for="item in experience.items" v-bind:href="item.link">
                                <li v-if="item.link!==''"><a>{{item.text}}</a></li>
                                <li v-else>{{item.text}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function () { return aboutData; },
});


Vue.component('header-bar', {
    props: { 
        root: String,
        subTitle: String,
    },
    template: `
    <div class="header">
        <div class="title-conatainer">
            <h1 class="title">{{title}} - {{subTitle}}</h1>
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



const app = new Vue({
    el: '#app',
    data: { },
    components: { },
    mounted: function(){ },
    methods: { }
});
