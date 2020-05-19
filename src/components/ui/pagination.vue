<template>
  <div class="pagination">
    <el-pagination
      :current-page.sync="currentPage"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="pageTotal"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
      pageTotal: {
          type: Number,
          default: 0
      }
  },
  data(){
      return {
         currentPage: 1,
         pageSize: 10
      }
  },
  methods: {
      handleCurrentChange(val) {
        this.$emit('change', val)
      }
    },
};
</script>

<style scope lang="less">
    .pagination{
        text-align: center;
        margin-top: 20px;
    }
</style>