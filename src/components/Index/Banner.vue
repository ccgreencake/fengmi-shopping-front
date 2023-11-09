<template>
    <el-row :gutter="20" style="box-sizing: border-box; margin-right: 0px;">
        <el-col :span="4" :offset="3">
            <ul class="menus is-always-shadow" @mouseleave="hideDetail">
                <li @mouseenter="showDetail">家用电器</li>
                <li @mouseenter="showDetail">手机 / 运营商 / 数码数码数码</li>
                <li @mouseenter="showDetail">电脑 / 办公</li>
                <li @mouseenter="showDetail">男鞋 / 运动 / 户外</li>
                <li @mouseenter="showDetail">家居 / 家具 / 家装 / 厨具</li>
                <li @mouseenter="showDetail">美妆 / 个人清洁 / 宠物</li>
                <li @mouseenter="showDetail">女鞋 / 箱包 / 钟表</li>
                <li @mouseenter="showDetail">房产 / 汽车 / 汽车用品</li>
                <li @mouseenter="showDetail">艺术 / 礼品鲜花 / 农资绿植</li>
                <li @mouseenter="showDetail">机票 / 酒店 / 旅游 / 生活</li>
                <li @mouseenter="showDetail">医药保健 / 计生情趣</li>
                <li @mouseenter="showDetail">图书 / 酒店 / 旅游 / 生活</li>
                <li @mouseenter="showDetail">机票 / 文娱 / 教育 / 电子书</li>
                <li @mouseenter="showDetail">理财 / 众筹 / 白条 / 保险</li>
                <li @mouseenter="showDetail">安装 / 维修 / 清洗 / 二手</li>
            </ul>
        </el-col>
        <el-col :span="13" style="position: relative;">
            <el-carousel height="430px" :interval="5000" arrow="always">
                <el-carousel-item>
                    <el-image :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"></el-image>
                </el-carousel-item>
                <el-carousel-item>
                    <el-image :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"></el-image>
                </el-carousel-item>
                <el-carousel-item>
                    <el-image :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"></el-image>
                </el-carousel-item>
                <el-carousel-item>
                    <el-image :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"></el-image>
                </el-carousel-item>
            </el-carousel>
            <div class="detail" @mouseenter="showDetail" @mouseleave="hideDetail" v-show="isShowDetail">
                <div class="detail-item">
                    <h3 class="title">电视</h3>
                    <div>
                        <el-link :underline="false" class="item">全面屏电视</el-link> 
                        <el-link :underline="false" class="item">教育电视</el-link>
                        <el-link :underline="false" class="item">OLED电视</el-link>
                        <el-link :underline="false" class="item">智慧屏</el-link>
                        <el-link :underline="false" class="item">4K超清电视</el-link>
                        <el-link :underline="false" class="item">55英寸</el-link>
                    </div>
                </div>  
                <div class="detail-item">
                    <h3 class="title">空调</h3>
                    <div>
                        <el-link :underline="false" class="item" @click="toSearch">新风空调</el-link> 
                        <el-link :underline="false" class="item">以旧换新</el-link>
                        <el-link :underline="false" class="item">空调柜机</el-link>
                        <el-link :underline="false" class="item">空调套装</el-link>
                        <el-link :underline="false" class="item">中央空调</el-link>
                        <el-link :underline="false" class="item">移动空调空调</el-link>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data: () => ({
        isShowDetail: false
    }),
    components: {
    },
    methods: {
        showDetail() {
            this.isShowDetail = true
        },
        hideDetail() {
            this.isShowDetail = false
        },
        toSearch(){
            this.$router.push({
                path:'/search'
            })
        }
    }
}
</script>

<style scoped>
ul.menus.is-always-shadow, .menus.is-hover-shadow:focus, .menus.is-hover-shadow:hover {
    -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
ul.menus {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    overflow: hidden;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    padding: 20px;
}
ul.menus > li {
    padding: 7px 0;
    cursor: pointer;
}
.detail {
    height: 430px;
    background-color: #f6f6f6;
    position:absolute;
    z-index: 9999;
    top: 0;
    width: 100%;
    left: -10px;
    padding: 20px;;
    box-sizing: border-box;
}
.detail .detail-item {
    margin-bottom: 10px;
}
.detail > .detail-item > .title {
    font-weight: 800;
    margin-bottom: 8px;
}
.detail > .detail-item .item {
    margin-right: 8px;
}
.detail > .detail-item .item:hover {
    color: #F56C6C;
}
</style>