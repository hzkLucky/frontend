<template>
   <div class="body">
      
   </div>
</template>

<script>
export default {
  mounted(){
      let xAxisWidth = 300
      let yAxisHeight = 300
      let padding = 30
      let scatterPointData = [
          [0.5, 0.5], [0.7, 0.8], [0.4, 0.9], [0.11, 0.32], [0.88, 0.25],
          [0.75, 0.12], [0.5, 0.1], [0.2, 0.3], [0.4, 0.1], [0.6, 0.7]
      ]
      let svg = d3.select('.body').append('svg').attr('width', xAxisWidth).attr('height',yAxisHeight)
      let xScale = d3.scaleLinear().domain([0, 1.2 * d3.max(scatterPointData, function(d){
          return d[0]
      })]).range([0, xAxisWidth - padding])
      let yScale = d3.scaleLinear().domain([0, 1.2 * d3.max(scatterPointData, function(d){
          return d[1]
      })]).range([0, yAxisHeight - padding])
     let circle = svg.selectAll('circle').data(scatterPointData).enter().append('circle')
     .attr('fill', 'black').attr('cx', function(d,i){
         return padding + xScale(d[0])
     }).attr('cy', function(d,i){
         return padding + yScale(d[1])
     }).attr('r', 5)
        let xScale1 = d3.scaleLinear().domain([0, 1.2 * d3.max(scatterPointData, function(d){
          return d[0]
      })]).range([xAxisWidth - padding, 0])
     let xAxis = d3.axisLeft(xScale1)
     let gAxisX = svg.append('g').attr('transform', 'translate('+ 30 +', '+ 0 +')')
     gAxisX.call(xAxis)
  
     let yAxis = d3.axisBottom(yScale)
     let gAxisY = svg.append('g').attr('transform', 'translate('+ 30 +', '+ 270 +')')
     gAxisY.call(yAxis)
  }
}
</script>
<style>

</style>