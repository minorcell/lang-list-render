<template>
    <div>原生代码</div>
    <RunInfo :start-time="startTime" :product-time="productTime" @start-render="startRender"
        :render-time="renderTime" />
    <div class="flex flex-col w-full items-center">
        <DataItem v-for="item in data" :key="item" :item="item" />
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

import DataItem from '../components/DataItem.vue'
import RunInfo from '../components/RunInfo.vue'

const data = ref<number[]>([])
const startTime = ref<number>(0)
const productTime = ref<number>(0)
const renderTime = ref<number>(0)

const startRender = () => {
    startTime.value = Date.now()
    data.value = Array.from({ length: 100000 }, (_, index) => index)
    productTime.value = Date.now()
    nextTick(() => {
        renderTime.value = Date.now()
    })
}
</script>