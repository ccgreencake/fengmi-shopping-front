<template>
   <el-row>
       <el-col :span="18" :offset="3" class="footer">
           <el-link class="info">关于我们</el-link>
           <el-divider direction="vertical"></el-divider>
           <el-link class="info">联系我们</el-link>
           <el-divider direction="vertical"></el-divider>
           <el-link class="info">人才招聘</el-link>
           <el-divider direction="vertical"></el-divider>
           <el-link class="info">商家入住</el-link>
           <el-divider direction="vertical"></el-divider>
           <el-link class="info">广告服务</el-link>
           <el-divider direction="vertical"></el-divider>
           <el-link class="info">手机商城</el-link>
           <el-divider direction="vertical"></el-divider>
           <el-link class="info">友情链接</el-link>
           <el-divider direction="vertical"></el-divider>
           <el-link class="info">English Site</el-link>
       </el-col>
   </el-row>
</template>

<script>
export default {

}
</script>
   
<style scoped>
    .footer {
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
    }
    .footer .info {
        margin: 0 5px;
    }
</style>