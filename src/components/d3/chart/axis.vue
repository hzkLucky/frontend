<template>
   <div class="body">

   </div>
</template>

<script>
export default {
  mounted(){
      // 画柱状图首先
      let barData = [2.5 , 2.1 , 1.7 , 1.3 , 0.9 ]
      let width = 300
      let height = 300
      let padding = 40
      let rectStep = 30
      let rectWidth = 25
      let svg = d3.select('.body').append('svg').attr('width', width).attr('height', height)
      let g = svg.append('g')
      let xScale = d3.scaleLinear().domain([0, d3.max(barData)]).rangeRound([0, 100])

      g.selectAll('rect').data(barData).enter().append('rect').attr('x', function(d,i){
          return padding + i * rectStep
      }).attr('y', function(d, i){
          return height - padding - xScale(d)
      }).attr('width', rectWidth).attr('height', function(d, i){
          return xScale(d)
      }).attr('fill', 'steelblue')
      g.selectAll('text').data(barData).enter().append('text')
      .attr('x', function(d,i){
          return padding + i * rectStep
      })
      .attr('y', function(d,i){
          return height - padding - xScale(d)
      }).text(function(d, i){
          return d
      }).attr('fill', 'white').attr('text-anchor', 'middle').attr('dy', '1em').attr('dx', rectWidth / 2).attr('font-size', 12)
      let xAxis2 = d3.scaleLinear().domain([d3.max(barData), 0]).rangeRound([0, 100])
      let xAxis = d3.axisLeft(xAxis2)
      let gAxis = g.append('g').attr('transform', "translate("+ 30 +", "+  160 +")").call(xAxis) // 平移到(80, 80)
      xAxis.tickFormat(d3.format(",.0f")); //千分位
  }
}
</script>

<style>

</style>