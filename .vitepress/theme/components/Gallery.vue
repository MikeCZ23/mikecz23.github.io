<script setup lang="ts">
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
import "@/styles/gallery.css"   // ✅ externí CSS přes alias

const props = defineProps<{
  images: string[] | string
  captions?: string[] | string
}>()

// zpracování obrázků
const list = computed(() => {
  const raw = Array.isArray(props.images)
    ? props.images
    : typeof props.images === 'string'
      ? props.images.split(',').map(s => s.trim()).filter(Boolean)
      : []
  return raw.map(src => withBase(src))
})

// zpracování popisků
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
    <!-- grid náhledů -->
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
