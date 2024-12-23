//HomeHeroComponent.vue
<script setup>
import { VPHighlight } from 'vitepress-carbon/components';
import { useData } from 'vitepress';

const { frontmatter: fm } = useData();

const name = fm.value.hero.name;
const text = fm.value.hero.text;
const tagline = fm.value.hero.tagline;

const icon = {
  src: 'https://raw.githubusercontent.com/MikeCZ23/mikecz23.github.io/refs/heads/main/public/or_icon.png',
  alt: 'Icon description',
  width: '24',
  height: '24',
  wrap: false
};

const colors = ['transparent', '#1549e6', '#f00'];
</script>
<template>
  <div class="hero-container">
    <VPHighlight class="git-highlight" :icon="icon" :stringHighlightColors="colors" />
    <div class="hero-content">
      <h1 v-if="name" class="name">
        <span v-html="name" class="clip"></span>
      </h1>
      <p v-if="text" v-html="text" class="text"></p>
      <p v-if="tagline" v-html="tagline" class="tagline"></p>
    </div>
  </div>
</template>


<style scoped>
.hero-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.git-highlight {
  height: 175px;
  width: 8.3%;
}

.hero-container:hover .git-highlight ::v-deep(.glowing-icon-glow) {
  animation: glowing 2s infinite;
  background: rgb(0, 115, 255);
}

@keyframes glowing {
  0% {
    filter: blur(18px) hue-rotate(0deg);
  }

  50% {
    filter: blur(12px) hue-rotate(180deg);
  }

  100% {
    filter: blur(18px) hue-rotate(360deg);
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
}

@media (max-width: 960px) { /* 620px */
  .hero-container {
    align-items: center;
    flex-direction: column;
  }

  .git-highlight {
    display: none;
  }
}

.name,
.text {
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
}

.VPHero.has-image .name,
.VPHero.has-image .text {
  margin: 0 auto;
}

.name {
  color: var(--vp-home-hero-name-color);
}

.clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

@media (min-width: 640px) {
  .name,
  .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }
}

@media (min-width: 960px) {
  .name,
  .text {
    line-height: 64px;
    font-size: 56px;
  }

  .VPHero.has-image .name,
  .VPHero.has-image .text {
    margin: 0;
  }
}

.tagline {
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

.VPHero.has-image .tagline {
  margin: 0 auto;
}

@media (min-width: 640px) {
  .tagline {
    padding-top: 12px;
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }
}

@media (min-width: 960px) {
  .tagline {
    line-height: 36px;
    font-size: 24px;
  }

  .VPHero.has-image .tagline {
    margin: 0;
  }
}
</style>
