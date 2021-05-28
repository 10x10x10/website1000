import {
    linkQuery,
    projectData,
    aboutData,
    headerData,
    footerData,
} from "../data/data.js";



Vue.component('project-view-list', {
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
            <div class="title-container">
                <h3 class="title">{{project.title}}</h3>
            </div>
        </a>
        <div v-if="getProjects.length===0" class="empty-list-message">沒有內容</div>
    </div>
    `,
    data: function () { return projectData; },
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
                <div class="intro">
                    <h1>{{intro.title}}</h1>
                    <p class="description" v-for="description in intro.descriptions">{{description}}</p>
                </div>
                <div class="split-line"/>
                <div class="contact">
                    <h1>Contact me</h1>
                    <ul>
                        <li v-for="contact in contacts">
                            <img class="contact-icon" v-bind:src="contact.icon" />
                            <a v-bind:href="contact.link" target="_blank">{{contact.text}}</a>
                        </li>
                    </ul>
                </div>
                <div class="split-line"/>
                <div class="experience">
                    <h1>Experience</h1>
                    <div v-for="experience in experiences" class="experience-year-container">
                        <h2>{{experience.year}}</h2>
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
            <a v-bind:href="getHome">
                <h1 class="title">{{title}}</h1>
            </a>
        </div>
        <div class="flex-space"></div>
        <div class="header-link-container">
            <a  class="header-link" 
                v-for="item in getItems" 
                v-bind:class="{ 'header-link-acitve': item.link===location }"
                v-bind:href="item.link!==location?item.link:''">
                {{item.title}}
            </a>
        </div>
    </div>
    `,
    data: function () { return headerData; },
    computed: {
        getItems: function(){
            let root = this.root;
            return this.links.map(n=>{
                n.link = root + n.link;
                return n;
            });
        },
        getHome: function(){
            return this.root + "index.html";
        },
    }
});

Vue.component('footer-bar', {
    props: { 
        root: {
            type: String,
            default: "",
        },
    },
    template: `
    <div class="footer">
        <div class="link-icon-container">
            <a v-for="item in getItems" v-bind:href="item.link">
                <img v-bind:src="item.icon" class="icon" />
            </a>
        </div>
        <p>{{description}}</p>
        <p>{{copyright}}</p>
    </div>
    `,
    data: function () { return footerData; },
    computed: {
        getItems: function(){
            let root = this.root;
            return this.links.map(n=>{
                n.icon = root + n.icon;
                return n;
            });
        },
    },
});

Vue.component('project', {
    props: {},
    template: `
    <div v-cloak>
        <header-bar root="../"></header-bar>
        <div class="container" >
            <div class="project-container">
                <slot></slot>
            </div>
        </div>
        <footer-bar root="../"></footer-bar>
    </div>
    `,
});

Vue.component('background-video-list', {
    props: { 
        links: {
            type: String,
            default: "",
        },
        col:{
            type: Number,
            default: 1,
        },
        title:{
            type: String,
            default: "",
        },
    },
    template: `
    <div>
        <div v-if="title!==''" class="project-text-container project-view-title">
            <h1>{{title}}</h1>
        </div>
        <div v-bind:class="getClass" class="grid-c">
            <video v-for="link in getLinks" class="background-video" autoplay="true" loop="true" muted="true" playsinline="" width="100%">
                <source v-bind:src="link" type="video/mp4">
            </video>
        </div>
    </div>
    `,
    computed: {
        getLinks: function(){
            let linkName = this.links;

            let result = linkName
                .split(",")
                .map((n) => n.trim())
                .filter((n) => n!=="" && n.startsWith("//")===false)
                .map((n) => linkQuery[n])
                .filter((n) => n!==undefined);
            
            return result;
        },
        getClass: function(){
            let colClassName = "grid-c" + this.col;
            let result = {
                [colClassName]: true,
            };
            return result;
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

Vue.component('credits', {
    props: { 
        foldable: {
            type: Boolean,
        },
    },
    template: `
    <div class="project-text-container" v-on:click="onToggle()">
        <h1>Credits</h1>
        <div class="credit-list" v-bind:class="getFoldClass()">                        
            <slot></slot>
        </div>
        <p v-if="foldable" v-show="isFold" class="credit-more">...More</p>
    </div>
    `,
    data: function(){
        return {
            isFold: true,
        };
    },
    methods:{
        onToggle: function(){
            this.isFold = !this.isFold;
        },
        getFoldClass: function(){
            if(this.foldable===false){
                return {};
            }

            return {
                fold: this.isFold,
                unfold: !this.isFold,
            };
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
