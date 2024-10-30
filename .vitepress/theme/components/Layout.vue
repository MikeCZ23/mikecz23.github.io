<script setup lang="ts">
import HomeHeroComponent from "./HomeHeroComponent.vue";
import DefaultTheme from 'vitepress/theme'
import Giscus from '@giscus/vue'

const { Layout } = DefaultTheme
const { frontmatter, title } = useData()
</script>

<template>
  <Layout>
    <template #home-hero-info>
      <HomeHeroComponent/>
    </template>
    <template #doc-after>
      <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
        <Giscus
          :key="giscus"
          :is="'script'"
          src="https://giscus.app/client.js"
          repo="MikeCZ23/mikecz23.github.io"
          repoId="R_kgDOLf7Wgg"
          category="Comments"
          categoryId="DIC_kwDOLf7Wgs4CfhOr" 
          :theme="isDark ? 'https://cdn.jsdelivr.net/gh/MikeCZ23/mikecz23.github.io@latest/.vitepress/theme/giscus-dark.css' : 'https://cdn.jsdelivr.net/gh/MikeCZ23/mikecz23.github.io@latest/.vitepress/theme/giscus-light.css'"
          lang="en"
          loading="lazy"
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
  </Layout>
</template>


<script lang="ts">
import { watch } from 'vue'
import { useRoute, useData } from 'vitepress'

export default {
  mounted() {
    const vitePressData = useData()
    this.isDark = vitePressData.isDark

    const route = useRoute() 
    watch(route, () => {
      this.giscus = !this.giscus
    })
  },
  data() {
    return {
      giscus: true,
      isDark: false
    }
  }
}
</script>
