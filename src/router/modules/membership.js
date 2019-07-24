/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const memberRouter = {
  path: '/membership',
  component: Layout,
  name: 'membership',
  meta: {
    title: '会员管理',
    icon: 'component'
  },
  children: [
    {
      path: 'generalMember',
      component: () => import('@/views/membership/generalMember'),
      name: 'generalMember',
      meta: { title: '普通会员' }
    },
    {
      path: 'vipMember',
      component: () => import('@/views/membership/vipMember'),
      name: 'vipMember',
      meta: { title: 'vip会员' }
    },
    {
      path: 'memberGiftBag',
      component: () => import('@/views/membership/memberGiftBag'),
      name: 'memberGiftBag',
      meta: { title: '会员礼包' }
    },
    {
      path: 'memberRecords',
      component: () => import('@/views/membership/memberRecords'),
      name: 'memberRecords',
      meta: { title: '会员办理记录' }
    },
    {
      path: '/addNewCard',
      component: () => import('@/views/membership/addNewCard'),
      name: 'addNewCard',
      hidden: true,
      meta: { title: '新增会员' }
    },
    {
      path: '/addNewVipCard',
      component: () => import('@/views/membership/addNewVipCard'),
      name: 'addNewVipCard',
      hidden: true,
      meta: { title: '编辑vip会员' }
    }

  ]
}

export default memberRouter
