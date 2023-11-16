<template>
  <div>
   <Header></Header>
   <search-bar></search-bar>
   <el-divider></el-divider>
    <el-row type="flex" class="row-bg" justify="center" style="font-size:14px">
      <el-col :span="6">
        <div style="width:300px;height:300px;">
<!--          <img src="@/img/wwxb_1.png" alt="好吃的零食" width="300px" height="300px">-->
          <el-image :src="'http://localhost:8080/img/'+productDetail.productImg[0].url"></el-image>
        </div>
      </el-col>
      <el-col :span="8">
        <div style="width:500px;">
          <br> 
          <div style="margin-bottom:30px">
            <span>
              <h1>{{productDetail.product.productName}}</h1>
            </span>
          </div>
          <div style="background-color:#e8e8e8;margin:10px 0px;padding:20px 0px">
            <span>&nbsp;&nbsp;&nbsp;促销价:
              <span v-if="productSku && productSku.length > 0" style="font-size:18px; color:red;margin-left:10px">
                {{guige.sellPrice}}
              </span>
              <span v-else style="font-size:18px; color:red;margin-left:10px">暂无报价</span>
            </span>
            <br><br>
            <span>&nbsp;&nbsp;&nbsp;原&nbsp;&nbsp;&nbsp;价:
              <span v-if="productSku && productSku.length > 0" style="font-size:18px; text-decoration: line-through;margin-left:10px">
                  {{ guige.originalPrice }}
              </span>
              <span v-else style="font-size:18px; text-decoration: line-through;margin-left:10px">
                  暂无报价
              </span>
            </span>
          </div>
          <div v-if="productSku && productSku.length > 0">
            <label>&nbsp;&nbsp;&nbsp;规格:&nbsp;&nbsp;&nbsp;</label>
            <el-radio-group v-model="guige" @change="getFlavorsAndPacking">
              <el-radio-button  v-for="(productS,index) in productSku" :key="index" :label="productS">{{ productS.skuName }}</el-radio-button>
            </el-radio-group>
          </div>
          <div v-else>
            <label>&nbsp;&nbsp;&nbsp;规格:&nbsp;&nbsp;&nbsp;</label>
            <el-radio-group>
              <el-radio-button><h2>暂无规格</h2></el-radio-button>
            </el-radio-group>
          </div>
          <br>

          <div v-if="flavors && flavors.length > 0">
            <label>&nbsp;&nbsp;&nbsp;口味:&nbsp;&nbsp;&nbsp;</label>
            <el-radio-group v-model="kouwei" >
              <el-radio-button v-for="(flavor,index) in flavors" :key="index" :label="flavor">{{ flavor }}</el-radio-button>
            </el-radio-group>
          </div>
          <div v-else>
            <label>&nbsp;&nbsp;&nbsp;口味:&nbsp;&nbsp;&nbsp;</label>
            <el-radio-group>
              <el-radio-button><h2>暂无口味</h2></el-radio-button>
            </el-radio-group>
          </div>
          <br>


          <div v-if="packagings && packagings.length > 0">
            <label>&nbsp;&nbsp;&nbsp;包装:&nbsp;&nbsp;&nbsp;</label>
            <el-radio-group v-model="baozhuang">
              <el-radio-button  :label="packing" v-for="packing in packagings" :key="packing" >{{packing}}</el-radio-button>
            </el-radio-group>
          </div>
          <div v-else>
            <label>&nbsp;&nbsp;&nbsp;包装:&nbsp;&nbsp;&nbsp;</label>
            <el-radio-group v-model="baozhuang">
              <el-radio-button label="5">5袋</el-radio-button>
              <el-radio-button label="50">50袋</el-radio-button>
              <el-radio-button label="200">200袋</el-radio-button>
            </el-radio-group>
          </div><br>
          <div>
              <el-row style="display:flex;align-items:center">
                  <label>&nbsp;&nbsp;&nbsp;数量:&nbsp;&nbsp;&nbsp;</label>
                  <el-button @click="minus" type="success" icon="el-icon-remove-outline" circle></el-button>
                  &nbsp;&nbsp;&nbsp;<el-input v-model="num" type="text" placeholder=""  style="width:50px;text-algin:center"></el-input>&nbsp;&nbsp;&nbsp;
                  <el-button @click="add" type="info" icon="el-icon-circle-plus-outline" circle></el-button>
              </el-row>
          </div><br>

          <div style="margin-left:300px;margin-top:20px;">
            <el-button-group>
              <el-button type="success" @click="join()" style="margin-left:10px">加入购物车</el-button>
            </el-button-group>
          </div><br>

        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center" >
      <el-col :span="14">
        <div style="width:800px;" v-if="productParams && productParams.length > 0">
          <el-row>
            <el-col :span="12">
              <span>产地:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">{{productParams[0].productPlace}}</el-tag>
            </el-col>
            <el-col :span="12">
              <span>保质期:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">{{productParams[0].footPeriod}}</el-tag>
            </el-col>
          </el-row><br>
          <el-row>
            <el-col :span="12">
              <span>品牌:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">{{productParams[0].brand}}</el-tag>
            </el-col>
            <el-col :span="12">
              <span>生产公司:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">{{productParams[0].factoryName}}</el-tag>
            </el-col>
          </el-row><br>
          <el-row>
            <el-col :span="12">
              <span>公司地址:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">{{productParams[0].factoryAddress}}</el-tag>
            </el-col>
            <el-col :span="12">
              <span>包装:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">{{productParams[0].packagingMethod}}</el-tag>
            </el-col>
          </el-row><br>
          <el-row>
            <el-col :span="12">
              <span>重量:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">{{productParams[0].weight}}</el-tag>
            </el-col>
            <el-col :span="12">
              <span>保存方式:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">{{productParams[0].storageMethod}}</el-tag>
            </el-col>
          </el-row><br>
          <el-row>
            <el-col :span="12">
              <span>使用方式:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">{{productParams[0].eatMethod}}</el-tag>
            </el-col>
            <el-col :span="12">
            </el-col>
          </el-row>
        </div><br><br>
        <el-tabs type="border-card">
          <el-tab-pane label="商品介绍">
            <div style="background:#993;width:800px;">
              <img src="@/img/ygcjs.png" width="800px">
            </div>
          </el-tab-pane>
          <el-tab-pane label="买家评论">
            <div style="width:800px;">
              <div class="block">
                <el-timeline>
                  <el-timeline-item placement="top">
                    <div v-if="productComments && productComments.length > 0">
                      <el-card v-for="(comment,index) in productComments" :key="index">
                        <p>用户ID为{{comment.commId}}的用户说:</p><br>
                        <h1>&nbsp;&nbsp;&nbsp;&nbsp;{{ comment.commContent }}</h1>
                      </el-card>
                    </div>
                    <div v-else>
                      <h1>暂无评论</h1>
                    </div>
                  </el-timeline-item>
                </el-timeline>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="售后保障">
            <div style="background:#182;width:800px;height:1000px">
              <h2>这里是商品售后</h2>
            </div>
          </el-tab-pane>
          <el-tab-pane label="商品活动">
            随机活动
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-divider></el-divider>
      <Footer></Footer>


  </div>
