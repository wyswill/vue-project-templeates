/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const cutpriceRouter = {
  path: '/cutprice',
  component: Layout,
  name: 'cutprice',
  meta: {
    title: '砍价管理',
    icon: 'component'
  },
  children: [
    {
      path: 'bargain',
      component: () => import('@/views/cutprice/bargain'),
      name: 'bargain',
      meta: { title: '砍价记录' }
    },
    {
      path: 'bargaindetails',
      component: () => import('@/views/cutprice/bargaindetails'),
      name: 'bargaindetails',
      meta: { title: '查看详细' },
      hidden: true
    }
  ]
}
export default cutpriceRouter
