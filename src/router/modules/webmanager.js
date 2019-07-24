/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/views/layout/Layout";

const webmanageRouter = {
  path: "/webmanager",
  component: Layout,
  name: "webmanager",
  meta: {
    title: "list",
    icon: "table"
  },
  children: [
    {
      path: "teaintroduce",
      component: () => import("@/views/webmanager/item"),
      name: "teaintroduce",
      meta: { title: "item1" }
    },
    {
      path: "teaintroduce",
      component: () => import("@/views/webmanager/item"),
      name: "teaintroduce",
      meta: { title: "item2" }
    },
    {
      path: "teaintroduce",
      component: () => import("@/views/webmanager/item"),
      name: "teaintroduce",
      meta: { title: "item3" }
    },
    {
      path: "teaintroduce",
      component: () => import("@/views/webmanager/item"),
      name: "teaintroduce",
      meta: { title: "item4" }
    },
    {
      path: "teaintroduce",
      component: () => import("@/views/webmanager/item"),
      name: "teaintroduce",
      meta: { title: "item5" }
    }
  ]
};
export default webmanageRouter;
