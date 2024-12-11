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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path fill="currentColor" d="M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152z"></path></svg>
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
    color: var(--vp-c-text-3); /* Barva ikony */
    bottom: 6px;
    position: relative;
}

.role {
    text-align: center;
    font-size: 0.875em;
    color: var(--vp-c-text-2);
}

</style>
