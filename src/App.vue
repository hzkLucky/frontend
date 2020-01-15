<template>
  <div id="app">
    <div class="left" v-if="$route.path !== '/'">
      <nav-menu/>
    </div>
    <div :class="{right: $route.path !== '/'}">
    <div class="title__data-base" v-if="$route.path !== '/'">
       <span class="title__btn" @click="writerAPen" style="background: #3366CC">记一笔</span>
      <span class="title__btn" @click="logoOut">退出登录</span>
    </div>
    <pen ref="dialog"></pen>

    <router-view />
    </div>
  </div>
</template>

<script>
import navMenu from './components/ui/NavMenu'
import pen from '../src/components/ui/writeAPen'
export default {
  name: "App",
  components: {
    navMenu,
    pen
  },
  data(){
    return {
    }
  },
  methods: {
    logoOut() {
      this.$router.push('/')
    },
    writerAPen(){
     this.$refs.dialog.open()
    }
  }
};
</script>

<style>
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
}
.title__btn{
      background: rgb(240, 235, 235);
    padding: 5px 30px;
    font-size: 12px;
    color: #999;
    opacity: 0.9;
    cursor: pointer;
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
</style>
