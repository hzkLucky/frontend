<template>
   <div class="body">

   </div>
</template>

<script>
export default {
  mounted(){
      // 线段生成器
        let height = 300
        let svg = d3.select('.body').append('svg').attr('height', height).attr('width', height)
      //   let lines = [[80, 80], [200, 100], [200, 200], [100, 200]]
     //   let linePath = d3.line().curve(d3.curveBasis).x(function(d){
     //       return d[0]
     //   }).y(function(d){
     //       return d[1]
     //   })
     //   svg.append('path').attr('d', linePath(lines)).attr('stroke', 'black').attr('stroke-width', '2px').attr('fill', 'none')
    // 区域生成器
      let dataSet = [80, 120, 130, 70, 60, 80]
       let yScale = d3.scaleLinear().domain([0, d3.max(dataSet)]).range([0, height / 2])
       let yScale1 = d3.scaleLinear().domain([0, d3.max(dataSet)]).range([height / 2, 0])
      let areaPath = d3.area().curve(d3.curveBasis).x(function(d, i){
          return 50 + i * 40
      })
      .y0(function(d,i){
          return yScale(d3.max(dataSet))
      })
      .y1(function(d,i ){
          return  yScale( d3.max(dataSet) - d)
      })
      svg.append('path').attr('d', areaPath(dataSet)).attr('fill', 'yellow')
      let yAxis = d3.axisLeft(yScale1).ticks(8)
      let gAxisX = svg.append('g').attr('transform', 'translate(50, 0)').call(yAxis)
      let xScale = d3.scaleLinear().domain([0, dataSet.length]).range([0, (dataSet.length - 1) * 40])
      let xAxis = d3.axisBottom(xScale).ticks(dataSet.length - 1)
      let gAxisY = svg.append('g').attr('transform', 'translate(50, 150)').call(xAxis)
  }
}
</script>

<style>

</style>