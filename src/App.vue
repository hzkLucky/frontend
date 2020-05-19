<template>
  <div id="app">
    <div class="left" v-if="$route.path !== '/'">
      <nav-menu/>
    </div>
    <div :class="{right: $route.path !== '/'}">
    <div class="title__data-base" v-if="$route.path !== '/'">
      
      <span class="title__btn" @click="logoOut">退出登录</span>
    </div>

    <router-view />
    </div>
  </div>
</template>

<script>
import navMenu from './components/ui/NavMenu'
export default {
  name: "App",
  components: {
    navMenu
  },
  data(){
    return {
    }
  },
    mounted(){
    console.log( process.env.NODE_PATH)
  },
  methods: {
    logoOut() {
      localStorage.removeItem('token')
      this.$router.push('/')
    }  
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F8F9FB;
}
body,
html {
  margin: 0 auto;
}
.title__data-base{
  text-align: right;
  padding: 10px 0;
  margin-right: 16px;
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
.left {
  width: 250px;
  display: inline-block;
  float: left;
  background: #fff;
  min-height: 100vh;
}
.right {
  margin: 0 15px;
  width: calc(100% - 280px);
  display: inline-block;
  min-height: 100vh;
}
@import './assets/less/varilble';
@import './assets/less/app';
</style>
