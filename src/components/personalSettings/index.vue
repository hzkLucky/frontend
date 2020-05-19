<template>
    <div class="pen">
      <div class="total">
        <span>
          消费总支出:{{ sum }}元
        </span>
         <span class="title__btn" @click="writerAPen" style="background: #3366CC">记一笔</span>
      </div>
       <el-table :data="list">
          <el-table-column prop="time" label="消费时间" />
           <el-table-column prop="remark" label="消费明细" />
            <el-table-column prop="value" label="消费金额" />
       </el-table>
       <pagination :page-total="total" @change="getData" ref="pagination"></pagination>
        <pen ref="dialog" @change="getData()"></pen>
    </div>
</template>
<script>
import pen from '../../components/ui/writeAPen'
import pagination from '../../components/ui/pagination'
export default {
  components: {
    pen,
    pagination
  },
   data(){
     return {
          total: 0,
          sum: 0,
          list: []
     }
   },
   mounted(){
     this.getData()
   },
   methods: {
     getData(){
       this.$axios.post('/gucp/penSum', {
       currentPage: this.$refs.pagination.currentPage ? this.$refs.pagination.currentPage : 1
     }).then( data => {
       this.sum = data.data.body.sum[0].penSum ? data.data.body.sum[0].penSum : 0
       this.list = data.data.body.list
       this.total = data.data.body.total
     })
     },
     writerAPen(){
     this.$refs.dialog.open()
    }
   }
}
</script>
<style scoped lang="less">
  .pen{
    padding: 10px;
    margin-top: 10px;
    background: #fff;
    min-height: 500px;
    .pay {
      display: inline-block;
      color: blue;
      font-size: 24px;
      margin: 0 40px 0 10px;
      
    }
    .btn {
        float: right;
    }
    .total{
      padding: 20px;
      span{
        display: inline-block;
        padding: 5px 10px;
        border-radius: 2px;
        background-color: red; /* 浏览器不支持时显示 */
        font-size: 12px;
    background-image: linear-gradient(#e6a964, #8589b4);
    color: rgb(71, 117, 117);
      }
      .title__btn{
      background: rgb(240, 235, 235);
    padding: 5px 30px;
    font-size: 12px;
    color: #999;
    opacity: 0.9;
    cursor: pointer;
    margin-left: 15px;
}
    }

  }
    
</style>