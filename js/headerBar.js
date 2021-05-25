
const headerData = {
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
};






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