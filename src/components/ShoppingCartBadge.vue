<template>
    <router-link to="/my-cart">
        <el-badge style="width: 101px;" :value="carts.length">
                <el-button size="medium" type="danger">
                    <i class="fa fa-shopping-cart"></i> 购物车
                </el-button>
        </el-badge>
    </router-link>
</template>

<script>
import {getShoppingCartByUserId} from "@/api/MyShoppingCart";

export default {
data:() => ({
  carts: [],
  userId:''
}),
  methods:{
    getShoppingCart:function(){
      getShoppingCartByUserId(this.userId).then(response => {
        this.carts = response.data;
      })
    }
  },
  mounted:function (){
    this.userId = localStorage.getItem("userId")
    this.getShoppingCart();
  }
}
</script>

<style scoped>
</style>