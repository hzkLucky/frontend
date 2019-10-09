<template>
  <div class="user-admin">
     <div class="menu">
         <span class="menu__item" :class="{menu__item__active: menu === 'admin'}" @click="admin">角色管理</span>
         <span class="menu__item" :class="{menu__item__active: menu === 'register'}" @click="register">新用户申请</span>
     </div>
     <div class="content">
         <component :is="componentId"></component>
     </div>
  </div>
</template>
<script>
import admins from './admin'
import registers from './register'
export default {
    components: {
        admins,
        registers
    },
  data() {
    return {
      menu: 'admin',
      componentId: 'admins'
    };
  },
  computed: {
  },
 methods: {
   admin() {
     this.menu = 'admin'
     this.componentId = 'admins'
   },
   register() {
     this.menu = 'register'
     this.componentId = 'registers'
   }
 }
}
</script>
<style lang="less" scoped>
  .user-admin {
      .menu {
          margin-left: 20px;
       .menu__item {
           padding: 4px 8px;
           margin-right: 20px;
           cursor: pointer;
           &.menu__item__active {
         border-bottom: 1px solid rgb(125, 195, 228);
       }
       }
       
      }
      .content {
          margin-left: 20px;
          margin-top: 40px;
      }
  }
</style>