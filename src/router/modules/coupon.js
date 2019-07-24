/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const couponRouter = {
  path: '/couponManagement',
  component: Layout,
  name: 'couponManagement',
  meta: {
    title: '优惠券管理',
    icon: 'component'
  },
  children: [
    {
      path: 'couponManger',
      component: () => import('@/views/couponManagement/couponManger'),
      name: 'couponManger',
      meta: { title: '优惠券管理' }
    },
    {
      path: 'addCouponManger',
      component: () => import('@/views/couponManagement/addCouponManger'),
      name: 'addCouponManger',
      hidden: true,
      meta: { title: '编辑优惠券' }
    }

  ]
}

export default couponRouter
