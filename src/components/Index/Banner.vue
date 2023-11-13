<template>
    <el-row :gutter="20" style="box-sizing: border-box; margin-right: 0px;">
        <el-col :span="4" :offset="3">
            <ul class="menus is-always-shadow" @mouseleave="hideDetail">
                <li @mouseenter="showDetail(index)" v-for="(category,index) in categories1" :key="index">{{ category.categoryName }}</li>
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
            <div class="detail" @mouseenter="showDetail(index)" @mouseleave="hideDetail" v-show="isShowDetail">
                <div class="detail-item" v-for="(category,index) in categories2" :key="index">
                    <h3 class="title">{{ category.categoryName }}</h3>
                    <div>
                        <el-link :underline="false" class="item" v-for="(category,index) in category.categoryList" :key="index">{{category.categoryName}}</el-link>
                    </div>
                </div>  

            </div>
        </el-col>
    </el-row>
</template>

<script>
import { getList } from '@/api/category'
export default {
    data: () => ({
        isShowDetail: false,
      categories1:[],
      categories2:[]
    }),
    components: {
    },
    methods: {
        showDetail(index) {
            this.isShowDetail = true;
          this.categories2 = this.categories1[index].categoryList;
        },
        hideDetail() {
            this.isShowDetail = false
        },
        toSearch(){
            this.$router.push({
                path:'/search'
            })
        },
      getCategory(){
          let _this = this;
        getList().then(response => {
            window.console.log(response);
            _this.categories1 = response.data;
          })
      }
    },
  mounted() {
    this.getCategory()
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