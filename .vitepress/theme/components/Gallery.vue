<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  nextTick
} from 'vue'

import { withBase } from 'vitepress'


const props = defineProps<{
  images: string[] | string
  captions?: string[] | string
}>()


/* =================================
   IMAGES
================================= */

const list = computed(() => {
  const raw = Array.isArray(props.images)
    ? props.images
    : typeof props.images === 'string'
      ? props.images
          .split(',')
          .map(s => s.trim())
          .filter(Boolean)
      : []

  return raw.map(src => withBase(src))
})


/* =================================
   CAPTIONS
================================= */

const captionList = computed(() => {
  if (!props.captions) {
    return list.value.map(() => '')
  }

  return Array.isArray(props.captions)
    ? props.captions
    : props.captions
        .split(',')
        .map(s => s.trim())
})


/* =================================
   LIGHTBOX
================================= */

const activeIndex = ref<number | null>(null)


const openImage = (index: number) => {
  activeIndex.value = index
}


const closeImage = () => {
  activeIndex.value = null
}


const prevImage = () => {
  if (
    activeIndex.value !== null &&
    activeIndex.value > 0
  ) {
    activeIndex.value--
  }
}


const nextImage = () => {
  if (
    activeIndex.value !== null &&
    activeIndex.value <
      list.value.length - 1
  ) {
    activeIndex.value++
  }
}


/* =================================
   TOP SLIDER
================================= */

const thumbsRef =
  ref<HTMLElement | null>(null)


const scrollThumbs = (
  direction: number
) => {
  if (!thumbsRef.value) return

  thumbsRef.value.scrollBy({
    left:
      thumbsRef.value.clientWidth *
      0.8 *
      direction,

    behavior: 'smooth'
  })
}


/* =================================
   MOUSE DRAG
================================= */

const isDragging = ref(false)

let mouseDown = false
let startX = 0
let startScrollLeft = 0
let moved = false


const startMouseDrag = (
  event: MouseEvent
) => {
  if (!thumbsRef.value) return

  /*
   * pouze levé tlačítko
   */
  if (event.button !== 0) return

  mouseDown = true
  moved = false

  startX = event.pageX

  startScrollLeft =
    thumbsRef.value.scrollLeft

  isDragging.value = true
}


const moveMouseDrag = (
  event: MouseEvent
) => {
  if (
    !mouseDown ||
    !thumbsRef.value
  ) {
    return
  }

  const distance =
    event.pageX - startX

  /*
   * malé pohyby ještě považujeme
   * za kliknutí
   */
  if (Math.abs(distance) > 5) {
    moved = true
  }

  thumbsRef.value.scrollLeft =
    startScrollLeft - distance
}


const stopMouseDrag = () => {
  mouseDown = false
  isDragging.value = false
}


/* =================================
   TOUCH DRAG TOP SLIDER
================================= */

let touchStartX = 0
let touchScrollLeft = 0


const startTouchDrag = (
  event: TouchEvent
) => {
  if (!thumbsRef.value) return

  const touch =
    event.touches[0]

  touchStartX =
    touch.pageX

  touchScrollLeft =
    thumbsRef.value.scrollLeft
}


const moveTouchDrag = (
  event: TouchEvent
) => {
  if (!thumbsRef.value) return

  const touch =
    event.touches[0]

  const distance =
    touch.pageX - touchStartX

  thumbsRef.value.scrollLeft =
    touchScrollLeft - distance
}


/* =================================
   THUMB CLICK
================================= */

const handleThumbnailClick = (
  index: number
) => {
  /*
   * Pokud uživatel thumbnail
   * táhl myší, neotvíráme lightbox.
   */
  if (moved) {
    moved = false
    return
  }

  openImage(index)
}


/* =================================
   LIGHTBOX TOUCH
================================= */

const lightboxStartX =
  ref<number | null>(null)

const lightboxStartY =
  ref<number | null>(null)


