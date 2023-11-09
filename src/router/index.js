import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/Index')
        },
        {
            path: '/login',
            component: () => import('@/views/Login')
        },
        {
            path: '/reg',
            component: () => import('@/views/Register')
        },
        {
            path: '/my-order',
            component: () => import('@/views/MyOrder')
        },
        {
            path: '/my-cart',
            component: () => import('@/views/MyShoppingCart')
        },
        {
            path: '/settle',
            component: () => import('@/views/Settle')
        },
        {   //商品详情页
            path: '/detail',
            component: () => import('@/views/Detail.vue')
        },
        {
            path: '/orderPay',
            component: () => import('@/views/OrderPay.vue')
        },
        {
            path: '/search',
            component: () => import('@/views/Search.vue')
        },

    ]
})

export default router