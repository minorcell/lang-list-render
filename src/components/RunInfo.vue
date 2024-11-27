<template>
    <div class="flex flex-col items-start gap-4 fixed right-8 top-24 bg-white p-4 rounded-md shadow-md w-96">
        <div class="flex w-full justify-between items-center">
            <button @click="renderSetTimeout" class="bg-slate-500 text-white px-4 py-2 rounded-md">
                定时器渲染/异步
            </button>
            <button @click="renderInFrame" class="bg-slate-500 text-white px-4 py-2 rounded-md">
                帧内渲染/同步
            </button>
        </div>
        <h1 class="text-lg font-bold">运行信息</h1>
        <span>开始时间: {{ props?.startTime }}</span>
        <span>数据生成时间: {{ props?.productTime }}</span>
        <span>数据生成耗时: {{ props?.productTime - props?.startTime }}ms</span>
        <span>数据渲染完成时间: {{ props?.renderTime }}</span>
        <span>数据渲染耗时: {{ props?.renderTime - props?.productTime }}ms</span>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
    startTime: number /* 开始时间 */
    productTime: number /* 数据生成时间 */
    renderTime: number /* 数据渲染完成时间 */
}>()

const emit = defineEmits<{
    (event: 'render-setTimeout'): void /* 使用setTimeout模拟异步渲染 */
    (event: 'render-inFrame'): void /* 帧内渲染 */
}>()

const renderSetTimeout = () => {
    emit('render-setTimeout')
}

const renderInFrame = () => {
    emit('render-inFrame')
}
</script>