const handleLightboxTouchStart = (
  event: TouchEvent
) => {
  const touch =
    event.touches[0]

  lightboxStartX.value =
    touch.clientX

  lightboxStartY.value =
    touch.clientY
}


const handleLightboxTouchEnd = (
  event: TouchEvent
) => {
  if (
    lightboxStartX.value === null ||
    lightboxStartY.value === null
  ) {
    return
  }

  const touch =
    event.changedTouches[0]

  const deltaX =
    touch.clientX -
    lightboxStartX.value

  const deltaY =
    touch.clientY -
    lightboxStartY.value

  lightboxStartX.value = null
  lightboxStartY.value = null


  /*
   * příliš malý pohyb
   */
  if (Math.abs(deltaX) < 50) {
    return
  }


  /*
   * vertikální pohyb
   */
  if (
    Math.abs(deltaY) >
    Math.abs(deltaX)
  ) {
    return
  }


  if (deltaX < 0) {
    nextImage()
  } else {
    prevImage()
  }
}


/* =================================
   BOTTOM CAROUSEL
================================= */

const selectImage = async (
  index: number
) => {
  activeIndex.value = index

  await nextTick()

  const element =
    document.querySelector(
      `.carousel-thumb[data-index="${index}"]`
    ) as HTMLElement | null

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
}


/* =================================
   KEYBOARD
================================= */

const handleKeydown = (
  event: KeyboardEvent
) => {
  if (activeIndex.value === null) {
    return
  }

  if (event.key === 'Escape') {
    closeImage()
  }

  if (event.key === 'ArrowLeft') {
    prevImage()
  }

  if (event.key === 'ArrowRight') {
    nextImage()
  }
}


onMounted(() => {
  window.addEventListener(
    'keydown',
    handleKeydown
  )
})


onUnmounted(() => {
  window.removeEventListener(
    'keydown',
    handleKeydown
  )
})
</script>


<template>

  <div
    v-if="list.length"
    class="gallery"
  >

    <!-- =================================
         TOP SLIDER
    ================================== -->

    <div class="gallery-slider">

      <!-- LEFT -->
      <button
        v-if="list.length > 1"
        class="slider-arrow slider-prev"
        type="button"
        aria-label="Previous images"
        @click="scrollThumbs(-1)"
      >
        «
      </button>


      <!-- SCROLL AREA -->

      <div
        ref="thumbsRef"
        class="thumbs"
        :class="{
          dragging: isDragging
        }"

        @mousedown="startMouseDrag"
        @mousemove="moveMouseDrag"
        @mouseup="stopMouseDrag"
        @mouseleave="stopMouseDrag"

        @touchstart="startTouchDrag"
        @touchmove="moveTouchDrag"
      >

        <img
          v-for="(src, i) in list"
          :key="i"

          :src="src"

          :alt="
            captionList[i] ||
            `Image ${i + 1}`
          "

          class="thumb"

          loading="lazy"

          draggable="false"

          @click="
            handleThumbnailClick(i)
          "
        />

      </div>


      <!-- RIGHT -->

      <button
        v-if="list.length > 1"
        class="slider-arrow slider-next"
        type="button"
        aria-label="Next images"
        @click="scrollThumbs(1)"
      >
        »
      </button>

    </div>


    <!-- =================================
         LIGHTBOX
    ================================== -->

    <div
      v-if="activeIndex !== null"
      class="lightbox"

      role="dialog"
      aria-modal="true"

      @click.self="closeImage"
    >

      <!-- PREVIOUS -->

      <button
        class="nav prev"
        type="button"

        aria-label="Previous"

        :disabled="
          activeIndex === 0
        "

        @click.stop="prevImage"
      >
        ‹
      </button>


      <!-- CONTENT -->

      <div
        class="lightbox-content"

        @touchstart="
          handleLightboxTouchStart
        "

        @touchend="
          handleLightboxTouchEnd
        "
      >

        <!-- MAIN IMAGE -->

        <img
          :src="
            list[activeIndex]
          "

          :alt="
            captionList[activeIndex] ||
            `Image ${activeIndex + 1}`
          "

          class="lightbox-img"

          draggable="false"
        />


        <!-- CAPTION -->

        <div
          v-if="
            captionList[activeIndex]
          "

          class="lightbox-caption"
        >
          {{
            captionList[activeIndex]
          }}
        </div>


        <!-- BOTTOM CAROUSEL -->

        <div class="carousel">

          <img
            v-for="(src, i) in list"
            :key="i"

            :src="src"

            :alt="
              captionList[i] ||
              `Image ${i + 1}`
            "

            :data-index="i"

            class="carousel-thumb"

            :class="{
              active:
                i === activeIndex
            }"

            draggable="false"

            @click="
              selectImage(i)
            "
          />

        </div>

      </div>


      <!-- NEXT -->

      <button
        class="nav next"
        type="button"

        aria-label="Next"

        :disabled="
          activeIndex ===
          list.length - 1
        "

        @click.stop="nextImage"
      >
        ›
      </button>


      <!-- CLOSE -->

      <button
        class="close"
        type="button"

        aria-label="Close"

        @click="closeImage"
      >
        ✕
      </button>

    </div>

  </div>


  <div
    v-else
    class="gallery-empty"
  >
    No images.
  </div>

