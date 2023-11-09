<template>
  <div>
   <Header></Header>
   <search-bar></search-bar>
   <el-divider></el-divider>
    <el-row type="flex" class="row-bg" justify="center" style="font-size:14px">
      <el-col :span="6">
        <div style="width:300px;height:300px;">
          <img src="@/img/wwxb_1.png" alt="好吃的零食" width="300px" height="300px">
        </div>
      </el-col>
      <el-col :span="8">
        <div style="width:500px;">
          <br> 
          <div style="margin-bottom:30px">
            <span>
              <h1>旺旺雪饼</h1>
            </span>
          </div>
          <div style="background-color:#e8e8e8;margin:10px 0px;padding:20px 0px">
            <span>&nbsp;&nbsp;&nbsp;促销价:<span style="font-size:18px; color:red;margin-left:10px">¥10</span></span><br><br>
            <span>&nbsp;&nbsp;&nbsp;原&nbsp;&nbsp;&nbsp;价:<span style="font-size:18px; text-decoration: line-through;margin-left:10px">¥30</span></span>
          </div>
          <div>
            <label>&nbsp;&nbsp;&nbsp;口味:&nbsp;&nbsp;&nbsp;</label>
            <el-radio-group v-model="kouwei" >
              <el-radio-button label="微辣">微辣</el-radio-button>
              <el-radio-button label="中辣">中辣</el-radio-button>
              <el-radio-button label="特辣">特辣</el-radio-button>
              <el-radio-button label="麻辣">麻辣</el-radio-button>
            </el-radio-group>
          </div><br>
          
          <div>
            <label>&nbsp;&nbsp;&nbsp;包装:&nbsp;&nbsp;&nbsp;</label>
            <el-radio-group v-model="guige">
              <!-- <el-radio-button :label="index" >{{item.skuName}}</el-radio-button> -->
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
        <div style="width:800px;">
          <el-row>
            <el-col :span="12">
              <span>产地:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">武汉</el-tag>
            </el-col>
            <el-col :span="12">
              <span>保质期:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">36个月</el-tag>
            </el-col>
          </el-row><br>
          <el-row>
            <el-col :span="12">
              <span>品牌:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">旺旺品牌</el-tag>
            </el-col>
            <el-col :span="12">
              <span>生产公司:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">旺旺</el-tag>
            </el-col>
          </el-row><br>
          <el-row>
            <el-col :span="12">
              <span>公司地址:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">xxxxxxxxx</el-tag>
            </el-col>
            <el-col :span="12">
              <span>包装:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">xxxxxxxxx</el-tag>
            </el-col>
          </el-row><br>
          <el-row>
            <el-col :span="12">
              <span>重量:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">100g</el-tag>
            </el-col>
            <el-col :span="12">
              <span>保存方式:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">袋装</el-tag>
            </el-col>
          </el-row><br>
          <el-row>
            <el-col :span="12">
              <span>使用方式:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <el-tag type="success">直接食用</el-tag>
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
                    <el-card>
                      <p>用户ID为的用户说:</p><br>
                      <h1>&nbsp;&nbsp;&nbsp;&nbsp;好吃的零食</h1>
                    </el-card>
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

  export default {
      components: {
        Header,
        SearchBar,
        Footer
      },
    data() {
      return {
        guige: 5,
        kouwei:'微辣',
        num:1
      }
    },
    methods: {
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
        }
    },
    computed: {
    }
  }
</script>

<style>
</style>