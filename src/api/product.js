import request from '@/utils/request'
// test comment
export function getProductList() {
  return request({
    url: `/products/introduce`,
    method: 'get'
  })
}
