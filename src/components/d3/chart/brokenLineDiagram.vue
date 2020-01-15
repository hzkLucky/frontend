<template>
    <div class="body">

    </div>
</template>

<script>
export default {
  mounted(){
       let width = 400
      let height = 300
   let svg = d3.select('.body').append('svg').attr('width', width).attr('height', height)
      let dataSet = [
          {
              country: 'china',
              gdp: [
                  [2000, 1798],
                  [2001, 3902],
                  [2002, 3902],
                  [2003, 3902],
                  [2004, 3902],
                  [2005, 3902],
                  [2006, 3902],
                  [2007, 3902]
              ]
          },
           {
              country: 'japan',
              gdp: [
                  [2000, 7902],
                  [2001, 2902],
                  [2002, 3902],
                  [2003, 4902],
                  [2004, 5902],
                  [2005, 6902],
                  [2006, 1902],
                  [2007, 8902]
              ]
          },
      ]
      let padding = 30
      let gdmax = 0
      for( var i = 0; i< dataSet.length; i++){
          var currGap = d3.max(dataSet[i].gdp, function(d){
              return d[1]
          })
          if(currGap > gdmax){
          gdmax = currGap
      }
      }
      
      let xScale = d3.scaleLinear().domain([2000, 2007]).range([0,width - 80])
      let yScale = d3.scaleLinear().domain([0,gdmax * 1.1]).range([height - 80, 0])
      let linePath = d3.line().curve(d3.curveBasis).x(function(d,i){
          return xScale(d[0])
      }).y(function(d,i){
          return yScale(d[1])
      })
       let accent = d3.scaleOrdinal(d3.schemeAccent); // d3中随机颜色分布
      svg.selectAll('path').data(dataSet).enter().append('path').transition().duration(2000)
      .attr('d', function(d,i){
          return linePath(d.gdp)
      }).attr('fill', 'none')
      .attr('stroke', function(d,i){
          return accent(i)
      })
      .attr('stroke-width', 2).attr('transform', 'translate(50, 30)')
    let xScale1 = d3.scaleLinear().domain([2000, 2007]).range([0,width - 80])
      let yScale1 = d3.scaleLinear().domain([0,gdmax * 1.1]).range([ height - 80, 0])
      let AxisX = d3.axisBottom(xScale1).tickFormat(d3.format('d'))
      let gAxisX = svg.append('g').attr('transform', 'translate(50, '+ 250 +')').call(AxisX).selectAll('text').attr('transform', 'rotate(30)').attr('text-anchor', 'start')
      let AxisY = d3.axisLeft(yScale1).ticks(10)
      let gAxisY = svg.append('g').attr('transform', 'translate(50, '+ 30 +')').call(AxisY).selectAll('text')

  }
}
</script>

<style>

</style>