</template>

<script>
  import Header from '@/components/Index/Header'
  import SearchBar from '@/components/Index/SearchBar'
  import Footer from '@/components/Index/Footer'
  import { getProductDetail } from '@/api/product'
  import {pack} from "core-js/internals/ieee754";

  export default {
      components: {
        Header,
        SearchBar,
        Footer
      },
    data() {
      return {
        productId:'',
        productDetail:[],
        productImg:[],
        productSku:[],
        productParams:[],
        productComments:[],
        num:0,
        tastes:"",
        flavors: [],
        packagings: [],
        baozhuang:"",
        kouwei:"",
        guige:[]
      }
    },
    methods: {
      pack,
        add:function(){
          this.num++;
        },
        minus:function(){
          this.num--;
        },
        join:function(){
          this.$router.push({
            path:'/my-cart'
          })
        },
      getProduct(productId){
        let _this = this;
        getProductDetail(productId).then(response => {
          window.console.log(response.data);
          _this.productDetail = response.data;
          _this.productImg = response.data.productImg;
          _this.productSku = response.data.productSku;
          _this.productParams = response.data.productParams;
          _this.productComments = response.data.productComments;
          if (response.data.productSku.length > 0){
            _this.guige = _this.productSku[0];
            _this.getFlavorsAndPacking();
          }
        })
      },
      getFlavorsAndPacking(){
        this.tastes = this.guige.untitled;
        // 修复正则表达式
        const fixedJson = this.tastes.replace(/([^\s:,{]+)(?=:)/g, '"$1"');
        const tasteObject = JSON.parse(fixedJson);
        this.flavors = tasteObject['口味'];
        this.packagings = tasteObject['包装'];
      }
    },
    mounted() {
      let productId = this.$route.query.productId;
      this.productId = productId;
      // eslint-disable-next-line no-console
      // console.log(this.productId);
      this.getProduct(this.productId);
      // this.parseData();
    }

  }
</script>

<style>
</style>