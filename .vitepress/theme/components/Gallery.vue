<script setup lang="ts">
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  images: string[] | string
  captions?: string[] | string  // přidáno
}>()

// přijme buď pole, nebo "comma-separated" string a doplní base (GitHub Pages apod.)
const list = computed(() => {
  const raw = Array.isArray(props.images)
    ? props.images
    : typeof props.images === 'string'
      ? props.images.split(',').map(s => s.trim()).filter(Boolean)
      : []
  return raw.map(src => withBase(src))
})

// nový: zpracování popisků
const captionList = computed(() => {
  if (!props.captions) return list.value.map(() => '') 
  const raw = Array.isArray(props.captions)
    ? props.captions
    : typeof props.captions === 'string'
      ? props.captions.split(',').map(s => s.trim())
      : []
  return raw
})

const activeIndex = ref<number|null>(null)
const openImage = (i: number) => (activeIndex.value = i)
const closeImage = () => (activeIndex.value = null)
const prevImage = () => { if (activeIndex.value! > 0) activeIndex.value!-- }
const nextImage = () => { if (activeIndex.value! < list.value.length - 1) activeIndex.value!++ }
</script>

<template>
  <div class="gallery" v-if="list.length">
    <!-- hlavní grid náhledů -->
    <div class="thumbs">
      <img
        v-for="(src, i) in list"
        :key="i"
        :src="src"
        class="thumb"
        @click="openImage(i)"
      />
    </div>

    <!-- lightbox -->
    <div
      v-if="activeIndex !== null"
      class="lightbox"
      @click.self="closeImage"
      role="dialog"
      aria-modal="true"
    >
      <button
        class="nav prev"
        @click.stop="prevImage"
        :disabled="activeIndex === 0"
        aria-label="Previous"
      >‹</button>

      <div class="lightbox-content">
        <!-- hlavní obrázek -->
        <img :src="list[activeIndex!]" class="lightbox-img" />
        <div v-if="captionList[activeIndex!]" class="lightbox-caption">
          {{ captionList[activeIndex!] }}
        </div>

        <!-- carousel s náhledy -->
        <div class="carousel">
          <img
            v-for="(src, i) in list"
            :key="i"
            :src="src"
            class="carousel-thumb"
            :class="{ active: i === activeIndex }"
            @click="activeIndex = i"
          />
        </div>
      </div>

      <button
        class="nav next"
        @click.stop="nextImage"
        :disabled="activeIndex === list.length - 1"
        aria-label="Next"
      >›</button>
      <button class="close" @click="closeImage" aria-label="Close">✕</button>
    </div>
  </div>
  <div v-else class="gallery-empty">No images.</div>
</template>


<style scoped>
.gallery {
  display: flex !important;
  gap: 10px !important;
  flex-wrap: wrap !important;
}

.thumb {
  width: 220px !important;
  height: auto !important;
  cursor: pointer !important;
  border-radius: 4px !important;
  transition: transform .2s !important;
  flex: 0 0 auto !important;
  scroll-snap-align: start !important;
}

.thumbs {
  display: flex !important;
  gap: 10px !important;
  overflow-x: hidden !important;
  padding: 10px !important;
  scroll-snap-type: x mandatory !important;
}

.lightbox {
  position: fixed !important;
  inset: 0 !important;
  background: rgba(85, 74, 74, 0.123) !important;
  backdrop-filter: blur(15px) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 2000 !important;
}

.lightbox-content {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}

.lightbox-img {
  max-width: 80vw !important;
  max-height: 80vh !important;
  object-fit: contain !important;
  border-radius: 8px !important;
  box-shadow: 0 0 20px rgba(0,0,0,.5) !important;
}

.lightbox-caption {
  margin-top: 10px !important;
  color: #666 !important;
  font-size: 16px !important;
  text-align: center !important;
  max-width: 80vw !important;
}

.carousel {
  margin-top: 15px !important;
  display: flex !important;
  gap: 8px !important;
  overflow-x: auto !important;
  padding: 5px !important;
}

.carousel-thumb {
  width: 80px !important;
  height: auto !important;
  cursor: pointer !important;
  border-radius: 4px !important;
  flex: 0 0 auto !important;
  transition: transform 0.2s, filter 0.2s, opacity 0.2s !important;
  filter: grayscale(1) !important;
  opacity: 0.6 !important;
}

.carousel-thumb:hover {
  transform: scale(1.05) !important;
  opacity: 0.8 !important;
}

.carousel-thumb.active {
  filter: none !important;
  opacity: 1 !important;
  border: 2px solid #fff !important;
}

.close {
  position: absolute !important;
  top: 20px !important;
  right: 30px !important;
  background: rgb(58, 58, 58) !important;
  border: none !important;
  color: #fff !important;
  cursor: pointer !important;
  width: 36px !important;
  height: 36px !important;
  border-radius: 25% !important;
  font-size: 15px !important;
}

.nav {
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  font-size: 15px !important;
  width: 36px !important;
  height: 36px !important;
  background: rgb(58, 58, 58) !important;
  border-radius: 25% !important;
  border: none !important;
  color: #fff !important;
  cursor: pointer !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  user-select: none !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2) !important;
  transition: background 0.2s, transform 0.2s !important;
}

.nav:hover {
  transform: translateY(-50%) scale(1.1) !important;
}

.prev { left: 30px !important; }
.next { right: 30px !important; }

button:disabled {
  opacity: 0.3 !important;
  cursor: default !important;
}

</style>

