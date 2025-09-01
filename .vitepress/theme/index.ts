import type { Theme } from "vitepress";
import { h } from 'vue'
import DefaultTheme from "vitepress/theme"
import './custom.css';
import './giscus-dark.css';
import './giscus-light.css';
import PBlogFigure from "./components/PBlogFigure.vue";
import PBlogHeader from "./components/PBlogHeader.vue";
import PBlogListing from "./components/PBlogListing.vue";
import PBlogVideo from "./components/PBlogVideo.vue";
import PDateString from "./components/PDateString.vue";
import PTeamMembers from "./components/PTeamMembers.vue";
import Layout from "./components/Layout.vue";
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import './BtP-style.css'
import vitepressLifeProgress from '../../plugins/vitepress-plugin-life-progress'
import '../../plugins/vitepress-plugin-life-progress/lib/css/index.css'
import Gallery from './components/Gallery.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'


export default {
  Layout: () => h(Layout),
  extends: DefaultTheme,

  setup () {
    vitepressLifeProgress()
  },
  
  enhanceApp({ app }) {
    app.component("PBlogFigure", PBlogFigure);
    app.component("PBlogHeader", PBlogHeader);
    app.component("PBlogListing", PBlogListing);
    app.component("PBlogVideo", PBlogVideo);
    app.component("PDateString", PDateString);
    app.component("PTeamMembers", PTeamMembers);

    app.component("Gallery", Gallery)
    
    app.use(ElementPlus)

    vitepressBackToTop({
      // default
      threshold:300
    })
  }
} satisfies Theme;
