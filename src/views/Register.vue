<template>
    <div>
        <common-header>
            <template v-slot:title>
                用户注册
            </template>
            <template v-slot:extra>
                <router-link to="/login">
                     <el-link>已有账号? 请登录</el-link>
                </router-link>  
            </template>
        </common-header>
        <el-divider></el-divider>
        <el-row style="margin-top:20px; min-height: 600px;">
            <el-col :span="8" :offset="8" class="register-panel">
                <el-steps :space="280" style="width: 100%;margin-bottom: 28px;" 
                    align-center :active="step" finish-status="success">
                    <el-step title="验证手机号"></el-step>
                    <el-step title="填写账号信息"></el-step>
                    <el-step title="注册完成"></el-step>
                </el-steps> 
                <el-card style="width: 100%;" v-show="step == -1">
                    <el-form :model="registerForm" ref="registerForm" class="demo-ruleForm">
                        <el-form-item>
                            <el-input placeholder="请输入手机号" v-model="registerForm.phone">
                                <template slot="prepend">
                                    <i class="fa fa-phone"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-col :span="18">
                                <el-input placeholder="请输验证码" v-model="registerForm.validateCode">
                                    <template slot="prepend">
                                        <i class="fa fa-comment"></i>
                                    </template>
                                </el-input>
                            </el-col>
                            <el-col :span="6">
                                <el-button style="float: right; width: 92%;" type="success">获取验证码</el-button>
                            </el-col>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="danger" @click="step = 1" style="width: 100%;">下一步</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
                <el-card style="width: 100%;" v-show="step == 1">
                    <el-form :model="registerForm" ref="registerForm" class="demo-ruleForm">
                        <el-form-item>
                            <el-input placeholder="请输入用户名" v-model="registerForm.username">
                                <template slot="prepend">
                                    <i class="fa fa-user"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="请输入密码" v-model="registerForm.password">
                                <template slot="prepend">
                                    <i class="fa fa-lock"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="请输入重复密码" v-model="registerForm.repassword">
                                <template slot="prepend">
                                    <i class="fa fa-lock"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="请输入邮箱" v-model="registerForm.repassword">
                                <template slot="prepend">
                                    <i class="fa fa-envelope"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="请输入生日" v-model="registerForm.repassword">
                                <template slot="prepend">
                                    <i class="fa fa-birthday-cake"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="danger" @click="gotoIndex" style="width: 100%;">下一步</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
                <el-result v-show="step == 3" icon="success" title="注册成功">
                    <template v-slot:subTitle>
                        页面将在 <span style="color: #F56C6C;">{{timer}}s</span> 后跳转到首页
                    </template>
                </el-result>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <Footer></Footer>
    </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import Footer from '@/components/Index/Footer'

export default {
    components: {
        CommonHeader,
        Footer
    },
    data: () => ({
        step: -1,
        timer: 5,
        registerForm: {
            phone: '',
            validateCode: '',
            username: '',
            password: '',
            repassword: '',
            email: '',
            gender: '',
            birthday: ''
        }
    }),
    methods: {
        gotoIndex() {
            this.step = 3
            setInterval(() => {
                if(this.timer == 0) {
                    this.$router.push('/')
                }
                this.timer--
            }, 1000)
        }
    }
}
</script>

<style scoped>
    .register-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .el-steps {
        justify-content: center
    }
</style>