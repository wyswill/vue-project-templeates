import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path     : '/user',
    name     : '用户',
    component: import('@/views/layout/layout.vue'),
    children : [
      {
        path     : 'aaa',
        name     : 'aaa',
        component: import('@/components/aaa.vue')
      }
    ]
  },
  {
    path     : '/bbb',
    name     : 'bbb',
    component: import('@/views/layout/layout.vue'),
    children : [
      {
        path     : 'bbb',
        name     : 'bbb',
        component: import('@/views/bbb.vue')
      }
    ]
  }
];

const router = createRouter({
                              history: createWebHistory(process.env.BASE_URL),
                              routes
                            });

export default router;
