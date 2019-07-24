import Layout from '@/views/layout/Layout'

const ordersRouter = {
  path: '/orders',
  component: Layout,
  name: 'orders',
  meta: {
    title: '订单管理',
    icon: 'table'
  },
  children: [
    {
      path: 'mallOrders',
      component: () => import('@/views/orders/mallOrders/mallOrders'),
      name: 'mallOrders',
      meta: { title: '商城订单' }
    },  
    {
      path: 'teaOrders',
      component: () => import('@/views/orders/teaOrders/teaOrders'),
      name: 'teaOrders',
      meta: { title: '茶几订单' }
    },
    {
      path: 'mallOrdersDetail',
      component: () => import('@/views/orders/mallOrders/mallOrdersDetail'),
      name: 'mallOrdersDetail',
      meta: { title: '商城订单详情' },
      hidden: true 
    },  
  ]
}
export default ordersRouter