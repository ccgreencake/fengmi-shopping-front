<template>
    <div>
        <Header></Header>
        <common-header>
            <template v-slot:title>
                我的购物车
            </template>
        </common-header>
        <el-divider></el-divider>
        <div>
            <el-row>
                <el-col :span="18" :offset="3">
                    <span class="all-goods">全部商品: {{carts.length}}</span>
                </el-col>
                <el-col :span="18" :offset="3">
                    <el-table
                        :data="carts"
                        style="width: 100%"
                        @selection-change="handleSelectionChange"
                    >
                        <el-table-column
                            width="80"
                            type="selection"
                            @selection-change="handleSelectionChange"
                            label="全选">
                        </el-table-column>
                        <el-table-column label="商品">
                            <template slot-scope="scope">
                                <div class="item">
                                    <el-image class="item-pic" :src="'http://localhost:8080/img/'+scope.row.productImg.url"></el-image>
                                    <p class="item-title">
                                        {{scope.row.productSku.skuName}}
                                    </p>
                                </div> 
                            </template>
                        </el-table-column>
                        <el-table-column label="规格">
                          <template slot-scope="scope">
                              <span style="font-weight: 600">
                                      {{scope.row.skuProps}}
                              </span>
                          </template>
                        </el-table-column>
                        <el-table-column label="单价" prop="productSku.sellPrice" width="80"></el-table-column>
                        <el-table-column label="数量" prop="cartNum" width="80"></el-table-column>
                        <el-table-column label="小计" width="80">
                        <template slot-scope="scope">
                            <span style="font-weight: 600">
                                    ￥{{scope.row.productPrice}}
                            </span> 
                            </template> 
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" @click="deleteShoppingCart(scope.row.cartId)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-card style="margin-top: 10px;">
                        <div>
                            <el-button type="text" style="margin-left: 10px;" @click="deleteShoppingCartBySelect()">删除选中的商品</el-button>
                            <el-button type="danger" style="float: right;" @click="toSettle">去结算</el-button>
                          <p style="float: right; margin-right: 10px;">
                                已选择 <span style="color: #e2231a; font-weight: 600;">{{selectShopping.length}}</span> 件商品
                                总价: <span style="color: #e2231a; font-weight: 600;">￥{{ totalPrice }}</span>
                            </p>
                        </div>
                    </el-card>
                </el-col>
            </el-row> 
        </div> 
    </div>
</template>

<script>
import CommonHeader from '../components/CommonHeader.vue'
import Header from '@/components/Index/Header'
import {addShoppingCart,getShoppingCartByUserId,deleteShoppingCart,deleteShoppingCartBySelect} from '@/api/MyShoppingCart'
export default {
    components: {
        CommonHeader,
        Header
    },
    data: () => ({
        checkAll: false,
        carts: [],
      shoppingCart: [],
      userId: '',
      selectShopping: [],
      totalPrice: 0,
    }),
    methods: {
        toSettle() {
          if (this.selectShopping.length) {
            sessionStorage.setItem("shoppingCartSettle", JSON.stringify(this.selectShopping));
            this.$router.push({
              path: "/settle",
              query: {
                userId: this.userId
              }
            });
          }else{
            this.$message.error("至少选择一件商品");
          }
        },
        // 勾选某件商品val
        handleSelectionChange(val) {
            this.selectShopping = val;
            window.console.log(val);
            window.console.log("id:"+this.selectShopping)
            this.checkPrice();
        },
        checkPrice(){
          this.totalPrice = 0;
          for (let i = 0 ; i < this.selectShopping.length ; i++) {
            this.totalPrice += this.selectShopping[i].productPrice;
          }
        },
        // 删除勾选商品
        deleteShoppingCartBySelect(){
          if(this.selectShopping.length){
            deleteShoppingCartBySelect(this.selectShopping).then(res =>{
              if(res.code == 200){
                this.$message.success(res.msg);
                this.getShoppingCart();
              }
            })
          }else{
            this.$message.error("至少选择一件商品");
          }


        },
        addShoppingCart:function(){
          let _this = this;
          addShoppingCart(this.shoppingCart).then(response => {
            window.console.log(response.msg)
            localStorage.removeItem("shoppingCart");
            _this.getShoppingCart();
          })
        },
        getShoppingCart:function(){
          getShoppingCartByUserId(this.userId).then(response => {
            // window.console.log(response.data)
            this.carts = response.data;
            window.console.log(this.carts)
          })
        },
        deleteShoppingCart(cartId){
          // window.console.log(cartId)
          deleteShoppingCart(cartId).then(response => {
            window.console.log(response.msg)
            this.getShoppingCart();
          })
        }
    },
  mounted:function (){
      this.shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
      this.userId = localStorage.getItem("userId");
      if(this.shoppingCart ) {
        this.addShoppingCart();
      }else {
        this.getShoppingCart();
      }
  }
}
</script>

<style scoped>
    .item {
        display: flex;
    }
    .item .item-pic {
        width: 60px;
        height: 60px;
    }
   
    .item .item-title {
        padding-left: 8px; 
        width: 180px;
    }
    .settle-panel {
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 1000;
    }
     .settle-panel .checkall-btn {
         position:absolute;
         top: 8px;
     }
    .settle-panel .del-all {
        position:absolute;
        left: 70px;
        top: 10px;
    }
    .settle-panel .settle-btn {
        position:absolute;
        top: -5px;
        right: 100px;
    }
    .all-goods {
        color: #F56C6C; 
        font-weight: 600; 
        font-size: 18px;
    }
</style>