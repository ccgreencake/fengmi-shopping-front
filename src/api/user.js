import request from '@/utils/request'
// test comment
export function login(users) {
    return request({
        url: `/users/login`,
        method: 'post',
        data:users
    })
}