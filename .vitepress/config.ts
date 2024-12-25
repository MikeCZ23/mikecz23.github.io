import { defineConfig } from "vitepress"
import FastGlob from "fast-glob";
import grayMatter from "gray-matter";
import { readFile } from "node:fs/promises";
import { basename } from "node:path";
import { URL, fileURLToPath } from 'node:url';
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const baseUrl = 'https://mikecz23.github.io'
const RSS: RSSOptions = {
  title: 'Češtiny od MikeCZ',
  baseUrl,
  copyright: 'Copyright (c) 2024-present',
  description: 'Fan Češtiny',
  language: 'cs',
  author: {
    name: 'MikeCZ',
    email: 'MikeCZ1@protonmail.com',
    link: 'https://mikecz23.github.io'
  },
  icon: true,
  filename: 'feed.rss',
  log: true,
  ignoreHome: true,
}

const posts: any[] = [];
for (const source of await FastGlob("novinky/*-*.md")) {
  const content = await readFile(source, "utf-8");
  const matter = grayMatter(content);
  posts.push({
    text: matter.data.title,
    link: `/novinky/${basename(source, ".md")}.html`
  });
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ignoreDeadLinks: true,
    lastUpdated: true,
    appearance: 'force-dark', /* force-dark */

    vite: {
    plugins: [
    AutoImport({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver()],
    }),    
    Components({
      // dirs: ['components'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver()]
    }),
    RssPlugin(RSS),
  ],
  ssr: { noExternal: ['element-plus', /\.css$/, /\.vue$/, /^vitepress-carbon/] },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ]
    }
  },
    resolve: {
      alias: [
        {
        find: /^.*VPSwitchAppearance\.vue$/,
        replacement: fileURLToPath(
          new URL('./theme/components/CustomSwitchAppearance.vue', import.meta.url),
        ),
      },
      ],
    },
  },
    
    sitemap: {
    hostname: 'https://mikecz23.github.io/',
    lastmodDateOnly: false,
 /*   transformItems: (items) => {
      // add new items or modify/filter existing items
    items.push({
      url: '/readme/',
      changefreq: 'monthly',
      priority: 0.8
    })
    return items
    } */
  },
  
  title: "Češtiny od MikeCZ",
  cleanUrls: true,
  description: "Stránka mých překladů her.",
  cacheDir: './.vitepress/cache',
  outDir: '',
  srcDir: '',
  base: "/",
  head: [
    ['link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/element-plus/dist/index.css' }],
    ['script', { async: '', src: '//cdn.jsdelivr.net/npm/@element-plus/icons-vue' }],
    ['script', { async: '', src: '//cdn.jsdelivr.net/npm/vue@3' }],
    ['script', { async: '', src: '//cdn.jsdelivr.net/npm/element-plus' }],
    ["link", { rel: "icon", href: "/favicon1.ico" }],
    ['meta', { name: 'description', content: 'Stránka mých překladů her' }],
    ['meta', { property: 'og:url', content: 'https://github.com/MikeCZ23' }],
    ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:title', content: 'MikeCZ - Češtiny' }],
    // ['meta', { property: 'og:description', content: 'Stránka fanouškovského překladu hry.' }],
    // ['meta', { property: 'og:image', content: 'https://mikecz23.github.io/icon.png' }],  // Obrázek v odkazu
    ['meta', { property:'theme-color', name: 'theme-color', content: '#ff6767' }], // barva odkazu
    ['meta', { property:'twitter:card', name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'google-site-verification', content: 'DmFx_aqenbpJTLNw4Pl_iK2Au3N_lEnhdDz0xreDVwA' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-TWEJW6NL8T' }],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TWEJW6NL8T');`],
  ],
  themeConfig: {
    docFooter: {
      prev: 'Předchozí stránka',
      next: 'Následující stránka'
    },

  notFound: {
      title: 'VYPADÁ TO, ŽE JSI SE ZTRATIL',
      quote: "Stránka, na kterou se snažíte jít, není k dispozici!", // set to '' to hide
      linkLabel: 'go to home', // aria-label
      linkText: 'Vezmi mě domů',
      code: '404',
  },

  editLink: {
      pattern: 'https://github.com/mikecz23/mikecz23.github.io/edit/main/:path',
      text: 'Edit this page'
  },

  logo: {
      src: 'or_icon.png'
  },

   // lastUpdated: {
   //   text: 'Updated at',
   //   formatOptions: {
   //     dateStyle: 'short',
       // timeStyle: 'none'
  //    }
  //  },
    
    darkModeSwitchLabel: "Vzhled",
    lightModeSwitchTitle: "Přepnout do světlého režimu",
    darkModeSwitchTitle: "Přepnout do tmavého režimu",

    nav: [
      { text: "🏠 Úvod", link: "/" },
      { text: "📰 Novinky", link: "/novinky/", activeMatch: "/novinky/"},
      // dropdown
      { text: '<img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" width="15px" height="15px"> Češtiny', items: [
 //       { text: 'MikeCZ', items: [
          { text: "Hollow Knight", link: "/readme/hollow", activeMatch: "/hollow/"},
          { text: "Plague Inc", link: "/readme/plague", activeMatch: "/plague/" },
          { text: 'Voices of the Void', link: '/readme/VotV', activeMatch: "/VotV/"},
          { text: 'Progressbar95', link: '/readme/progressbar95', activeMatch: "/progressbar95/"},
          { text: 'Infection Free Zone', link: '/readme/Infection', activeMatch: "/Infection/"}]},
      { text: 'Software', items: [
        	{ text: "‎TBA", link: " ", activeMatch: " "}]},
 //       { text: 'Pertim', items: [
 //         { text: "Summer of 58", link: "/readme/summer", activeMatch: "/summer/"},
 //         { text: "Silver Chains", link: "/readme/silcha", activeMatch: "/silcha/" },
 //         { text: 'Im counting to 6', link: '/readme/count6', activeMatch: "/count6/"},
 //         { text: 'Alone in the Dark Prologue', link: '/readme/alodar', activeMatch: "/alodar/"}]}
 //       ]},
    ],

    footer: { /* <span class="divider">|</span> */
      message: 'Licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"><img src="https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png" alt="License: CC BY-NC-ND 4.0" style="display: inline-block;height:15px!important;vertical-align:text-bottom;"><img style="height:15px!important;margin-left:0px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:15px!important;margin-left:-3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:15px!important;margin-left:-3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:15px!important;margin-left:-3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" alt=""></a><span class="divider">|</span> Powered by <a target="_blank" href="https://vitepress.dev/">VitePress <img src="https://vitepress.dev/vitepress-logo-large.webp" alt="Vite Logo" height="13px" width="13px" style="display: inline-block"></a>',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="">MikeCZ</a>`,
    },

    outline: {
      label: "Obsah"
    },

    sidebar: {
      "/novinky/": posts
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/MikeCZ23/mikecz23.github.io", ariaLabel: "Github" },
      { icon: "discord", link: "https://discord.gg/hKcEnX9FrK", ariaLabel: "Discord" },

      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><title>FAQ</title><path fill="currentColor" d="M18 15H6l-4 4V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m5-6v14l-4-4H8a1 1 0 0 1-1-1v-1h14V8h1a1 1 0 0 1 1 1M8.19 4c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91C7.11 9.08 7 9.5 7 10h2c0-.31.04-.56.13-.74s.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82C9.85 4.23 9.12 4 8.19 4M7 11v2h2v-2zm6 2h2v-2h-2zm0-9v6h2V4z"/></svg>',},link: "https://mikecz23.github.io/faq",  ariaLabel: "FAQ"},
      
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002" xml:space="preserve"><title>Witcher 3 mapa</title><path style="fill:#4bcdb2" d="m294.039 490.613 104.744-33.892V21.391L294.039 55.283z"/><path style="fill:#3eac92" d="m503.527 490.613-104.744-33.892V21.391l104.744 33.892z"/><path style="fill:#57eecf" d="M28.419 476.126c0-59.379 59.56-51.72 59.56-51.72V62.55H294.043v435.323H76.681c-18.855 0-35.926-8.315-48.262-21.747z"/><path style="fill:#4bcdb2" d="M87.979 424.406s-59.56-7.66-59.56 51.72c-12.325-13.41-19.951-31.915-19.951-52.352V88.229c0-40.919 30.548-74.1 79.511-74.1v410.277z"/><path style="fill:#ff5023" d="M228.22 133.52a99.315 99.315 0 0 0-4.508 0c-68.267 1.538-108.708 77.295-73.168 135.601l66.839 91.534c4.246 5.814 12.92 5.814 17.165 0l66.839-91.534c35.541-58.306-4.899-134.063-73.167-135.601zm31.741 114.428-25.414 34.803c-4.244 5.814-12.92 5.814-17.165 0l-25.412-34.803c-16.02-26.281 2.209-60.428 32.979-61.12a42.962 42.962 0 0 1 2.032 0c30.772.693 49 34.839 32.98 61.12z"/><path style="fill:#50000f" d="M506.136 54.485 401.392 20.592c-.05-.016-.102-.024-.153-.04a8.268 8.268 0 0 0-.509-.132c-.154-.036-.306-.073-.46-.101-.171-.031-.341-.05-.513-.07-.157-.018-.314-.038-.472-.047-.171-.01-.342-.009-.514-.009-.159 0-.317-.001-.477.008-.169.01-.338.031-.506.051-.16.019-.321.037-.48.066-.163.029-.324.068-.487.106a7.436 7.436 0 0 0-.488.127c-.052.016-.106.024-.158.041l-103.474 33.48H96.452V14.129a8.472 8.472 0 0 0-8.473-8.473c-25.71 0-47.851 8.337-64.03 24.111C8.505 44.822 0 65.586 0 88.233v335.538c0 22.275 8.232 42.519 21.593 57.386.363.493.777.943 1.236 1.344 13.857 14.739 32.885 23.845 53.853 23.845h217.359c.403 0 .796-.038 1.184-.093l.238-.036c.4-.068.791-.157 1.169-.279l.016-.003 102.135-33.048 102.135 33.048a8.47 8.47 0 0 0 7.595-1.211 8.471 8.471 0 0 0 3.489-6.851V62.545a8.475 8.475 0 0 0-5.866-8.06zM294.332 264.416l-66.627 91.242c-.533.73-1.24.883-1.74.883s-1.207-.154-1.74-.883l-66.627-91.242c-15.087-24.976-15.71-55.192-1.653-80.897 13.866-25.357 39.271-40.882 67.964-41.527a85.285 85.285 0 0 1 4.109 0h.009c23.534.53 44.852 11.079 59.41 28.852l.102.127a82.39 82.39 0 0 1 8.443 12.548c14.06 25.704 13.436 55.92-1.65 80.897zM16.946 423.771V88.233c0-35.975 25.319-61.85 62.559-65.25v392.655c-10.63.259-28.038 2.709-41.442 14.5-6.9 6.069-11.849 13.751-14.813 22.964-4.033-8.832-6.304-18.795-6.304-29.331zm20.016 48.98c.179-3.973.683-7.655 1.503-11.051h10.692a8.473 8.473 0 0 0 0-16.946h-1.854a31.508 31.508 0 0 1 1.881-1.828c14.462-12.797 37.507-10.141 37.714-10.113a8.474 8.474 0 0 0 9.554-8.404V71.018h189.114v74.364c-16.022-12.6-35.835-19.853-57.154-20.333a107.77 107.77 0 0 0-4.891 0c-34.813.783-65.632 19.602-82.442 50.338-17.055 31.185-16.221 67.875 2.23 98.143.122.201.253.398.392.587l66.84 91.534c3.637 4.98 9.258 7.837 15.425 7.837 6.167 0 11.789-2.856 15.426-7.837l.193-.264h4.169a8.473 8.473 0 0 0 8.473-8.473 8.435 8.435 0 0 0-2.258-5.746l33.597-46.011v43.284h-9.647a8.473 8.473 0 0 0 0 16.946h9.647v124.014H76.681c-15.234 0-29.156-6.299-39.719-16.65zm265.55-190.801 5.72-7.833c.139-.19.269-.386.392-.587 18.451-30.268 19.284-66.958 2.23-98.143a99.864 99.864 0 0 0-8.341-12.812V68.709l87.798-28.408v103.746l-.169.043a8.473 8.473 0 0 0-6.166 10.275 8.462 8.462 0 0 0 6.337 6.199v297.254l-87.798 28.408V281.95h-.003zm104.744 175.868V339.612l11.522 3.911a8.476 8.476 0 0 0 10.747-5.302 8.473 8.473 0 0 0-5.3-10.747l-14.283-4.848a8.506 8.506 0 0 0-2.685-.443V163.445c.332.04.664.067.994.067a8.476 8.476 0 0 0 7.941-5.517 8.47 8.47 0 0 0-4.981-10.897l-3.954-1.474V40.301l87.798 28.408v109.633l-4.448-1.657a8.47 8.47 0 0 0-10.899 4.98 8.47 8.47 0 0 0 4.981 10.897l10.365 3.863v155.12c-4.263-1.113-8.724 1.228-10.162 5.467a8.473 8.473 0 0 0 5.301 10.747l4.861 1.649v116.818l-87.798-28.408z"/><path style="fill:#50000f" d="M227.175 178.356a54.098 54.098 0 0 0-2.417 0c-17.374.392-32.753 9.778-41.138 25.11-8.495 15.534-8.078 33.812 1.115 48.892.122.201.253.398.392.587l25.414 34.803c3.637 4.98 9.258 7.837 15.425 7.837 6.167 0 11.789-2.856 15.426-7.837l25.414-34.803c.139-.19.269-.386.392-.587 9.193-15.081 9.61-33.358 1.115-48.892-8.387-15.332-23.766-24.718-41.138-25.11zm25.723 64.896-25.193 34.501c-.533.73-1.24.883-1.74.883s-1.207-.154-1.74-.883l-25.193-34.501c-5.835-9.79-6.044-21.598-.545-31.656 5.443-9.953 15.406-16.045 26.654-16.299a32.298 32.298 0 0 1 1.647 0c11.245.254 21.209 6.346 26.652 16.299 5.502 10.057 5.293 21.866-.542 31.656zM332.438 337.442l-14.532 4.04a8.471 8.471 0 0 0-5.894 10.432 8.478 8.478 0 0 0 8.159 6.206c.751 0 1.515-.101 2.274-.312l14.532-4.04a8.471 8.471 0 0 0 5.894-10.432c-1.254-4.508-5.926-7.152-10.433-5.894zM467.072 342.017l-14.282-4.849c-4.433-1.501-9.244.87-10.747 5.301a8.472 8.472 0 0 0 5.3 10.746l14.282 4.848a8.474 8.474 0 0 0 2.724.452 8.476 8.476 0 0 0 8.023-5.753c1.505-4.429-.869-9.241-5.3-10.745zM376.032 325.32l-14.532 4.041a8.471 8.471 0 0 0-5.893 10.433 8.478 8.478 0 0 0 8.158 6.205c.752 0 1.516-.101 2.275-.312l14.532-4.041a8.471 8.471 0 0 0 5.893-10.433c-1.254-4.508-5.926-7.151-10.433-5.893zM367.533 158.472c-1.135-4.54-5.736-7.303-10.275-6.166l-12.902 3.224a8.474 8.474 0 0 0 4.11 16.441l12.902-3.224a8.475 8.475 0 0 0 6.165-10.275zM455.888 181.264a8.476 8.476 0 0 0 7.941-5.517 8.47 8.47 0 0 0-4.981-10.897l-15.88-5.918a8.468 8.468 0 0 0-10.899 4.98 8.47 8.47 0 0 0 4.981 10.897l15.88 5.918a8.422 8.422 0 0 0 2.958.537zM99.993 444.754H83.047a8.473 8.473 0 0 0 0 16.946h16.946a8.473 8.473 0 0 0 0-16.946zM150.832 444.754h-16.946a8.473 8.473 0 0 0 0 16.946h16.946a8.473 8.473 0 0 0 0-16.946zM214.746 444.754h-6.424v-6.424a8.473 8.473 0 0 0-16.946 0v6.424h-6.425a8.473 8.473 0 0 0 0 16.946h6.425v6.425a8.473 8.473 0 0 0 16.946 0V461.7h6.424a8.473 8.473 0 0 0 0-16.946z"/></svg>',},link: "https://mikecz23.github.io/witcher3map/index.html",  ariaLabel: "WitcherMapa"}, 
    ]
  }
});
