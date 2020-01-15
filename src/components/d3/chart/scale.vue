<template>
  <div class="body">

  </div>
</template>

<script>
export default {
  data(){
      return {

      }
  },
  mounted(){
      let linear = d3.scaleLinear().domain([-20, 20]).range([0, 100])
      console.log('linear5' + linear(5))
      linear.clamp(true)
      console.log('linear15' + linear(15))
      console.log('invert' + linear.invert(15))
      console.log('ticks' + linear.ticks(5))
    // 指数和对数比例尺
    let pow = d3.scalePow().exponent(3).domain([0, 10]).range([0, 200]).clamp(true)
     console.log(pow(15))
    // 量子和分位比例尺 
    let quantize = d3.scaleQuantize().domain([0, 50]).range(['red', 'blue', 'green', 'yellow', 'black'])
    console.log(quantize(1))
    console.log(quantize(3))
    console.log(quantize(5.9999))
    console.log(quantize(10))
    let r = [21, 32, 12, 43, 24] 
    let svg = d3.select('.body').append('svg').attr('width', 400).attr('height', 400)
    svg.selectAll('circle').data(r).enter().append('circle').attr('cx', function(d,i){
        return 50 + i * 30
    }).attr('cy', 50)
    .attr('r', function(d, i){
        return d
    }).attr('fill', function(d){
        return quantize(d)
    })
    // 阙值比例尺
    let threshold = d3.scaleThreshold().domain([10, 20, 30]).range(['red', 'grenn', 'blue', 'black'])
    console.log(threshold(5))
    // 序数比例尺 通过一些离散的值去得到另一些离散的值
    let ordinal = d3.scaleOrdinal().domain([1, 2, 3, 4, 5]).range([10, 80, 30, 40, 50])
    console.log(ordinal(2)) // 输出80
    console.log(ordinal(8)) // 输入的值不再定义域中， 输出10
    // d3中颜色生成方案  https://github.com/xswei/d3-scale-chromatic
  }
}
</script>
range
<style>

</style>