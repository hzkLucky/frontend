<template>
  <div class="box">
   
     <login />
  
   
  </div>
</template>
<script>
 import login from './login'

  export default {
    name: 'Chart',
    components: {
     login
    },
    data() {
      return {
      
      }
    },
    created() {
      
    },
    mounted() {
     
     
    },
    methods: {
     
    
      
       
    
    }
  }
</script>
<style scoped>
  .box {
    width: 100vw;
    height: 100vh;
    background: url('../assets/timg.jpg');
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
