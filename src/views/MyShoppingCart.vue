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
                    <span class="all-goods">全部商品: 2</span>
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
                                    <el-image class="item-pic" :src="scope.row.pic"></el-image>
                                    <p class="item-title">
                                        {{scope.row.title}}
                                    </p>
                                </div> 
                            </template>
                        </el-table-column>
                        <el-table-column label="单价" prop="price" width="120"></el-table-column>
                        <el-table-column label="数量" prop="num">
                            <template slot-scope="scope">
                                <el-button type="info" size="mini" style="margin-right: 3px;">
                                    <i class="fa fa-minus"></i>
                                </el-button>
                                <el-input size="small" style="width: 80px;" v-model="scope.row.num"></el-input> 
                                <el-button style="margin-left: 3px;" type="info" size="mini">
                                    <i class="fa fa-plus"></i>
                                </el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="小计">
                        <template slot-scope="scope">
                            <span style="font-weight: 600">
                                    ￥{{scope.row.price * scope.row.num}}
                            </span> 
                            </template> 
                        </el-table-column>
                        <el-table-column label="操作">
                            <template>
                                <el-button type="text">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-card style="margin-top: 10px;">
                        <div>
                            <el-checkbox>全选</el-checkbox>
                            <el-button type="text" style="margin-left: 10px;">删除选中的商品</el-button>
                            <router-link to="/settle">
                                 <el-button type="danger" style="float: right;">去结算</el-button>
                            </router-link>
                            <p style="float: right; margin-right: 10px;">
                                已选择 <span style="color: #e2231a; font-weight: 600;">0</span> 件商品
                                总价: <span style="color: #e2231a; font-weight: 600;">￥0.00</span>
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
export default {
    components: {
        CommonHeader,
        Header
    },
    data: () => ({
        checkAll: false,
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
            },
            {
                id: 3,
                pic: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                title: '罗莱家纺 冰丝席凉席夏凉软席子空调席双人',
                num: 3,
                name: '张三',
                price: 99.0
            },
            {
                id: 4,
                pic: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                title: '罗莱家纺 冰丝席凉席夏凉软席子空调席双人',
                num: 3,
                name: '张三',
                price: 99.0
            },
            {
                id: 5,
                pic: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                title: '罗莱家纺 冰丝席凉席夏凉软席子空调席双人',
                num: 3,
                name: '张三',
                price: 99.0
            }
        ]
    }),
    methods: {
        // 选中所有
        changeCheckAll(val) {
            window.console.log(val);
        },
        // 勾选某件商品val
        handleSelectionChange(val) {
            window.console.log(val);
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