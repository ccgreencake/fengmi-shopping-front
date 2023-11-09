<template>
    <div>
        <order-info v-for="od in orders" :key="od.no" :od="od"></order-info>
    </div>
</template>

<script>
import OrderInfo from '@/components/OrderInfo'

export default {
  components: { OrderInfo },
    data: () => ({
        orders: [
            {
                createTime: '2022-12-12 13:12:45',
                orderId: '217727683200',
                items: [
                    {
                        productImg: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                        productName: '旺旺虾条',
                        buyCounts: 2,
                        receiverName: '张三',
                        totalAmount: 99.0,
                        payType: 1,
                        status: 1,
                        isComment: true
                    }
                ]
            }
        ]
    })
}
</script>

<style>

</style>