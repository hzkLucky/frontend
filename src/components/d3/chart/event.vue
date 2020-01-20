<template>
    <div>
        <p id="mypara"></p>
        <p class="drag"></p>
        <p id="zoom"></p>
    </div>
</template>

<script>
export default {
  mounted(){
       // 缩放
    let accent = d3.scaleOrdinal(d3.schemeAccent); // d3中随机颜色分布

    let drag = d3.drag().on('start', function(d){
        console.log('拖拽开始')
    })
     .on('end', function(d,i){
         console.log('拖拽结束')
     })
     .on('drag', function(d,i){
         console.log(d)
         d3.select(this).attr('cx', d.x = d3.event.x)
         .attr('cy', d.y = d3.event.y)
     })
    d3.select('#mypara').on('click', function(){
        d3.select(this).text('Thank you')
    })
    let circles = [
 [171.6340993500175, 172.84505997358065],
 [108.47539908693315, 217.94349717498153],
  [334.359327160042, 395.4367227259662],
 [160.20876542872912, 358.3487259752524],
  [312.71323380994374, 289.7699776032827],
 [113.18685009697751, 443.3102033185451],
   [173.50033138813245, 326.78154356880077],
  [281.0332303188156, 295.4510365407154],
  [300.89447659606816, 416.70560099668603],
  [237.682225416437, 212.1373458118241],
   [325.8722483542097, 334.8803162990725],
  [328.43075743011354, 414.2875985204008],
 [376.79980725396, 375.89038773517456]
    ]
    d3.select('.drag').append('svg').attr('width', 600).attr('height', 600)
    .selectAll('circle').data(circles).enter().append('circle')
    .attr('cx', function(d,i){
        return d[0]
    })
    .attr('cy', function(d,i){
        return d[1]
    })
    .attr('r', function(d,i){
        return 20
    }).attr('fill', function(d,i){
        return accent(i)
    }).call(drag)
  
        
     
  
}
}
</script>

