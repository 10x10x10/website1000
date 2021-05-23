

var app = new Vue({
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
