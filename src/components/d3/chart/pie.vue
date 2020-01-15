<template>
   <div class="body">
       
   </div>
</template>

<script>
export default {
  mounted(){
      let dataset = [
          {
          startAngle: 0,
          endAngle: Math.PI * 0.6
          },
          {
          startAngle: Math.PI * 0.6,
          endAngle: Math.PI
          },
          {
          startAngle: Math.PI,
          endAngle: Math.PI * 1.7
          },
          {
          startAngle: Math.PI * 1.7,
          endAngle: Math.PI * 2
          }
      ]
       let accent = d3.scaleOrdinal(d3.schemeAccent); // d3中随机颜色分布
       let svg = d3.select('.body').append('svg').attr('widht', 300).attr('height', 300)
       let arcPath = d3.arc().innerRadius(50).outerRadius(100)
       svg.selectAll('path').data(dataset).enter().append('path')
       .attr('d', function(d, i){
           return arcPath(d)
       }).attr('transform', 'translate(150, 150)').attr('stroke', 'black')
       .attr('stroke-width', '2px').attr('fill', function(d,i){
           return accent(i)
       })
       svg.selectAll('text').data(dataset).enter().append('text')
       .attr('transform', function(d,i){
           return 'translate(150, 150)' + 'translate('+ arcPath.centroid(d) +')'
       })
       .attr('text-anchor', 'middle').attr('fill', 'white').attr('font-size', '14px').text(function(d,i){
           return Math.floor((d.endAngle - d.startAngle) * 180 / Math.PI) + "°"
       })
       // 对角生成器
    //    let datasetDiagonal = {
    //        source: {
    //            x: 100,
    //            y: 100
    //        },
    //        target: {
    //            x: 300,
    //            y: 200
    //        }
    //    }
    //    let diagonal = d3.svg.diagonal()
    //    svg.append('path').attr('d', diagonal(datasetDiagonal))
    //    .attr('fill', 'none').attr('stroke', 'black')
    //    .attr('stroke-width', 2)
  }
}
</script>

<style>

</style>