<template>
  <div class="menu">
   <div class="info">
       <div class="info__logo">
           <img src="../../assets/logo.png" alt="">
           <span class="info__name">Rays1111111111111111111111111111</span>
       </div>
   </div>
   <div class="menu-content">
       <el-row class="tac">
  <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <!-- <el-submenu index="1"> -->
      <el-menu-item index="2" v-for="( val, index) in leftMenu" :key="index" @click="$router.push(val.path)">
        <i :class="val.icon"></i>
        <span slot="title">{{val.name}}</span>
      </el-menu-item>
      <!-- </el-submenu> -->
    </el-menu>
  </el-col>
</el-row>
   </div>
  
   
  </div>
</template>
<script>
import { leftMenu } from "./menu";
export default {
  data() {
    return {
      leftMenu
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
.menu {
  .info {
    .info__logo {
      padding: 20px;
      img {
        width: 50px;
      }
      .info__name {
        color: #8c99ff;
        font-size: 25px;
        text-shadow: 2px 2px 2px #8c99ff;
        position: absolute;
        top: 32px;
        margin-left: 8px;
      }
    }
  }
  .menu-content {
    .el-menu {
      border-right: none;
    }
  }
}
</style>
