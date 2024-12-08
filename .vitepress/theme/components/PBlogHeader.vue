<script setup lang="ts">
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
    <header>
        <h1><slot /></h1>
        <div class="date">
            <PDateString :value="frontmatter.date" />
        </div>
    </header>
</template>

<style scoped>
.date {
    margin: 16px 0;
    font-style: italic;
    color: var(--vp-c-text-2);
}
</style>