</template>


<style scoped>

/* =================================
   GALLERY
================================= */

.gallery {
  width: 100%;
  max-width: 100%;
}


/* =================================
   TOP SLIDER
================================= */

.gallery-slider {
  position: relative;

  width: 100%;

  display: flex;
  align-items: center;
}


.thumbs {
  display: flex;

  gap: 10px;

  width: 100%;

  overflow-x: auto;
  overflow-y: hidden;

  padding: 10px 4px;

  scrollbar-width: thin;

  -webkit-overflow-scrolling: touch;

  touch-action: pan-x;

  cursor: grab;

  user-select: none;

  scroll-behavior: smooth;
}


.thumbs.dragging {
  cursor: grabbing;

  scroll-behavior: auto;
}


/* =================================
   THUMBNAILS
================================= */

.thumb {
  width: 220px;

  height: 150px;

  flex: 0 0 220px;

  object-fit: cover;

  border-radius: 6px;

  cursor: pointer;

  user-select: none;

  -webkit-user-drag: none;

  scroll-snap-align: start;

  transition:
    transform .2s;
}


.thumb:hover {
  transform: scale(1.03);
}


/* =================================
   SLIDER ARROWS
================================= */

.slider-arrow {
  position: absolute;
  top: 50%;
  transform:translateY(-50%);
  z-index: 10;
  width: 38px;
  height: 38px;
  padding: 0 !important;
  border: none;
  border-radius: 50%;
  background:rgba(58, 58, 58, .9);
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .25);
}


.slider-prev {
  left: 8px;
}


.slider-next {
  right: 8px;
}


.slider-arrow:hover {
  transform:
    translateY(-50%)
    scale(1.08);
}


/* =================================
   LIGHTBOX
================================= */

.lightbox {
  position: fixed;

  inset: 0;

  z-index: 2000;

  background:
    rgba(20, 20, 20, .35);

  backdrop-filter:
    blur(15px);

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 20px;

  touch-action: pan-y;
}


.lightbox-content {
  width: 100%;

  max-width: 1000px;

  min-width: 0;

  display: flex;

  flex-direction: column;

  align-items: center;

  user-select: none;
}


/* =================================
   MAIN IMAGE
================================= */

.lightbox-img {
  max-width: 80vw;

  max-height: 75vh;

  width: auto;

  height: auto;

  object-fit: contain;

  border-radius: 8px;

  box-shadow:
    0 0 20px
    rgba(0, 0, 0, .5);

  user-select: none;

  -webkit-user-drag: none;
}


