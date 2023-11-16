<template>
    <el-row type="flex" style="margin-top: 15px;">
       <el-col class="goods-show" :offset="3" :span="18" >
            <el-card :body-style="style" v-for="(product,index) in products" :key="index">
                <el-image :src="'http://localhost:8080/img/'+product.productImgList[0].url" style="height: 200px"></el-image>
<!--                <img src="'http://localhost:8080/img/'+product.productImgList[0].url" class="image">-->
                <div style="padding: 14px;">
                    <span>{{ product.productName }}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ product.updateTime }}</time>
                        <el-button type="text" class="button" @click="toDetail(product.productId)">操作按钮</el-button>
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
      toDetail:function(productId){
        this.$router.push({
          path: '/detail',
          query: {
            productId
          }
        })
      },
       getProduct(){
         let _this = this;
         getProductList().then(response => {
             window.console.log(response.data);
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