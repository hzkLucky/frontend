<template>
   <div>
         <el-dialog
         title="记一笔"
  :visible.sync="dialogVisible"
  width="50%"
  >
   <writer-a-pen></writer-a-pen>
        <el-row>
     <el-radio v-model="radio" label="1">支出</el-radio>
  <el-radio v-model="radio" label="2">收入</el-radio>
  </el-row>
  <el-row v-if="radio === '1'">
      <el-col>
          消费类型:
          <div v-for="(val, index) in imgUrl" @click="selectedType(val)" :key="index" class="img-box" :class="{active: val.value === type}">
           <img :src="val.url" alt="" class="img" :title="val.title">
       </div>
      </el-col>
  </el-row>

  <el-row>
    <el-col><input-zk :label="numLabel" ref="numLabel"></input-zk></el-col>

  </el-row>
  <el-row>
        <el-col><input-zk :label="remark" ref="remark"></input-zk></el-col>

  </el-row>
  <span slot="footer" class="dialog-footer">
    <el-button @click="close">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
  </el-dialog>
   </div>
</template>

<script>
import inputZk from '../ui/inputZk'
export default {
  components: {
      inputZk
  },
  data(){
      return {
          dialogVisible: false,
          radio: '1',
          type: '',
      numLabel: '金额',
      remark: '备注',
      imgUrl: [
        {
           url: require('../../assets/images/type/live.svg'),
           title: '居住',
           value: 'live'
        },
        {
           url: require('../../assets/images/type/articlesForDailyUse.svg'),
           title: '生活用品',
           value: 'articlesForDailyUse'
        },
        {
           url: require('../../assets/images/type/doctor.svg'),
           title: '医疗保健',
           value: 'medicalCare'
        },
        {
           url: require('../../assets/images/type/traffic.svg'),
           title: '交通和通信',
           value: 'traffic'
        },
        {
           url: require('../../assets/images/type/education.svg'),
           title: '教育',
           value: 'education'
        },
        {
           url: require('../../assets/images/type/Culture.svg'),
           title: '文化和娱乐',
           value: 'Culture'
        },
        {
           url: require('../../assets/images/type/eat.svg'),
           title: '餐饮',
           value: 'eat'
        }
      ]
      }
  },
  methods:{
     open(){
          this.dialogVisible = true
     },
     close(){
         this.dialogVisible = false
     },
     selectedType(val) {
         this.type = val.value
     },
     validate(){
        const ref = /^\d+$/
       if(this.radio === '1'){
           if(!this.type){
               this.$message({
               message: '请选择类型',
               type: 'fail'
             })
               return false
           }
           else if(!this.$refs.numLabel && !this.$refs.numLabel.value){
                this.$message({
               message: '请输入数值',
               type: 'fail'
             })
               return false
           }
           else if(! ref.test(this.$refs.numLabel.value)){
               this.$message({
               message: '请输入数字类型',
               type: 'fail'
             })
               return false
           }
           else {
               return true
           }
       }
       else {
           if(!this.$refs.numLabel && !this.$refs.numLabel.value){
                this.$message({
               message: '请输入数值',
               type: 'fail'
             })
               return false 
           }
           else if(!ref.test(this.$refs.numLabel.value)){
               this.$message({
               message: '请输入数字类型',
               type: 'fail'
             })
               return false
           }
           else {
               return true
           }
       }
     },
     submit(){
         if(this.radio === '2' && this.validate()){
           this.$axios.post('/gucp/income', {
             value: this.$refs.numLabel.value ,
             remark: this.$refs.remark.value ? this.$refs.remark.value : ''
         }).then( data => {
             if(data.status === 200){
              this.$message({
               message: '保存成功',
               type: 'success'
             })
                 this.dialogVisible = false
             }
             else{
              this.$message({
               message: '保存失败',
               type: 'fail'
             })
             }
         })
         } 
         else {
             //
              this.$axios.post('/gucp/core', {
             value: parseInt(this.$refs.numLabel.value) ,
             remark: this.$refs.remark.value ? this.$refs.remark.value : '',
             type: this.type
         }).then( data => {
             if(data.status === 200){
              this.$message({
               message: '保存成功',
               type: 'success'
             })
                 this.dialogVisible = false
             }
             else{
              this.$message({
               message: '保存失败',
               type: 'fail'
             })
             }
         })
             //
         }  
     }
  }
}
</script>

<style scoped>
  .el-row{
      margin-top: 25px;
  }
  .img-box{
      display: inline-block;
      padding: 4px;
      border: 1px solid rgb(167, 175, 166);
      margin: 10px;
      border-radius: 10px;
  }
  .img{
      width: 30px;
  }
  .active{
           border: 1px solid rgb(76, 123, 209); 
  }
</style>>

