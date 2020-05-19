<template>
   <div>

   </div>
</template>

<script>
export default {
  mounted(){
     let timer =  d3.timer(
          function(t){
              if(t > 300){
                 timer.stop()
                 // 其他API timer.restart 重启定时器 
              }
          }, 1500
      )
    let timer2 =  d3.timeout(function(t){
          if(t > 300){
           timer2.restart()
          }
      }, 6000)
      let time3 = d3.interval(function(t){
          if(t > 5000){
              time3.stop()
          }
      }, 1000)
  }
}
</script>

<style>

</style>