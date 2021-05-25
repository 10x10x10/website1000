
import {
    regHeader, 
    regProjectView,
    regAbout,
} from "./js/components.js";

regHeader();
regProjectView();
regAbout();

const app = new Vue({
    el: '#app',
    data: { },
    components: { },
    mounted: function(){ },
    methods: { }
});
