<script setup lang="ts">
import HomeHeroComponent from "./HomeHeroComponent.vue";
import DefaultTheme from 'vitepress/theme';
import Giscus from '@giscus/vue';
import links from '../../../odkazy.json';

const { Layout } = DefaultTheme;
const { frontmatter, title } = useData();
</script>

<template>
  <Layout>
    <!-- Sekce s hero komponentou -->
    <template #home-hero-info>
      <HomeHeroComponent />
    </template>

    <!-- Sekce s komentáři -->
    <template #doc-after>
      <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
        <Giscus
          :key="giscus"
          :is="'script'"
          src="https://giscus.app/client.js"
          repo="MikeCZ23/mikecz23.github.io"
          repoId="R_kgDONH8AEg"
          category="Comments"
          categoryId="DIC_kwDONH8AEs4CkLim" 
          :theme="isDark ? 'https://cdn.jsdelivr.net/gh/MikeCZ23/mikecz23.github.io@latest/.vitepress/theme/giscus-dark.css' : 'https://cdn.jsdelivr.net/gh/MikeCZ23/mikecz23.github.io@latest/.vitepress/theme/giscus-light.css'"
          lang="cs"
          emit-metadata="0"
          reactions-enabled="1"
          input-position="top"
          strict="0"
          term="Welcome to giscus!"
          mapping="pathname"
          crossorigin="anonymous"
        />
      </div>
    </template>

    <!-- Spodní panel -->
    <template #aside-bottom>
      <div class="sponsor-panel">
      <div class="panel-title">Může vás zajímat</div>

      <!-- Nominační tlačítko -->
      <a class="viteconf" href="https://www.novorocenky.cz/pf2025/Novorocenka-PF2025-3141216026-102797.html" target="_blank">
        <img width="22" height="22" src="../../../public/icon.png" alt="ViteConf Logo"> 
        <span>
          <p class="extra-info">Děkujeme za přízeň</p>
          <p class="heading">2025</p>
          <p class="extra-info">Buďte u toho s námi!</p>
        </span>
      </a>
    
      <!-- Obrázky s odkazy -->
        <a v-for="link in links.normalLinks" :key="link.url" :href="link.url" class="panel-button" :class="link.class" target="_blank">
          <img :src="link.imgSrc" :alt="link.alt" class="panel-image" :class="link.class" />
          <!-- <span>{{ link.label }}</span> -->
        </a>

      <!-- Řádek s více poly -->
      <div v-for="(group, index) in links.groupedLinks" :key="'row-' + index" class="panel-row">
        <a v-for="link in group" :key="link.url" :href="link.url" class="panel-button" :class="link.class" target="_blank">
          <img :src="link.imgSrc" :alt="link.alt" class="panel-image" :class="link.class" />
          <!-- <span>{{ link.label }}</span> -->
        </a>
      </div>
    
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import { watch } from 'vue';
import { useRoute, useData } from 'vitepress';

export default {
  mounted() {
    const vitePressData = useData();
    this.isDark = vitePressData.isDark;

    const route = useRoute();
    watch(route, () => {
      this.giscus = !this.giscus;
    });
  },
  data() {
    return {
      giscus: true,
      isDark: false,
    };
  },
};
</script>

<style>
.viteconf {
  /* margin-top: 1rem; */
  margin-bottom: 1rem;
  border-radius: 14px;
  padding-top: .4rem;
  padding-bottom: .4rem;
  position: relative;
  font-size: .9rem;
  font-weight: 700;
  line-height: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  background-color: #161618;
  border: 2px solid #161618;
  transition: border-color .5s;
}

.viteconf:hover {
  border: 2px solid #747bff;
}

.viteconf:hover img {
  transform: scale(1.75);
}
.viteconf img {
  transition: transform .5s;
  transform: scale(1.25);
}

.viteconf .extra-info {
  color: #fffff5db;
  opacity: 0;
  font-size: .7rem;
  padding-left: .1rem;
  transition: opacity .5s;
}

.viteconf:hover .extra-info {
  opacity: .9;
}

.viteconf .heading {
  background-image: linear-gradient(120deg, #b047ff 16%, #9499ff, #9499ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.panel-title {
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 0px;
  color: #fff;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.sponsor-panel {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px; /* odsazení mezi odkazy */
}

.sponsor-button {
  width: 100%;
  margin-bottom: 1rem;
  padding: 8px 15px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: transparent;
  border: 1px solid #555;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sponsor-button:hover {
  color: #409eff;
  border-color: #213d5b;
  background-color: #18222c;
  outline: none;
}

.panel-button.top {
    border-radius: 14px 14px 0 0;
}
.panel-button.bottom {
    border-radius: 0 0 14px 14px;
}
.panel-row:last-of-type .panel-button:first-child {
  border-radius: 0 0 0 14px;
}
.panel-row:last-of-type .panel-button:last-child {
  border-radius: 0 0 14px 0;
}

.panel-button {
  height: 72px;
  display: flex; /* Umožní zarovnání obrázku a textu vedle sebe */
  align-items: center; /* Vertikální zarovnání na střed */
  justify-content: center;
  gap: 8px; /* Mezera mezi obrázkem a textem */
  text-decoration: none; /* Odstraní podtržení odkazu */
  color: #fff; /* Barva textu */
  background-color: #232323; /* Barva pozadí */
  padding: 10px;
  /* border: 1px solid #444; */
  border-radius: 0px;
  transition: background-color 0.3s;
  overflow: hidden;
  /* line-height: 1; /* Zajistí, že výška textu nebude nadměrná */
}

.panel-button:hover {
  background-color: #1e1e1e; /* Barva při hoveru */
  color: #409eff;
  outline: none;
}

.panel-button span {
  font-size: 0.8rem;
  color: gray;
  /* margin-top: 0.5rem; */
  text-align: center;
  display: block;
}

.panel-image {
  max-width: calc(100% - 40px); /* Nastaví velikost obrázku */
  height: auto; /* Automatická výška */
  display: block; /* Odstraní výchozí mezeru u inline obrázků */
  margin: 0 auto;
  padding: 20px;
  object-fit: cover; /* nebo contain, podle potřeby */
}

.panel-row {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.panel-row .panel-button {
  width: calc(50% - 2.5px);
  height: 64px;
}

.panel-row .panel-image {
  max-width: calc(100% - 0px);
  padding: 0px;
  height: auto;
}
</style>
