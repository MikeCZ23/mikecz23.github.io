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
    <div class="thumbs">
      <img
        v-for="(src, i) in list"
        :key="i"
        :src="src"
        class="thumb"
        @click="openImage(i)"
      />
    </div>

    <div v-if="activeIndex !== null" class="lightbox" @click.self="closeImage" role="dialog" aria-modal="true">
      <button class="nav prev" @click.stop="prevImage" :disabled="activeIndex === 0" aria-label="Previous">‹</button>

      <div class="lightbox-content">
        <img :src="list[activeIndex!]" class="lightbox-img" />
        <div v-if="captionList[activeIndex!]" class="lightbox-caption">
          {{ captionList[activeIndex!] }}
        </div>
      </div>

      <button class="nav next" @click.stop="nextImage" :disabled="activeIndex === list.length - 1" aria-label="Next">›</button>
      <button class="close" @click="closeImage" aria-label="Close">✕</button>
    </div>
  </div>
  <div v-else class="gallery-empty">No images.</div>
</template>

<style scoped>
.gallery{display:flex;gap:10px;flex-wrap:wrap;}
.thumb{width:220px;height:auto;cursor:pointer;border-radius:4px;transition:transform .2s;}
.thumb:hover{transform:scale(1.05)}

.lightbox{position:fixed;inset:0;background:rgba(85, 74, 74, 0.123);backdrop-filter:blur(8px);
display:flex;justify-content:center;align-items:center;z-index:2000}
.lightbox-content{display:flex;flex-direction:column;align-items:center;}
.lightbox-img{max-width:80vw;max-height:80vh;object-fit:contain;border-radius:8px;box-shadow:0 0 20px rgba(0,0,0,.5);}
.lightbox-caption{margin-top:10px;color:#555;font-size:16px;text-align:center;max-width:80vw;}

.close{position:absolute;top:20px;right:30px;font-size:28px;background:transparent;border:none;color:#fff;cursor:pointer;width:36px;height:36px;background:rgb(45, 44, 44);border-radius:50%;font-size: 15px;}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;          
  width: 36px;              
  height: 36px;              
  background: rgb(61, 31, 31);
  border-radius: 50%;       
  border: none;
  color: #fff;             
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: background 0.2s, transform 0.2s;
}
.nav:hover {
    background: rgb(69, 31, 31);
    transform: translateY(-50%) scale(1.1);
}
.prev{left:30px}
.next{right:30px}

button:disabled{opacity:.3;cursor:default}
</style>
