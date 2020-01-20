<template>
  <div class="body">

  </div>
</template>

<script>
export default {
  mounted(){
      let data = [
          ['联想', 233],
          ['三星', 123],
          ['华为', 231],
          ['小米', 333]
      ]
      let pieLayout = d3.pie().value(function(d,i){
          return d[1]
      })
      let pieData = pieLayout(data)
      let width = 200
      let height = 250
      let outRadius = width / 3
      let innerRadius = 0
      let padding = 30
      let accent = d3.scaleOrdinal(d3.schemeAccent); // d3中随机颜色分布
      let svg = d3.select('.body').append('svg').attr('width', width).attr('height', height).attr('padding', padding)
      let arc = d3.arc().innerRadius(innerRadius).outerRadius(outRadius)
      let arcs = svg.selectAll('g').data(pieData).enter().append('g').attr('transform', 'translate('+ (width / 2 )+', '+ (height / 2)+')')
      arcs.append('path').attr('fill', function(d,i){
        return accent(i)
      }).attr('d', function(d,i){
        return arc(d)
      })
      arcs.append('text').attr('transform', function(d,i){
        let x = arc.centroid(d)[0] * 1.4
        let y = arc.centroid(d)[1] * 1.4
        return 'translate('+ x +', '+ y +')'
      }).attr('text-anchor', 'middle').attr('font-size', 12)
      .text(function(d){
       let precent = Number(d.value) / d3.sum(data, function(d,i){
          return d[1]
        }) * 100
        return precent.toFixed(1) + '%'
      })
      arcs.append('line').attr('stroke', 'black')
      .attr('x1', function(d){
        return arc.centroid(d)[0] * 2
      }).attr('y1', function(d){
        return arc.centroid(d)[1] * 2
      })
      .attr('x2', function(d){
        return arc.centroid(d)[0] * 2.2
      }).attr('y2', function(d){
        return arc.centroid(d)[1] * 2.2
      })
      arcs.append('text').attr('transform', function(d,i){
        let x = arc.centroid(d)[0] * 2.6
        let y = arc.centroid(d)[1] * 2.6
        return 'translate('+x+', '+y+')'
      }).attr('font-size', 12)
      .attr('text-anchor', 'middle')
      .text(function(d){
        return d.data[0]
      })
  }
}
</script>

<style>

</style>