import request from '@/utils/request'

export function getMallOrders(data) {
    return request({
      url: '/article/create',
      method: 'post',
      data
    })
  }