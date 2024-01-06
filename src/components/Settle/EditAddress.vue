<template>
    <el-dialog title="收货地址" :visible.sync="showEditDialog">
        <el-form>
            <el-form-item label="收货人">
                <el-input autocomplete="off" v-model="userAddr.receiverName"></el-input>
            </el-form-item>
          <el-form-item label="省份">
            <el-input autocomplete="off" v-model="userAddr.province"></el-input>
          </el-form-item>
          <el-form-item label="城市">
            <el-input autocomplete="off" v-model="userAddr.city"></el-input>
          </el-form-item>
          <el-form-item label="行政区">
            <el-input autocomplete="off" v-model="userAddr.area"></el-input>
          </el-form-item>
          <el-form-item label="具体地址">
            <el-input autocomplete="off" v-model="userAddr.addr"></el-input>
          </el-form-item>
          <el-form-item label="电话号码">
            <el-input autocomplete="off" v-model="userAddr.receiverMobile"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="showEditDialog = false">取 消</el-button>
            <el-button @click="makeSure()">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
import {addAddr} from '@/api/UserAddr'
export default {
    data: () => ({
        showEditDialog: false,
        userAddr: {
          userId: '',
          receiverName: '',
          province: '',
          city: '',
          area: '',
          addr: '',
          receiverMobile: ''
        }
    }),
  methods:{
      makeSure:function (){
        this.userAddr.userId = localStorage.getItem("userId");
          addAddr(this.userAddr).then(response => {
              window.console.log(response);
          })
          this.showEditDialog = false;
      }
  }
}
</script>

<style>

</style>