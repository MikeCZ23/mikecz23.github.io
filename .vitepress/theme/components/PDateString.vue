<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    value: string
}>();

const string = computed(() => {
    const date = props.value;
    return date
        ? Intl.DateTimeFormat("cs").format(new Date(date))
        : "";
});
</script>

<template>
{{ string }}
</template>
