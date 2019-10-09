<template>
  <div >
      <el-table
    :data="tableData"
    stripe
    style="width: 100%">
  
    <el-table-column
      prop="name"
      label="姓名"
      width="380">
    </el-table-column>
      <el-table-column
      label="用户类型"
      width="380">
      <template slot-scope="scope">
         {{scope.row.type === 'user' ? '普通用户': '管理员'}}
      </template>
    </el-table-column>
     <el-table-column
      label="编辑" >
      <template slot-scope="scope">
           <el-button @click="agree(scope.row.name)" type="primary" >
        同意
      </el-button>
      <el-button @click="reject(scope.row.name)">
           拒绝
      </el-button>
      </template>
    
    </el-table-column>
  </el-table>
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
     this.getData()
  },
 methods: {
     getData() {
          this.$axios.get('/gucp/register/view').then( data => {
          this.tableData = data.data.data
      })
     },
  edit() {
     this.dialogFormVisible = true
  },
  agree(name) {
      this.$axios.post('/gucp/register/agree', {
          name: name
      }).then( data => {
         this.getData()
      })
  },
  reject(name) {
    this.$axios.post('/gucp/register/reject', {
        name: name
    }).then( data => {
        this.getData()
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