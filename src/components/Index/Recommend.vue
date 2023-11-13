<template>
    <el-row type="flex" style="margin-top: 15px;">
       <el-col class="goods-show" :offset="3" :span="18" v-for="(product,index) in products" :key="index">
            <el-card :body-style="style">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>{{ product.productName }}</span>
                    <div class="bottom clearfix">
                        <time class="time">2021-10-31</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
       </el-col>
    </el-row>
</template>

<script>
import { getProductList } from '@/api/product'
export default {
    data: () => ({
        currentDate: '2012-12-12',
        style: { padding: '0px', width: '213px' },
        products:[]
    }),
    methods:{
       getProduct(){
         let _this = this;
         getProductList().then(response => {
             window.console.log(response);
             _this.products = response.data;
         })
       }
    },
    mounted: function() {
        this.getProduct();
    }
}
</script>

<style scoped>
    /deep/.el-card {
        height: 296px;
    }
    .goods-show {
        display: flex;
        gap: 10px;
        flex-flow: row wrap;
    }
</style>