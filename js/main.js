import {
    linkQuery,
    projectData,
    aboutData,
    headerData,
    footerData,
} from "../data/data.js";

const queryLink = function(link){
    let linkBlocks = link.split(".");
    let pointer = linkQuery;
    for(let i=0;i<linkBlocks.length;i++){
        pointer = pointer[linkBlocks[i]];
    }
    return pointer;
};

Vue.component('project-view-list', {
    props: {
        projectType: {
            type: String,
            default: "default",
        },
        randomPick:{
            type: Number,
            default: -1,
        },
        root:{
            type: String,
            default: "",
        },
    },
    template: `
    <div class="project-view-container grid-c grid-c3 m-grid-c m-grid-c1">
        <a v-bind:href="root + project.link" v-for="project in getProjects" class="project-view">
            <img v-bind:src="project.cover" class="cover"/>
            <img v-bind:src="project.hover" class="hover"/>
            <div class="title-container">
                <h3 class="title">{{project.title}}</h3>
            </div>
        </a>
        <div v-if="getProjects.length===0" class="empty-list-message">
            List is empty
        </div>
    </div>
    `,
    data: function () { return projectData; },
    computed: {
        getProjects: function(){
            let type = this.projectType;

            let typeProjects = this.projects.filter((n)=> n.type===type);

            
            if(this.randomPick > 0){
                var temp_array = [];
                for (var index in typeProjects) {
                    temp_array.push(typeProjects[index]);
                }
                this.shuffle(typeProjects);
                return typeProjects.slice(0, this.randomPick);
            }

            return typeProjects;
        }
    },
    methods: {
        shuffle: function(array) {
            for (let i = array.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
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
    props: {
        showRelatedProject: {
            type: Boolean,
            default: true,
        },
    },
    template: `
    <div v-cloak>
        <header-bar root="../"></header-bar>
        <div class="container" >
            <div class="project-container">
                <slot></slot>
                <div v-if="showRelatedProject===true" class="related-project-container">
                    <div class="project-text-container project-view-title">
                        <h2>Related Projects</h2>
                    </div>
                    <project-view-list root="" project-type="default" random-pick="3"></project-view-list>
                </div>
            </div>
            
        </div>
        <footer-bar root="../"></footer-bar>
    </div>
    `,
});

Vue.component('media-list', {
    props: { 
        links: {
            type: String,
            default: "",
        },
        col:{
            type: Number,
            default: 1,
        },
        mCol:{
            type: Number,
            default: 1,
        },
        title:{
            type: String,
            default: "",
        },
    },
    template: `
    <div class="media-list-container">
        <div v-if="title!==''" class="project-text-container project-view-title">
            <h2>{{title}}</h2>
        </div>
        <div v-bind:class="getClass" class="grid-c">
            <div v-for="link in getLinks" class="background-video">
                <video v-if="isVideo(link)" loading="lazy" autoplay="true" loop="true" muted="true" playsinline="" width="100%">
                    <source v-bind:src="link" type="video/mp4">
                </video>
                <img v-if="isImg(link)" v-bind:src="link" loading="lazy" width="100%" />
            </div>
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
                .map((n) => queryLink(n))
                .filter((n) => n!==undefined);
            
            return result;
        },
        getClass: function(){
            let colClassName = "grid-c" + this.col;
            let mColClassName = "m-grid-c" + this.mCol;
            let result = {
                [colClassName]: true,
                [mColClassName]: true,
            };
            return result;
        }
    },
    methods: {
        isImg: function(link){
            const compareName = [".gif", ".png", ".jpg", ".jpeg", ];
            let lowerLink = link.toLowerCase();
            return compareName.some((n) => lowerLink.endsWith(n));
        },
        isVideo: function(link){
            const compareName = [".mp4", ];
            let lowerLink = link.toLowerCase();
            return compareName.some((n) => lowerLink.endsWith(n));
        },
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
            loading="lazy" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen="true">
        </iframe>
    </div>
    `,
    computed: {
        getLink: function(){
            let linkName = this.link;
            return queryLink(linkName);
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
        <h2>Credits</h2>
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
