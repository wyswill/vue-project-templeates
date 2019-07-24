import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/views/layout/Layout";
import webmanager from "./modules/webmanager";
import membership from "./modules/membership";

import cutprice from "./modules/cutprice";
export const constantRouterMap = [
  // 首页
  {
    path: "/",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "/index",
        component: () => import("@/views/index"),
        name: "index",
        meta: {
          title: "首页",
          icon: "people",
          noCache: true
        }
      }
    ]
  },

  { ...webmanager },
  { ...membership },
  { ...cutprice },
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path*",
        component: () => import("@/views/redirect/index")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/login/authredirect"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/errorPage/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/views/errorPage/401"),
    hidden: true
  }
];

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [{ path: "*", redirect: "/404", hidden: true }];
