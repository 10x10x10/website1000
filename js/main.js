import {
    linkQuery,
    projectViewData,
    aboutData,
    headerData,
} from "../data/data.js";





Vue.component('project-view-container', {
    props: {
        projectType: {
            type: String,
            default: "default",
        },
    },
    template: `
    <div class="porject-view-container">
        <a v-bind:href="project.link" v-for="project in getProjects" class="project-view">
            <img v-bind:src="project.cover" class="cover"/>
            <img v-bind:src="project.hover" class="hover"/>
            <h3 class="title">{{project.title}}</h3>
        </a>
        <div v-if="getProjects.length===0">沒有內容</div>
    </div>
    `,
    data: function () { return projectViewData; },
    computed: {
        getProjects: function(){
            let type = this.projectType;
            return this.projects.filter((n)=> n.type===type);
        }
    }
});


Vue.component('about-container', {
    props: { },
    template: `
    <div class="about-container">
        <div class="row m-col">        
            <div class="middle">
                <iframe class="draw-view" src="https://editor.p5js.org/1000cheng/embed/AIYo4-nCa" 
                        height="300px" width="300px" style="border-style: none;"></iframe>
            </div> 
            <div>
                <div>
                    <h1>{{intro.title}}</h1>
                    <p class="description" v-for="description in intro.descriptions">{{description}}</p>
                </div>
                <div class="split-line"/>
                <div>
                    <h1>Contact me</h1>
                    <ul>
                        <li v-for="contact in contacts">
                            <a v-bind:href="contact.link" target="_blank">{{contact.text}}</a>
                        </li>
                    </ul>
                </div>
                <div class="split-line"/>
                <div>
                    <h1>Experience</h1>
                    <div v-for="experience in experiences" class="experience-year-container">
                        <p>{{experience.year}}</p>
                        <ul>
                            <div v-for="item in experience.items">
                                <li v-if="item.link!==''"><a v-bind:href="item.link">{{item.text}}</a></li>
                                <li v-else>{{item.text}}</li>
                            </div>
                        </ul
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
        root: {
            type: String,
            default: "",
        },
        location: {
            type: String,
            default: "",
        },
    },
    template: `
    <div class="header">
        <div class="title-conatainer">
            <h1 class="title">{{getTitle}}</h1>
        </div>
        <div class="flex-space"></div>
        <div class="header-link-container">
            <a  class="header-link" 
                v-for="link in getLinks" 
                v-bind:class="{ 'header-link-acitve': link.link===location }"
                v-bind:href="link.link!==location?link.link:''">
                {{link.title}}
            </a>
        </div>
    </div>
    `,
    data: function () { return headerData; },
    computed: {
        getLinks: function(){
            let root = this.root;
            return this.links.map(n=>{
                n.link = root + n.link;
                return n;
            });
        },
        getTitle: function(){
            return this.title;
        },
    }
});


Vue.component('background-video', {
    props: { 
        link: {
            type: String,
            default: "",
        },
    },
    template: `
    <video class="background-video" autoplay="true" loop="true" muted="true" playsinline="" width="100%">
        <source v-bind:src="getLink" type="video/mp4">
    </video>
    `,
    computed: {
        getLink: function(){
            let linkName = this.link;
            return linkQuery[linkName];
        }
    }
});


Vue.component('embed-video', {
    props: { 
        link: {
            type: String,
            default: "",
        },
    },
    template: `
    <div class="video-container">
        <iframe
            scrolling="no" 
            frameborder="0" 
            v-bind:src="getLink" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen="true">
        </iframe>
    </div>
    `,
    computed: {
        getLink: function(){
            let linkName = this.link;
            return linkQuery[linkName];
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
