<script setup lang="ts">
import { withBase } from "vitepress";

defineProps<{
  src: string,
  title?: string
}>();
</script>

<template>
  <div class="figure">
    <video controls>
      <source :src="withBase(src)">
    </video>
    <div v-if="title" class="title">{{ title }}</div>
  </div>
</template>

<style scoped>
.figure {
  margin: 0 auto;
}

.title {
  font-size: 0.9em;
  text-align: center;
  margin-top: 4px;
  color: var(--vp-c-text-2);
}
</style>
