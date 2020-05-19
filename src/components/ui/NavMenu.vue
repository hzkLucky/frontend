<template>
  <div class="menu">
    <div class="info">
      <div class="info__logo">
        <img
          src="../../assets/logo.png"
          alt=""
        >
        <span class="info__name">Ray</span>
      </div>
    </div>
    <div class="menu-content">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <!-- <el-submenu index="1"> -->
            <el-menu-item
              index="2"
              v-for="( val, index) in menus"
              :key="index"
              @click="$router.push(val.path)"
            >
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
      leftMenu,
      menus: []
    };
  },
  created() {
    let cacheMenus = JSON.parse(localStorage.getItem('menus'))
    if( cacheMenus.type === 'admin'){
      this.menus = leftMenu
    }
    else{
      let menusName = cacheMenus.menus.split(',')
      this.menus = this.leftMenu.filter( val => {
        return menusName.includes(val.name)
      })
    }
  },
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
        color: #d1625a;
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
