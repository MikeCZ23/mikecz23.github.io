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
import vitepressBackToTop from '../../plugins/vitepress-plugin-back-to-top/';
import './BtP-style.css'
import vitepressMusic from 'vitepress-plugin-music'
import '../../plugins/vitepress-plugin-music/dist/index.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const playlist = [
  {
    name: 'Hollow Knight',
    author: 'TyKim',
    file: 'https://od.lk/s/MTBfMjQ5NTEzODE4Xw/hollowknight.mp3',
  },
  {
    name: 'Hollow Knight (2)',
    author: 'Man on the Internet',
    file: 'https://od.lk/s/MTBfMjQ5NTE1MzQ2Xw/hollowknight2.mp3',
  }
]

export default {
  Layout: () => h(Layout),
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("PBlogFigure", PBlogFigure);
    app.component("PBlogHeader", PBlogHeader);
    app.component("PBlogListing", PBlogListing);
    app.component("PBlogVideo", PBlogVideo);
    app.component("PDateString", PDateString);
    app.component("PTeamMembers", PTeamMembers);

    app.use(ElementPlus)

    vitepressMusic(playlist);

    vitepressBackToTop({
      // default
      threshold:300
    })
  }
} satisfies Theme;
