<template>
    <div>
       <Header></Header>
        <common-header>
            <template v-slot:title>
                我的购物车
            </template>
        </common-header>
        <el-divider></el-divider>
        <div class="pay">
            <el-card class="box-card" >
            <div slot="header" class="clearfix">
                <h3>请扫码支付</h3>
            </div>
            <div >
                <div style="display:flex; flex-direction:column;align-items: center;">
                    <span style="margin-bottom:30px;font-size:18px">订单将在<b style="color:red;font-size:20px">30分钟</b>后关闭</span>
                    <img src="@/img/pay.png" alt="" width="300px" height="300px">
                    <el-button type="danger" round style="width:160px;margin-top:30px">取消支付</el-button>
                </div>
            </div>
        </el-card>
        </div>

    </div>
</template>

<script>
import CommonHeader from '../components/CommonHeader.vue'
import Header from '@/components/Index/Header'
export default {
   components: {
        CommonHeader,
        Header
    },
}
</script>

<style scoped>
    .pay{
        width: 60%;
        margin: auto;
    }

</style>