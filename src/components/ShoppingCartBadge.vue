<template>
    <router-link to="/my-cart">
        <el-badge style="width: 101px;" :value="0">
                <el-button size="medium" type="danger">
                    <i class="fa fa-shopping-cart"></i> 购物车
                </el-button>
        </el-badge>
    </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>