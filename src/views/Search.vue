<template>
    <div>
        <Header></Header>
        <search-bar></search-bar>
        <el-divider></el-divider>
        <div>
            <el-row type="flex" style="margin-top: 15px;">
                <el-col class="goods-show" :offset="3" :span="18">
                    <el-card :body-style="style" v-for="(product,index) in productList" :key="index">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image">
                        <div style="padding: 8px 14px;">
                            <span>{{product.productName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>累计销量：{{product.soldNum}}</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ product.createTime }}</time>
                                <el-button type="text" size="small" @click="toDetail">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
         <el-divider></el-divider>
          <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Index/Header'
    import SearchBar from '@/components/Index/SearchBar'
    import Footer from '@/components/Index/Footer'

    export default {
       components: {
        Header,
        SearchBar,
        Footer
      },
      data(){
        return{
            productList:[
                {
                    productId:1,
                    productName:'奥利奥小饼干666' ,
                    soldNum:198,
                    content:'好吃好吃!!!',
                    createTime:'2022-02-02'
                },
                 {
                    productId:1,
                    productName:'奥利奥小饼干666' ,
                    soldNum:198,
                    content:'好吃好吃!!!',
                    createTime:'2022-02-02'
                },
                 {
                    productId:1,
                    productName:'奥利奥小饼干666' ,
                    soldNum:198,
                    content:'好吃好吃!!!',
                    createTime:'2022-02-02'
                },
                 {
                    productId:1,
                    productName:'奥利奥小饼干666' ,
                    soldNum:198,
                    content:'好吃好吃!!!',
                    createTime:'2022-02-02'
                },
                 {
                    productId:1,
                    productName:'奥利奥小饼干666' ,
                    soldNum:198,
                    content:'好吃好吃!!!',
                    createTime:'2022-02-02'
                },
                 {
                    productId:1,
                    productName:'奥利奥小饼干666' ,
                    soldNum:198,
                    content:'好吃好吃!!!',
                    createTime:'2022-02-02'
                },
            ]
        }
      },
      methods:{
        toDetail:function(){
            this.$router.push('/detail')
        }
      }
    }
</script>

<style scoped>
    .el-card {
        height: 320px;
    }
    .goods-show {
        display: flex;
        gap: 10px;
        flex-flow: row wrap;
    }
</style>