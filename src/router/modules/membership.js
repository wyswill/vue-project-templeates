/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/views/layout/Layout";

const memberRouter = {
  path: "/membership",
  component: Layout,
  name: "membership",
  meta: {
    title: "list2",
    icon: "component"
  },
  children: [
    {
      path: "generalMember",
      component: () => import("@/views/membership/item"),
      name: "generalMember",
      meta: { title: "item1" }
    },
    {
      path: "generalMember",
      component: () => import("@/views/membership/item"),
      name: "generalMember",
      meta: { title: "item2" }
    },
    {
      path: "generalMember",
      component: () => import("@/views/membership/item"),
      name: "generalMember",
      meta: { title: "item3" }
    },
    {
      path: "generalMember",
      component: () => import("@/views/membership/item"),
      name: "generalMember",
      meta: { title: "item4" }
    },
  ]
};

export default memberRouter;
