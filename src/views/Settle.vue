<template>
    <div>
        <Header></Header>
        <common-header>
            <template v-slot:title>
                结算页
            </template>
        </common-header>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="16" :offset="4">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span style="font-size: 17px; font-weight: 700;">收货人地址</span>
                        <el-button 
                            style="float: right; padding: 3px 0" 
                            @click="showEditDialog"
                            type="text">新增收货地址</el-button>
                    </div>
                    <div style="font-size: 14px;">
                        <div class="address-info" v-for="(CommonAddr,index) in CommonAddrs" :key="index">
                            <span class="mr10">{{CommonAddr.receiverName}}</span>
                            <span class="mr10">{{CommonAddr.province}}省{{CommonAddr.city}}市{{CommonAddr.area}}{{CommonAddr.addr}}</span>
                            <span>{{ CommonAddr.receiverMobile }}</span>
                            <el-button type="text" class="edit-btn">编辑</el-button>
                            <span type="info" class="default-address mr10">默认</span>
                        </div>
                        <el-button @click="showMore = false" v-if="showMore" type="text">
                            展示更多
                            <i class="fa fa-angle-double-down"></i>
                        </el-button>
                        <div v-if="!showMore" >
                            <div class="address-info" v-for="(UnCommonAddr,index) in UnCommonAddrs" :key="index">
                                <span class="mr10">{{UnCommonAddr.receiverName}}</span>
                                <span class="mr10">{{UnCommonAddr.province}}省{{UnCommonAddr.city}}市{{UnCommonAddr.area}}{{UnCommonAddr.addr}}</span>
                                <span>{{ UnCommonAddr.receiverMobile }}</span>
                                <el-button type="text" class="edit-btn">编辑</el-button>
                            </div>
                        </div>
                        <el-button @click="showMore = true" v-if="!showMore" type="text">
                            收起地址
                            <i class="fa fa-angle-double-up"></i>
                        </el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-col :span="16" :offset="4">
            <el-table :data="carts" style="width: 100%">
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
                <el-table-column label="单价" prop="productSku.sellPrice" width="120"></el-table-column>
                <el-table-column label="数量" prop="cartNum">
                </el-table-column>
                <el-table-column label="小计">
                <template slot-scope="scope">
                    <span style="font-weight: 600">
                            ￥{{scope.row.productPrice}}
                    </span> 
                    </template> 
                </el-table-column>
            </el-table>
            <el-card class="settle-info">
                <div>
                    <p class="tr">
                        <span class="info">{{carts.length}}</span> 件商品, 应付总额:
                        <span class="info">{{totalPrice}}</span></p>
                    <br>
                    <p class="tr">
                        寄送至： 湖北武汉市江夏区金融港B18栋 收货人：张三 13078909888
                    </p>
                </div>
            </el-card>
            <router-link to="/my-order">
                 <el-button type="danger" style="float: right;" @click="addOrder">提交订单</el-button>
            </router-link>
        </el-col>
        <edit-address ref="editDialog"></edit-address>
        
    </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import Header from '@/components/Index/Header'
import EditAddress from '@/components/Settle/EditAddress'
import {getAddrListUnCommon,getAddrListCommon} from '@/api/UserAddr'

export default {
    components: {
        CommonHeader,
        Header,
        EditAddress,
    },
    data: () => ({
      showMore: true,
      carts: [],
      userId: '',
      totalPrice: 0,
      UnCommonAddrs:[],
      CommonAddrs:[]
    }),
    methods: {
        showEditDialog() {
            this.$refs.editDialog.showEditDialog = true
        },
        addOrder:function(){
            this.$router.push({
                path:'/my-order'
            })
        },
        getAddrListUnCommon:function (){
            getAddrListUnCommon(this.userId).then(response => {
                this.UnCommonAddrs = response.data;
                window.console.log(this.UnCommonAddrs);
            })
        },
        getAddrListCommon:function (){
            getAddrListCommon(this.userId).then(response => {
                this.CommonAddrs = response.data;
                window.console.log(this.CommonAddrs);
            })
        }
    },

    mounted:function () {
        this.carts = JSON.parse(sessionStorage.getItem("shoppingCartSettle"));
        this.userId =  this.$route.query.userId;
        //计算订单总金额
        for(var i = 0 ; i < this.carts.length;i++){
          this.totalPrice += this.carts[i].productPrice;
        }
        this.getAddrListUnCommon();
        this.getAddrListCommon();
      }
}
</script>

<style scoped>
    .default-address {
        background-color: #e3e3e3;
        padding: 3px 5px;
        float: right;
        position: relative;
        top: -2px;
    }
    .mr10 {
        margin-right: 10px;
    }
    .address-info {
        margin-bottom: 10px;
    }
    .edit-btn {
        float: right !important; 
        padding: 0;
    }
    .item {
        display: flex;
    }
    .item .item-pic {
        width: 60px;
        height: 60px;
    }
    .tr {
        text-align: right;
    }
    .item .item-title {
        padding-left: 8px; 
        width: 180px;
    }
    .settle-info {
        margin: 10px 0;
        font-size: 14px;
    }
    .settle-info .info {
        color: #F56C6C; 
        font-weight: 700;
        font-size: 15px;
    }
</style>