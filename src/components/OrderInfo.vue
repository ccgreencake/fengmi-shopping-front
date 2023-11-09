<template>
    <!-- 每笔订单的信息 -->
    <el-card style="margin-bottom: 10px;">
        <div slot="header" class="clearfix">
            <span>
                 <span>
                    订单时间: <span style="font-weight: 600;padding-left: 5px;"> {{od.createTime}}</span>
                </span>
               
                <span style="padding-left: 30px;">
                    订单号: <span style="font-weight: 600;padding-left: 5px;">{{od.orderId}}</span>
                </span>
            </span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="delOrderById(od.orderId)">删除订单
            </el-button>
        </div>
        <div>
            <el-table :show-header="false" :data="od.items" border style="width: 100%">
                <el-table-column>
                    <template slot-scope="scope">
                        <div class="item">
                            <img class="item-pic" src="@/img/mmxt_1.png" />
                            <p class="item-title">
                                {{scope.row.productName}}
                            </p>
                            <p class="item-num">
                                X{{scope.row.buyCounts}}
                            </p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center">
                    <template slot-scope="scope">
                       {{scope.row.receiverName}}
                        <br>
                        <i class="fa fa-user" style="color: #e3e3e3; font-size: 22px;"></i>
                    </template>
                </el-table-column>
                <el-table-column align="center">
                    <template slot-scope="scope">
                        <!-- ￥{{scope.row.num * scope.row.price}} -->
                        ￥{{scope.row.totalAmount}}
                        <div v-if="scope.row.status != '6'">
                            <el-divider style="margin: 12px 0;"></el-divider>
                            <!-- {{scope.row.payType}} -->
                            <span v-if="scope.row.payType == 1">微信支付</span>
                            <span v-if="scope.row.payType == 2">支付宝支付</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="status">
                    <!-- 订单状态 -->
                    <template slot-scope="scope">
                        <div v-if="scope.row.status == 1">
                            <span>待付款</span>
                        </div>
                        <div v-if="scope.row.status == 2">
                            <span>待发货</span>
                        </div>
                        <div v-if="scope.row.status == 3">
                            <span>待收货</span>
                        </div>
                        <div v-if="scope.row.status == 4">
                            <span>待评价</span>
                        </div>
                        <div v-if="scope.row.status == 5">
                            <span>已完成</span>
                        </div>
                        <div v-if="scope.row.status == 6">
                            <span>已关闭</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center">
                    <template slot-scope="scope">
                        <el-button type="danger" size="mini" v-if="scope.row.status == 1"
                            @click="toPay(scope.row.orderId)">去付款</el-button>
                        <el-button size="mini" v-if="scope.row.status == 2" @click="tellShangJia(scope.row.orderId)">联系商家发货</el-button>
                        <el-button type="primary" size="mini" v-if="scope.row.status == 3" @click="toShouHuo(scope.row.orderId)">确认已收货</el-button>
                        <el-button type="warning" size="mini" v-if="scope.row.status == 4" @click="onceAgain()">马上去评价</el-button>
                        <el-button type="success" size="mini" v-if="scope.row.status == 5 || scope.row.status == 6" @click="buyAgain()">再来一单
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </el-card>
</template>

<script>
    export default {
        props: ['od'],
        methods: {
            //删除订单
            
            //支付接口
            toPay:function(){
                this.$router.push({
                    'path':'/orderPay'
                })
            },
            //联系商家发货
            tellShangJia(){
                this.$message({
                    type: 'success',
                    message: '正在发货中，请耐心等待~'
                })
                
            },
            //再来一单
            onceAgain(){
                this.$message({
                    type: 'warning',
                    message: '功能开发中~~~'
                })
            },
            
            //再来一单
            buyAgain(){
                this.$router.push("/my-cart")
            }
        }
    }
</script>

<style scoped>
    .item {
        display: flex;
        align-items: center;
    }

    .item .item-pic {
        width: 60px;
        height: 60px;
    }

    .item .item-title {
        padding-left: 8px;
        width: 180px;
    }

    .item .item-num {
        text-align: right;
        flex: 1;
        padding-right: 20px;
        color: #afacac;
    }

    /deep/.el-divider--horizontal {
        margin: 12px 0;
    }
</style>