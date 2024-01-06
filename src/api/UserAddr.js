import request from '@/utils/request'
// test comment
export function getAddrListUnCommon(userId) {
    return request({
        url: `/userAddr/uncommon/${userId}`,
        method: 'get'
    })
}
export function getAddrListCommon(userId) {
    return request({
        url:`/userAddr/common/${userId}`,
        method:'get'
    })
}
export function addAddr(userAddr){
    return request({
        url:`/userAddr/add`,
        method:'post',
        data:userAddr
    })
}
