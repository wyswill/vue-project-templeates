/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const webmanageRouter = {
  path: '/webmanager',
  component: Layout,
  name: 'webmanager',
  meta: {
    title: '官网管理',
    icon: 'table'
  },
  children: [
    {
      path: 'information',
      component: () => import('@/views/webmanager/information'),
      name: 'information',
      meta: { title: '基本信息' }
    },
    {
      path: 'teaintroduce',
      component: () => import('@/views/webmanager/teaintroduce'),
      name: 'teaintroduce',
      meta: { title: '茶机介绍' }
    },
    {
      path: 'Advertiser',
      component: () => import('@/views/webmanager/Advertiser'),
      name: 'Advertiser',
      meta: { title: '广告商' }
    },
    {
      path: 'Partner',
      component: () => import('@/views/webmanager/Partner'),
      name: 'Partner',
      meta: { title: '合伙人' }
    },
    {
      path: 'appdownload',
      component: () => import('@/views/webmanager/appdownload'),
      name: 'appdownload',
      meta: { title: 'APP下载' }
    },
    {
      path: 'weixin',
      component: () => import('@/views/webmanager/weixin'),
      name: 'weixin',
      meta: { title: '公众号' }
    }
  ]
}
export default webmanageRouter
