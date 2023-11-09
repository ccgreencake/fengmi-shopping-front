<template>
  <div>
    <Header></Header>
    <common-header>
       <template v-slot:title>
            我的订单
        </template>
    </common-header>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="16" :offset="4">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="all">
              <all-order></all-order>
          </el-tab-pane>
          <el-tab-pane label="待付款" name="noPay">
              <no-pay></no-pay>
          </el-tab-pane>
          <el-tab-pane label="待评价" name="noComment">
              <no-comment></no-comment>
          </el-tab-pane>
          <el-tab-pane label="已完成" name="completed">
              <completed></completed>
          </el-tab-pane>
          <el-tab-pane label="已取消" name="cancled">
              <cancled></cancled>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import AllOrder from '@/components/MyOrder/AllOrder'
import NoPay from '@/components/MyOrder/NoPay'
import NoComment from '@/components/MyOrder/NoComment'
import Completed from '@/components/MyOrder/Completed'
import Cancled from '@/components/MyOrder/Cancled'
import Header from '@/components/Index/Header'

export default {
  components: {
    CommonHeader,
    AllOrder,
    NoPay,
    NoComment,
    Completed,
    Cancled,
    Header
  },
  data: () => ({
    activeName: 'all'
  }),
  methods: {
    handleClick(tab) {
      window.console.log(tab.name);
    }
  }
}
</script>

<style>

</style>