<template>
    <div class="mb-4 w-1/2 h-10 border border-gray-300 rounded-md flex justify-center items-center">第{{ props.item }}个元素
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    item: number
}>()
</script>

<style scoped></style>