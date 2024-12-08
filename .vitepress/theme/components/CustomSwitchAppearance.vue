<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

import VPIconMoon from 'vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue'
import VPIconSun from 'vitepress/dist/client/theme-default/components/icons/VPIconSun.vue'

const { isDark } = useData()

const toggleAppearance = inject('toggle-appearance', () => {
  isDark.value = !isDark.value
})

const supportsViewTransition = ref(false)

onMounted(() => {
  supportsViewTransition.value = 'startViewTransition' in document
  && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
})
</script>

<template>
  <button
    type="button"
    role="switch"
    title="Přepnout motiv"
    class="CustomSwitchAppearance"
    :aria-checked="isDark"
    :data-view-transition="supportsViewTransition"
    @click="toggleAppearance"
  >
    <ClientOnly>
      <Transition name="fade" mode="out-in">
        <VPIconSun v-if="!isDark" class="sun" />
        <VPIconMoon v-else class="moon" />
      </Transition>
    </ClientOnly>
  </button>
</template>

<style scoped>
.CustomSwitchAppearance {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 width: 36px;
	 height: 36px;
	 color: var(--vp-c-text-2);
	 transition: color 0.5s;
}
 .CustomSwitchAppearance:hover {
	 color: var(--vp-c-text-1);
	 transition: color 0.25s;
}
 .CustomSwitchAppearance > :deep(svg) {
	 width: 20px;
	 height: 20px;
	 fill: currentColor;
}
 .CustomSwitchAppearance[data-view-transition="false"] .fade-enter-active, .CustomSwitchAppearance[data-view-transition="false"] .fade-leave-active {
	 transition: opacity 0.1s ease;
}
 .CustomSwitchAppearance[data-view-transition="false"] .fade-enter-from, .CustomSwitchAppearance[data-view-transition="false"] .fade-leave-to {
	 opacity: 0;
}
 
</style>
