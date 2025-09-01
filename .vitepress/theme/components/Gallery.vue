<script setup lang="ts">
import { ref } from "vue"
// import CSS přes alias (funguje i na GitHubu)
import "@/styles/gallery.css"

const images = [
  { src: "/images/img1.jpg", alt: "Obrázek 1" },
  { src: "/images/img2.jpg", alt: "Obrázek 2" },
  { src: "/images/img3.jpg", alt: "Obrázek 3" }
]

const activeIndex = ref<number|null>(null)

const openLightbox = (index: number) => {
  activeIndex.value = index
}

const closeLightbox = () => {
  activeIndex.value = null
}
</script>

<template>
  <div class="gallery">
    <div class="thumbnails">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        :class="{ active: activeIndex === index }"
        @click="openLightbox(index)"
      />
    </div>

    <div v-if="activeIndex !== null" class="lightbox" @click.self="closeLightbox">
      <img :src="images[activeIndex].src" :alt="images[activeIndex].alt" />
      <div class="lightbox-thumbnails">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          :class="{ active: activeIndex === index }"
          @click="openLightbox(index)"
        />
      </div>
    </div>
  </div>
</template>
