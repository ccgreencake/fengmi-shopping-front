import request from '@/utils/request'
// test comment
export function getList() {
  return request({
    url: `/categories`,
    method: 'get'
  })
}
