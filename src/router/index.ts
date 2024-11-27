import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'originalcode',
      component: () => import('../views/OriginalCode.vue'),
      meta: {
        title: '原生代码',
        icon: 'code',
      },
    },
    {
      path: '/timeslice',
      name: 'timeslice',
      component: () => import('../views/TimeSlice.vue'),
      meta: {
        title: '时间切片',
        icon: 'time',
      },
    },
    {
      path: '/virtuallist',
      name: 'virtuallist',
      component: () => import('../views/VirtualList.vue'),
      meta: {
        title: '虚拟列表',
        icon: 'list',
      },
    },
  ],
})

export default router
