<script setup lang="ts">
import HomeHeroComponent from "./HomeHeroComponent.vue";
import DefaultTheme from 'vitepress/theme';
import Giscus from '@giscus/vue';

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
    <a class="viteconf" href="https://viteconf.org/24/replay?utm=vite-sidebar" target="_blank">
      <img width="22" height="22" src="../../../docs/public/icon.png" alt="ViteConf Logo"> 
      <span>
        <p class="extra-info">Děkujeme za přízeň</p>
        <p class="heading">PF 2024/2025</p>
        <p class="extra-info">Focus on the next content!</p>
      </span>
    </a>
    
    <!-- Obrázky s odkazy -->
    <a href="" class="panel-button top">
      <img src="" alt="" class="panel-image">
      <!-- <span></span> -->
    </a>
    <a href="" class="panel-button">
      <img src="" alt="" class="panel-image">
      <!-- <span></span> -->
    </a>
    <a href="" class="panel-button">
      <img src="" alt="" class="panel-image">
      <!-- <span></span> -->
    </a>
    <a href="" class="panel-button">
      <img src="" alt="" class="panel-image">
      <!-- <span style="color:yellow;font-weight:bold;"></span> -->
    </a>

    <!-- Řádek s více poly -->
    <div class="panel-row">
      <a href="" class="panel-button">
        <img src="" alt="" class="panel-image">
        <span></span></a>
      <a href="" class="panel-button">
        <img src="" alt="" class="panel-image">
        <span></span></a>
      <a href="" target="_blank" class="panel-button"></a>
      <a href="" target="_blank" class="panel-button"></a>
      <a href="" target="_blank" class="panel-button"></a>
      <a href="" target="_blank" class="panel-button"></a>
    </div>

    <!-- Další tlačítka -->
    <a href="" class="panel-button"></a>
    <a href="" class="panel-button bottom"></a>
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
  gap: 5px;
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

/* První položka - horní zaoblené rohy */
.panel-button.top {
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
}

/* Poslední položka - dolní zaoblené rohy */
.panel-button.bottom {
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
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
  /* line-height: 1; /* Zajistí, že výška textu nebude nadměrná */
}

.panel-button:hover {
  background-color: #1e1e1e; /* Barva při hoveru */
  color: #409eff;
  outline: none;
}

.panel-image {
  max-width: 120px; /* Nastaví velikost obrázku */
  height: auto; /* Automatická výška */
  display: block; /* Odstraní výchozí mezeru u inline obrázků */
  margin: 0 auto;
  padding: 10px;
}

.panel-image.mini{
  max-width: 180px;
}
.panel-image.minis{
  max-width: 70px;
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
</style>
