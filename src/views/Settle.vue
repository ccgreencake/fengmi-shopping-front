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
                        <div class="address-info">
                            <span class="mr10">张三</span> 
                            <span class="mr10">湖北省武汉市江夏区金融港路 B18 栋</span>
                            <span>1300008876</span>
                            <el-button type="text" class="edit-btn">编辑</el-button>
                            <span type="info" class="default-address mr10">默认</span>
                        </div>
                        <el-button @click="showMore = false" v-if="showMore" type="text">
                            展示更多
                            <i class="fa fa-angle-double-down"></i>
                        </el-button>
                        <div v-if="!showMore">
                            <div class="address-info">
                                <span class="mr10">张三</span> 
                                <span class="mr10">湖北省武汉市江夏区金融港路 B18 栋</span>
                                <span>1300008876</span>
                                <el-button type="text" class="edit-btn">编辑</el-button>
                            </div>
                            <div class="address-info">
                                <span class="mr10">张三</span> 
                                <span class="mr10">湖北省武汉市江夏区金融港路 B18 栋</span>
                                <span>1300008876</span>
                                <el-button type="text" class="edit-btn">编辑</el-button>
                            </div>
                            <div class="address-info">
                                <span class="mr10">张三</span> 
                                <span class="mr10">湖北省武汉市江夏区金融港路 B18 栋</span>
                                <span>1300008876</span>
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
                            <el-image class="item-pic" :src="scope.row.pic"></el-image>
                            <p class="item-title">
                                {{scope.row.title}}
                            </p>
                        </div> 
                    </template>
                </el-table-column>
                <el-table-column label="单价" prop="price" width="120"></el-table-column>
                <el-table-column label="数量" prop="num">
                </el-table-column>
                <el-table-column label="小计">
                <template slot-scope="scope">
                    <span style="font-weight: 600">
                            ￥{{scope.row.price * scope.row.num}}
                    </span> 
                    </template> 
                </el-table-column>
            </el-table>
            <el-card class="settle-info">
                <div>
                    <p class="tr">
                        <span class="info">2</span> 件商品, 应付总额: 
                        <span class="info">￥3000</span></p>
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

export default {
    components: {
        CommonHeader,
        Header,
        EditAddress
    },
    methods: {
        showEditDialog() {
            this.$refs.editDialog.showEditDialog = true
        },
        addOrder:function(){
            this.$router.push({
                path:'/my-order'
            })
        }
    },
    data: () => ({
        showMore: true,
        carts: [
            {
                id: 1,
                pic: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                title: '罗莱家纺 冰丝席凉席夏凉软席子空调席双人',
                num: 2,
                name: '张三',
                price: 99.0
            },
            {
                id: 2,
                pic: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                title: '罗莱家纺 冰丝席凉席夏凉软席子空调席双人',
                num: 3,
                name: '张三',
                price: 99.0
            }
        ]
    })
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