import request from '@/utils/request'
// test comment
export function addShoppingCart(shoppingCart) {
    return request({
        url: `/shoppingCart`,
        method: 'post',
        data:shoppingCart
    })
}
export function getShoppingCartByUserId(userId) {
    return request({
        url:`/shoppingCart/${userId}`,
        method:'get'
    })
}
export function deleteShoppingCart(cartId) {
    return request({
        url:`/shoppingCart/${cartId}`,
        method:'delete'
    })
}
export function deleteShoppingCartBySelect(shoppingCarts) {
    return request({
        url:`/shoppingCart`,
        method:'delete',
        data:shoppingCarts
    })
}