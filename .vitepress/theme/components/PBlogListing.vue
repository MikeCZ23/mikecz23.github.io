<script setup lang="ts">
import { withBase } from "vitepress";
import { data as posts } from "../composables/posts.data.js"
</script>

<template>
  <ul class="list">
    <li v-for="post in posts" class="item">
        <span class="date">{{ post.date }}</span>
        <a :href="withBase(post.url)">{{post.title }}</a>
    </li>
  </ul>
</template>

<style scoped>
.list {
    list-style-type: none;
    margin-top: 32px;
}
.item {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
}
.date {
    margin-left: 16px;
    font-style: italic;
    color: var(--vp-c-text-2);
    font-size: 0.9em;
    width: 8em;
}
</style>