/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const advertiserRouter = {
  path: '/advertiser',
  component: Layout,
  name: 'advertiser',
  meta: {
    title: '广告商管理',
    icon: 'component'
  },
  children: [
    {
      path: '/advertisingNorms',
      component: () => import('@/views/advertiser/advertisingNorms'),
      name: 'advertisingNorms',
      meta: { title: '广告规范' }
    },  
    {
      path: '/addAdvertisingNorms',
      component: () => import('@/views/advertiser/addAdvertisingNorms'),
      name: 'addAdvertisingNorms',
      hidden: true,
      meta: { title: '编辑vip会员' }
    }

  ]
}

export default advertiserRouter
