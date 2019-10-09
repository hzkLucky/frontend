<template>
  <div >
      <el-table
    :data="tableData"
    stripe
    style="width: 100%">
  
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
      <el-table-column
      prop="private"
      label="用户类型"
      width="180">
      <template slot-scope="scope">
         {{scope.row.private === 'user' ? '普通用户': '管理员'}}
      </template>
    </el-table-column>
    <el-table-column
      prop="role"
      label="菜单权限" width="470">
      <template slot-scope="scope" >
          <span class="scope" v-for="val in scope.row.role.split(',')" :key="val">{{$t('m.' + val )}}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="编辑" >
      <template slot-scope="scope">
           <el-button @click="edit(scope.row.name)" type="primary" >
         删除
      </el-button>
      </template>
    
    </el-table-column>
  </el-table>
  <el-dialog :visible.sync="dialogFormVisible" title="编辑联系人">
      白
  </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
        dialogFormVisible: false,
       tableData: [
        ]
    }
  },
  created() {
     this.getPageData() 
  },
 methods: {
  getPageData() {
    this.$axios.get('/gucp/admin/view').then( data => {
          this.tableData = data.data.data
      })
  },
  edit(name) {
     this.$axios.post('/gucp/deleteUser', {
       name: name
     }).then( data => {
       this.getPageData()
         this.$message({
               message: '删除成功',
               type: 'success'
             })
     })
  }
 }
}
</script>
<style lang="less" scoped>
  .scope{
          background: #2f84d4;
    color: #fff;
    display: inline-block;
    padding: 4px 16px;
    margin: 4px;
    border-radius: 10px;
  }
</style>