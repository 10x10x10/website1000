import {
    headerData, 
    projectViewData,
} from "/data/data.js";


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