<script setup lang="ts">
defineProps<{
    members: { name: string, role: string, url?: string }[]
}>();
</script>

<template>
    <div class="members">
        <div v-for="member in members" :key="member.name || member.role" class="member">
            <div class="name">
                <a v-if="member.url" :href="member.url" target="_blank" rel="noopener noreferrer">
                    <span v-html="member.name"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="icon"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"/></svg>
                </a>
                <span v-else v-html="member.name"></span>
            </div>
            <div class="role">{{ member.role }}</div>
        </div>
    </div>
</template>



<style scoped>
.members {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
}

.member {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px;
    height: 80px;
    width: 160px;
    background: var(--vp-c-bg-soft);
    border-radius: 8px;
}

.name {
    text-align: center;
    font-weight: 600;
    display: flex;
    align-items: center; /* Zarovnání ikony a textu vertikálně */
    justify-content: center; /* Centrování textu a ikony horizontálně */
}

.name a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center; /* Zarovnání ikony a textu vertikálně */
}
.name a:hover {
    color: var(--el-color-custom);
}

.icon {
    margin-left: 2px; /* Mezery mezi textem a ikonou */
    width: 16px; /* Šířka ikony */
    height: 16px; /* Výška ikony */
    color: var(--vp-c-text-2); /* Barva ikony */
    bottom: 6px;
    position: relative;
}

.role {
    text-align: center;
    font-size: 0.875em;
    color: var(--vp-c-text-2);
}

</style>
