// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/base/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/Index.vue'),
        },
        {
          path: 'services',
          name: 'Services',
          component: () => import('@/views/services/Index.vue'),
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: () => import('@/views/portfolio/Index.vue'),
        },
        {
          path: 'project/:id',
          name: 'ProjectDetail',
          props: true,
          component: () => import('@/views/portfolio/Detail.vue'),
        },
        {
          path: 'blog',
          name: 'Blog',
          component: () => import('@/views/blog/Index.vue'),
        },
        {
          path: 'comentarios',
          name: 'Comentarios',
          component: () => import('@/views/comentarios/Index.vue'),
        },
        {
          path: 'sink',
          name: 'Sink',
          component: () => import('@/views/sink/Index.vue'),
        },
        {
          path: '*',
          name: 'NotFound',
          component: () => import('@/views/not-found/Index.vue'),
        },
      ],
    },
  ],
})

export default router
