<template>
    <el-dialog title="收货地址" :visible.sync="showEditDialog">
        <el-form>
            <el-form-item label="活动名称">
                <el-input autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="showEditDialog = false">取 消</el-button>
            <el-button @click="showEditDialog = false">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    data: () => ({
        showEditDialog: false
    })
}
</script>

<style>

</style>