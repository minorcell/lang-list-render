<template>
  <header class="fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-md bg-white">
    <h1 class="text-2xl font-bold">长列表渲染性能优化台</h1>
    <nav class="flex gap-8 w-1/2 items-center">
      <RouterLink active-class="text-blue-500" to="/" class="text-lg">直接渲染</RouterLink>
      <RouterLink active-class="text-blue-500" to="/timeslice" class="text-lg">时间切片</RouterLink>
      <RouterLink active-class="text-blue-500" to="/virtuallist" class="text-lg">虚拟列表</RouterLink>
    </nav>
  </header>
  <RouterView class="pt-16" />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
