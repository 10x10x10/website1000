

const projectViewData = {
    projects:[
        {
            title: "2020 台北電影節 Taipei Film Festival | 片頭動畫",
            link: "/projects/project01.html",
            cover: "src/003_png_cover.png",
            hover: "src/003_gif_cover.gif",
        },
        {
            title: "個人作品 | SIMPLEX",
            link: "/projects/project01.html",
            cover: "src/simplex_png_cover.png",
            hover: "src/simplex_gif_cover.gif",
        },
        {
            title: "2020 台北電影節 Taipei Film Festival | 片頭動畫",
            link: "/projects/project01.html",
            cover: "src/003_png_cover.png",
            hover: "src/003_gif_cover.gif",
        },
        {
            title: "個人作品 | SIMPLEX",
            link: "/projects/project01.html",
            cover: "src/simplex_png_cover.png",
            hover: "src/simplex_gif_cover.gif",
        },
        {
            title: "2020 台北電影節 Taipei Film Festival | 片頭動畫",
            link: "/projects/project01.html",
            cover: "src/003_png_cover.png",
            hover: "src/003_gif_cover.gif",
        },
        {
            title: "個人作品 | SIMPLEX",
            link: "/projects/project01.html",
            cover: "src/simplex_png_cover.png",
            hover: "src/simplex_gif_cover.gif",
        },
        {
            title: "2020 台北電影節 Taipei Film Festival | 片頭動畫",
            link: "/projects/project01.html",
            cover: "src/003_png_cover.png",
            hover: "src/003_gif_cover.gif",
        },
        {
            title: "個人作品 | SIMPLEX",
            link: "/projects/project01.html",
            cover: "src/simplex_png_cover.png",
            hover: "src/simplex_gif_cover.gif",
        },
    ]
};



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