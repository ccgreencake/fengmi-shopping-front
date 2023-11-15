<template>
    <div>
        <Header></Header>
        <search-bar></search-bar>
        <el-divider></el-divider>
        <div style="text-align: center">
            <el-row type="flex" style="margin-top: 15px;">
                <el-col class="goods-show" :offset="3" :span="18">
                    <el-card :body-style="style" v-for="(product,index) in productList" :key="index">
<!--                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
                      <el-image :src="'http://localhost:8080/img/'+product.productImgList[0].url" style="height: 200px"></el-image>
                        <div style="padding:14px;">
                            <span>{{product.productName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>累计销量：{{product.soldNum}}</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ product.createTime }}</time>
                                <el-button type="text" size="small" @click="toDetail(product.productId)">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-sizes="[4, 8, 12, 16]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
          </el-pagination>
        </div>
         <el-divider></el-divider>
          <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Index/Header'
    import SearchBar from '@/components/Index/SearchBar'
    import Footer from '@/components/Index/Footer'
    import { getProductByCategory } from '@/api/product'

    export default {
       components: {
        Header,
        SearchBar,
        Footer
      },
      data(){
        return{
            productList:[],
            categoryId:'',
            total: 0,
            pageNum: 1,
            pageSize: 4
        }
      },
      methods:{
        toDetail:function(productId){
            this.$router.push({
              path: '/detail',
              query: {
                productId
              }
            })
        },
        getProduct(categoryId,pageNum,pageSize){
            let _this = this;
            getProductByCategory(categoryId,pageNum,pageSize).then(response => {
                window.console.log(response.data);
              _this.productList = response.data.records
              _this.total = response.data.total
              _this.pageNum = response.data.current
              _this.pageSize = response.data.size
            })
        },
        handleSizeChange(val) {
          this.getProduct(this.categoryId,this.pageNum, val)
        },
        handleCurrentChange(val) {
          this.getProduct(this.categoryId,val, this.pageSize)
        }
      },
      mounted:function (){
        let categoryId = this.$route.query.categoryId;
        this.categoryId = categoryId;
        // eslint-disable-next-line no-console
        // console.log(this.categoryId)
        this.getProduct(this.categoryId,this.pageNum,this.pageSize)
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