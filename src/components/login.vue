<template>
  <div class="login">
    <div class="content">
      <div class="title">欢迎您回来! 
        <!-- <span @click="changeLange">zh-cn/en</span> -->
        </div>
      <el-form ref="form" :model="form" class="form">
        <el-form-item>
          <el-input
            ref="itCode"
            v-model="form.name"
            placeholder="请输入用户名"
            :class="{ empty: form.name === '' }"
            prefix-icon="el-icon-user"
          />
        </el-form-item>
        <el-form-item>
          <el-input type="password"
            ref="itCode"
            v-model="form.password"
            placeholder="请输入密码"
            :class="{ empty: form.password === '' }"
            prefix-icon="el-icon-shopping-bag-2"
          />
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button
          @click="normalLogin"
          type="warning"
          class="login-btn"
        >密码登录</el-button>
        <span class="register" @click="register">注册</span>
      </div>
         <el-dialog title="注册用户" ref="register" :visible.sync="dialogFormVisible" class="dialog">
  <el-row>
    <el-col :span="4">用户名:</el-col>
    <el-col :span="20"> <el-input v-model="registerName" autocomplete="off"></el-input></el-col>
  </el-row>
    <el-row>
       <el-col :span="4">
         密码:
       </el-col>
       <el-col :span="20">
          <el-input v-model="registerPassword" autocomplete="off" type="password"></el-input>
       </el-col>
      </el-row> 
       <el-row>
         <el-col :span="4">
            注册类型:
         </el-col>
         <el-col :span="20" >
              <el-radio v-model="registerType" label="user">普通用户</el-radio>
  <el-radio v-model="registerType" label="admin">管理员</el-radio>
         </el-col>
       </el-row>
    
       
    
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="submitRegister">确 定</el-button>
  </div>
</el-dialog>
    </div>
 
  </div>
</template>

<script>
import vue from "vue";
import { type } from 'os';
export default {
  extends: 'sql',
  data() {
    return {
      dialogFormVisible: false,
      registerName: '',
      registerPassword: '',
      registerType: 'user',
      form: {
        language: 'zh-cn',
        name: "",
        password: ""
      }
    };
  },
  methods: {
    // changeLange() {
    //      this.$confirm('确定切换语言吗?', '提示', {
    //    confirmButtonText: '确定',
    //    cancelButtonText: '取消',
    //    type: 'warning'
    // }).then(() => {
    //    if ( this.language === 'zh-cn' ) {
    //       this.language = 'en';
    //       this.$i18n.locale = this.language;//关键语句
    //    }else {
    //       this.language = 'zh-cn';
    //       this.$i18n.locale = this.language;//关键语句
    //    }
    // }).catch(() => {
    //    this.$message({
    //        type: 'info',
    //    });          
    // });

    // },
    submitRegister() {
      if(!this.registerName) {
          this.$message({
          message: '用户名不能为空',
          type: 'warning'
        });
      }
      else if( !this.registerPassword) {
        this.$message( {
         
            message: '注册密码不能为空',
            type: 'warning'
        })
      }
      else {
         this.$axios.post('/gucp/register', {
          userName: this.registerName,
          passWord: this.registerPassword,
          type: this.registerType
        }).then( data => {
           if( data.data.data.pass) {
             this.$message({
               message: '您的注册申请已提交',
               type: 'success'
             })
             this.dialogFormVisible = false
           }
           else {
             this.$message({
               message: '该用户已被注册',
               type: 'warn'
             })
           }
            this.registerName = ''
             this.registerPassword = ''
             this.registerType = 'user'
        })
      }
       
    },
    register() {
        // this.$refs.register.open()
        this.dialogFormVisible = true
      },
    normalLogin() {
        this.$axios.post(`/gucp/user`, {
          name: this.form.name,
          password: this.form.password
        }).then( data => {
          if( data.data.data.pass === false ){
            this.$message({
          message: '用户名或密码错误',
          type: 'warning'
        });
        this.form.name = ''
        this.form.password = ''
          }
          else{
            this.$store.commit('admin', data.data.data.type)
            this.$router.push('/index')
          }
        })
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  padding: 20px;
  width: 30%;
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
}
.title {
  text-align: center;
  font-size: 20px;

  color: #fff;

  text-shadow: 0 0 0.1em #fff, -0 -0 0.1em #fff;
}
.btn {
  margin-top: 40px;
  text-align: center;
}
.dialog {
  .el-row {
    margin-top: 20px;
  }
}
.register {
  color: blue;
  border-bottom: 1px solid blue;
  margin-left: 20px;
  display: inline-block;
  cursor: pointer;
  margin-top: -10px;
  font-size: 12px;
}
.form {
  margin-top: 25px;
}
.login-btn {
  width: 30%;
  cursor: pointer;
}
</style>

