import request from '@/utils/request'
// test comment
export function getIndexImgList() {
  return request({
    url: `/indexImg`,
    method: 'get'
  })
}
