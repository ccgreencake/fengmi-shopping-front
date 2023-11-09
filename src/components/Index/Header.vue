<template>
  <el-row align="middle" type="flex" justify="space-between" style="background-color: #409EFF; height: 44px;">
      <el-col :span="6" :offset="1">
        <router-link to="/">
          <h3 style="color: #fff; font-weight: 600; font-size: 18px;">
            <i class="fa fa-fort-awesome" style="font-size: 24px;"></i>&nbsp;&nbsp; 2167商城
          </h3>
        </router-link>
      </el-col>
      <el-col :span="12">
          <router-link to="/my-order">
            <el-link class="header-bar">我的订单</el-link>
          </router-link>
          <router-link to="/login">
            <el-link class="header-bar">登录</el-link>
          </router-link>
          <router-link to="/reg">
            <el-link class="header-bar">没有账号? 注册</el-link>
          </router-link> 
      </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style scoped>
    .header-bar {
        color: #fff; 
        margin-right: 20px;
        float: right;
    }
    .header-bar:hover {
        color: #fff;
    }
</style>