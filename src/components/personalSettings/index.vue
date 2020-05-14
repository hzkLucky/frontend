<template>
    <div>
       本月支出: <span class="pay">{{pay}}</span>
       <el-button type="primary" class="btn">记一笔</el-button>
       <chart></chart>
    </div>
</template>
<script>
import chart from '../d3/chart/cluster'
export default {
    components: {
        chart
    },
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