/* =================================
   CAPTION
================================= */

.lightbox-caption {
  margin-top: 10px;

  color: #666;

  font-size: 16px;

  text-align: center;

  max-width: 80vw;
}


/* =================================
   BOTTOM CAROUSEL
================================= */

.carousel {
  display: flex;

  gap: 8px;

  width:
    min(80vw, 900px);

  margin-top: 15px;

  padding: 5px;

  overflow-x: auto;

  overflow-y: hidden;

  scroll-behavior: smooth;

  scrollbar-width: thin;

  -webkit-overflow-scrolling: touch;

  touch-action: pan-x;
}


.carousel-thumb {
  width: 80px;

  height: 60px;

  flex: 0 0 80px;

  object-fit: cover;

  cursor: pointer;

  border-radius: 4px;

  filter: grayscale(1);

  opacity: .6;

  user-select: none;

  -webkit-user-drag: none;

  transition:
    transform .2s,
    filter .2s,
    opacity .2s;
}


.carousel-thumb:hover {
  transform: scale(1.05);

  opacity: .8;
}


.carousel-thumb.active {
  filter: none;

  opacity: 1;

  border: 2px solid white;
}


/* =================================
   LIGHTBOX NAVIGATION
================================= */

.nav {
  position: absolute;

  top: 50%;

  transform:
    translateY(-50%);

  width: 40px;

  height: 40px;

  padding: 0 !important;

  background:
    rgb(58, 58, 58);

  border: none;

  border-radius: 25%;

  color: white;

  cursor: pointer;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  font-size: 22px;

  user-select: none;
}


.nav:hover {
  transform:
    translateY(-50%)
    scale(1.1);
}


.nav:disabled {
  opacity: .3;

  cursor: default;
}


.prev {
  left: 30px;
}


.next {
  right: 30px;
}


/* =================================
   CLOSE
================================= */

.close {
  position: absolute;

  top: 20px;

  right: 30px;

  width: 36px;

  height: 36px;

  padding: 0 !important;

  font-size: 15px;

  background:
    rgb(58, 58, 58);

  border: none;

  color: white;

  cursor: pointer;

  border-radius: 25%;
}


/* =================================
   MOBILE
================================= */

@media (max-width: 700px) {

  .thumb {
    width: 72vw;

    height: 48vw;

    max-height: 260px;

    flex-basis: 72vw;
  }


  .thumbs {
    gap: 8px;

    padding:
      8px 0;

    /*
     * Na mobilu schováme scrollbar.
     */
    scrollbar-width: none;
  }


  .thumbs::-webkit-scrollbar {
    display: none;
  }


  .slider-arrow {
    width: 34px;

    height: 34px;

    font-size: 24px;
  }


  .lightbox {
    padding: 10px;
  }


  .lightbox-img {
    max-width: 92vw;

    max-height: 68vh;
  }


  .lightbox-caption {
    max-width: 90vw;

    font-size: 14px;
  }


  .carousel {
    width: 92vw;

    margin-top: 10px;

    scrollbar-width: none;
  }


  .carousel::-webkit-scrollbar {
    display: none;
  }


  .carousel-thumb {
    width: 65px;

    height: 50px;

    flex-basis: 65px;
  }


  .nav {
    width: 34px;

    height: 34px;

    font-size: 20px;
  }


  .prev {
    left: 8px;
  }


  .next {
    right: 8px;
  }


  .close {
    top: 10px;

    right: 10px;

    width: 34px;

    height: 34px;
  }

}


/* =================================
   VERY SMALL MOBILE
================================= */

@media (max-width: 400px) {

  .thumb {
    width: 82vw;

    flex-basis: 82vw;
  }


  .lightbox-img {
    max-width: 88vw;

    max-height: 62vh;
  }


  .nav {
    top: auto;

    bottom: 85px;
  }

}


button {
  padding: 0 !important;
}

</style>
