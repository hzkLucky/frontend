<template>
    <div>
       本月支出: <span class="pay">{{pay}}</span>
       <el-button type="primary" class="btn">记一笔</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pay: 0
        }
    }
}
</script>
<style scoped>
    .pay {
      display: inline-block;
      color: blue;
      font-size: 24px;
      margin: 0 40px 0 10px;
      
    }
    .btn {
        float: right;
    }
</style>