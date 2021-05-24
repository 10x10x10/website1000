
const header = Vue.component('header-component', {
     props: ['root'],
     template: '\
     <div class="header">\
         <div class="title-conatainer">\
             <h1 class="title">{{title}}</h1>\
         </div>\
         <div class="flex-space"></div>\
         <div class="header-link-container">\
             <a class="header-link" v-for="link in getLinks" v-bind:href="link.link">{{link.title}}</a>\
         </div>\
     </div>\
     ',
     data: function () {
     return {
         title: "1000 Cheng",
         links: [
             { 
               title: "HOME",
               link: "index.html"
             }, 
             { 
               title: "LAB",
               link: "lab.html"
             }, 
             { 
               title: "ABOUT",
               link: "about.html"
             },
         ]
     }
     },
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
    data: {
        homeData: [
            {
                 cover: "src/003_png_cover.png",
                 hover: "src/003_gif_cover.gif",
                 title: "2020 台北電影節 Taipei Film Festival | 片頭動畫",
                 link: "projects/project01.html"
            },
            {
                 cover: "src/simplex_png_cover.png",
                 hover: "src/simplex_gif_cover.gif",
                 title: "個人作品 | SIMPLEX",
                 link: "projects/project01.html"
            },
            {
                 cover: "src/003_png_cover.png",
                 hover: "src/003_gif_cover.gif",
                 title: "2020 台北電影節 Taipei Film Festival | 片頭動畫",
                 link: "projects/project01.html"
            },
            {
                 cover: "src/simplex_png_cover.png",
                 hover: "src/simplex_gif_cover.gif",
                 title: "個人作品 | SIMPLEX",
                 link: "projects/project01.html"
            },
            {
                 cover: "src/003_png_cover.png",
                 hover: "src/003_gif_cover.gif",
                 title: "2020 台北電影節 Taipei Film Festival | 片頭動畫",
                 link: "projects/project01.html"
            },
            {
                 cover: "src/simplex_png_cover.png",
                 hover: "src/simplex_gif_cover.gif",
                 title: "個人作品 | SIMPLEX",
                 link: "projects/project01.html"
            },
            {
                 cover: "src/003_png_cover.png",
                 hover: "src/003_gif_cover.gif",
                 title: "2020 台北電影節 Taipei Film Festival | 片頭動畫",
                 link: "projects/project01.html"
            },
            {
                 cover: "src/simplex_png_cover.png",
                 hover: "src/simplex_gif_cover.gif",
                 title: "個人作品 | SIMPLEX",
                 link: "projects/project01.html"
            },
            {
                 cover: "src/003_png_cover.png",
                 hover: "src/003_gif_cover.gif",
                 title: "2020 台北電影節 Taipei Film Festival | 片頭動畫",
                 link: "projects/project01.html"
            },
            {
                 cover: "src/simplex_png_cover.png",
                 hover: "src/simplex_gif_cover.gif",
                 title: "個人作品 | SIMPLEX",
                 link: "projects/project01.html"
            },
        ]
    },
    mounted: function(){
       
    },
    methods: {
        getRandom: function(min,max){
            return Math.floor(Math.random()*(max-min+1))+min;
        }
    }
});
