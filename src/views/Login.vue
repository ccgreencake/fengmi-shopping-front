<template>
  <div>
      <common-header>
          <template v-slot:title>
              欢迎登录
          </template>
      </common-header>
      <el-divider></el-divider>
      <el-row style="margin-bottom: 15px;">
          <el-col :span="24" style="background-color: #d11f20; position: relative;">
            <div class="login-banner"></div>
                <el-card class="login-panel">
                    <div slot="header" class="clearfix">
                        <span style="font-weight: 600; font-size: 20px;">账户登录</span>
                        <el-button style="float: right; padding: 3px 0" type="text">忘记密码?</el-button>
                    </div>
                    <el-form :model="loginForm" ref="loginForm" class="demo-ruleForm">
                        <el-form-item>
                            <el-input placeholder="请输入用户名" v-model="loginForm.username">
                                <template slot="prepend">
                                    <i class="fa fa-user"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="请输入密码" v-model="loginForm.password">
                                <template slot="prepend">
                                    <i class="fa fa-lock"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="danger" style="width: 100%;">登录</el-button>
                        </el-form-item>
                        <el-divider></el-divider>
                        <el-form-item style="margin-bottom: 0;">
                            <div style="margin-right: auto;">
                                <i class="fa fa-weixin other-login" style="color: greenyellow;"></i>
                                <el-divider direction="vertical"></el-divider>
                                <i class="fa fa-github other-login" style="color: black;"></i>
                                <el-divider direction="vertical"></el-divider>
                                <i class="fa fa-weibo other-login" style="color: #F56C6C;"></i>
                            </div>
                            <router-link to="/reg">
                                <el-button type="text">立即注册</el-button>
                            </router-link>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
        <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Index/Footer'
import CommonHeader from '@/components/CommonHeader'

export default {
    components: {
        Footer,
        CommonHeader
    },
    data: () => ({
        loginForm: {
            username: '',
            password: ''
        }
    })
}
</script>

<style scoped>
    .logo {
        font-size: 34px;
        color: #F56C6C;
    }
    
    .login-banner {
        background: url('../assets/d9b4ae0f191315cd.jpg') no-repeat;
        height: 475px;
        width: 990px;
        margin: 0 auto;
    }
    .login-panel {
        position: absolute;
        right: 200px;
        width: 340px;
        top: 50px;
    }
    /deep/.el-form-item__content {
        display: flex; 
        flex-flow: row nowrap;
        margin-bottom: 0;
        align-items: center;
    }
    .other-login {
        font-size: 24px;
        margin: 0 7px;
    }
</style>