import request from '@/utils/request'
// test comment
export function getProductList() {
  return request({
    url: `/products/introduce`,
    method: 'get'
  })
}
export function getProductByCategory(categoryId, pageNum, pageSize) {
  return request({
    url:`/products/category/${categoryId}/${pageNum}/${pageSize}`,
    method:'get'
  })
}
