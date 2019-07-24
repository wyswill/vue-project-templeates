/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/views/layout/Layout";

const cutpriceRouter = {
  path: "/cutprice",
  component: Layout,
  name: "cutprice",
  meta: {
    title: "list3",
    icon: "component"
  },
  children: [
    {
      path: "bargain",
      component: () => import("@/views/cutprice/item"),
      name: "bargain",
      meta: { title: "item" }
    },
    {
      path: "bargain",
      component: () => import("@/views/cutprice/item"),
      name: "bargain",
      meta: { title: "item" }
    }
  ]
};
export default cutpriceRouter;
