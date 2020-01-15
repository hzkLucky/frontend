<template>
  <div class="body">
     <!-- <el-button @click="sort">排序</el-button> -->
  </div>
</template>

<script>
export default {
  data(){
      return {
         barData: [23, 53, 112, 34, 70, 123]
      }
  },
  methods: {
     sort(){
        d3.selectAll('svg').remove()
        this.barData =  this.barData.sort(function(a, b){
              return a - b
          })
      },
    renderBar(id, data){
      let padding = 20
    let rectStep = 30
    let rectWidth = 25
    let width = 200
    let height = 200
    let line = d3.scaleLinear().domain([0, 200]).range([0, 200])
      let svg = d3.select(id).insert('svg').attr('width', width).attr('height', height)
      svg.selectAll('rect').data(data).enter().append('rect')
      .attr('width', rectWidth).attr('x', (d, i) => {
          return padding + rectStep * i
      }).attr('y', function(d,i){
          return height -padding -d
      }).attr('fill', 'steelBlue').transition().duration(3000).attr('height', (d) => {
          return line(d)
      })

      svg.selectAll('text').data(data).enter().append('text').attr('x', (d, i) => {
          return padding + rectStep * i
      }).attr('y', function( d, i){
          return height - padding - d
      }).text(function(d, i){
          return d
      }).attr('dx', rectWidth / 2).attr('dy', '1em').attr('text-anchor', 'middle')
      .attr('font-size', '12px').attr('fill', '#fff')
    }
  },
  watch: {
    barData: {
        immediate: true,
        handler(){
            this.renderBar('.body', this.barData)
        }
    }
  },
  mounted(){
    this.renderBar('.body', this.barData)
    setTimeout(() => {
      d3.selectAll('svg').remove()
      this.barData = [123, 32, 22, 21, 143, 123]  
    }, 3000);
  }
}
</script>

<style>

</style>