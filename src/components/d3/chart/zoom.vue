<template>
  <div class="body">
  </div>
</template>

<script>
import { downloadable } from 'd3-downloadable'
export default {
  mounted() {
    let accent = d3.scaleOrdinal(d3.schemeAccent); // d3中随机颜色分布
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
    let width = 600
    let height = 600
    let svg = d3.select(".body").append("svg").attr('width', width).attr('height', height).attr('id', 'downloadSvg')
    let g = svg.append('g')
    g.selectAll('circle').data(circles).enter().append('circle').attr('cx', function(d,i){
        return d[0]
    }).attr('cy', function(d,i){
        return d[1]
    }).attr('r', 10).attr('fill', function(d,i){
        return accent(i)
    })
    svg.call(d3.zoom().extent([[0,0], [200, 200]])
    .scaleExtent([1,1.5]).on('zoom', function(){
        g.attr('transform', d3.event.transform)
    })
    )
    d3.select('svg#downloadSvg').call(downloadable()) // 可以右键去下载图片
  }
};
</script>

<style>
</style>