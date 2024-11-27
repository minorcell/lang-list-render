<template>
    <div>时间切片</div>
    <RunInfo :start-time="startTime" :product-time="productTime" :render-time="renderTime"
        @render-setTimeout="renderSetTimeout" @render-inFrame="renderInFrame" />
    <div class="flex flex-col w-full items-center">
        <DataItem v-for="item in data" :key="item.index" :item="item.data" />
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

import DataItem from '../components/DataItem.vue'
import RunInfo from '../components/RunInfo.vue'

interface DataItem {
    data: number
    index: number
}

const data = ref<DataItem[]>([]) // 数据
const startTime = ref<number>(0) // 开始时间
const productTime = ref<number>(0) // 数据开始生成时刻
const renderTime = ref<number>(0) // 数据渲染完成时刻
const totalItems = 100000 // 总数据量 
const pageSize = 1000 // 每页长度  
const pageNum = 0 // 当前页码

const initData = () => {
    data.value = []
    startTime.value = 0
    productTime.value = 0
    renderTime.value = 0
}

/**
 * 数据生成函数 ： 每次生成pageSize条数据，直到curTotal <= 0。
 * @param curTotal 剩余数据量
 * @param currentIndex 当前页码
 */
const setTimeOutRender = (curTotal: number, currentIndex: number) => {
    if (curTotal <= 0) {
        productTime.value = Date.now()
        nextTick(() => {
            renderTime.value = Date.now()
        })
        return
    }

    setTimeout(() => {
        for (let i = 0; i < pageSize; i++) {
            data.value.push({
                data: currentIndex * pageSize + i,
                index: currentIndex * pageSize + i
            })
        }

        setTimeOutRender(curTotal - pageSize, currentIndex + 1)
    }, 0)
}

const renderSetTimeout = () => {
    initData()
    startTime.value = Date.now()
    setTimeOutRender(totalItems, pageNum)
}

/**
 * 帧内渲染函数 ： 使用requestAnimationFrame模拟同步渲染
 * @param curTotal 剩余数据量
 * @param currentIndex 当前页码
 */
const inFrameRender = (curTotal: number, currentIndex: number) => {
    if (curTotal <= 0) {
        productTime.value = Date.now()
        nextTick(() => {
            renderTime.value = Date.now()
        })
        return
    }

    window.requestAnimationFrame(() => {
        for (let i = 0; i < pageSize; i++) {
            data.value.push({
                data: currentIndex * pageSize + i,
                index: currentIndex * pageSize + i
            })
        }
        inFrameRender(curTotal - pageSize, currentIndex + 1)
    })
}

const renderInFrame = () => {
    initData()
    startTime.value = Date.now()
    inFrameRender(totalItems, pageNum)
}
</script>
