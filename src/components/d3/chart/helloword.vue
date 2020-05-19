<template>
   <div class="body">
     <p></p>
     <p></p>
     <p></p>
     <p></p>
   </div>
</template>

<script>
export default {
  mounted(){
    let datas = [{name: '张三'}, {name: '李四'}, {name: '王五'}]
    // d3.select('.body').selectAll('p').data(datas).text( (d, i) => {
    //   return d
    // })
    // 元素操作
    // d3.select('.body').append('a').text('我是在后面插入的元素')
    // d3.select('.body').insert('a', '#insert').text('我是在前面插入的元素')
    // d3.select('.body').selectAll('a').remove()
    // enter update exit
    // enter操作
    // d3.select('.body').selectAll('p').data(datas).enter().append('p').text( (d) => {
    //   return d
    // })
    // exit 操作
    // var p = d3.select('.body').selectAll('p').data(datas)
    // p.text(function(d, i) {
    //   return d
    // })
    // p.exit().remove()
    // d3.select('.body').selectAll('p').data(datas).text(function(d, i){
    //   return d.name
    // })
    // d3.select('.body').selectAll('p').data(datas).exit().remove()
    // classed
    // d3.select('.body').selectAll('p').classed('red', true)
    // each函数的使用
    // d3.select('.body').selectAll('p').attr('class', 'red').each(function( d, i) {
    //   d3.select(this).append('h3').text(i)
    // })
    // 选取p的方式
    // d3.select('.body > p') 或者 d3.select('.body').selectAll('p')
    let renderData = [10, 15, 30, 50, 80, 65, 55, 30, 20, 10, 8]
    function render(data){
      // 可以使用filter / each / sort 等函数对元素进行过滤
      let update = d3.select('.body').selectAll('p').data(data)
      update.attr('class', 'red').text(function(d, i){
        return d
      }).style('width', function( d, i){
        return (d * 3) + 'px'
      }).filter(function(d, i){
        return d !== 10
      })
      update.enter().append('p')
      .attr('class', 'red').style('width', function(d, i){
        return (d * 3) + 'px'
      }).text(function(d, i){
        return d
      }).filter(function(d, i){
        return d !== 10
      })
      update.exit().remove()
    }
    setInterval(function(){
      renderData.shift()
      renderData.push(Math.round(Math.random() * 100))
      render(renderData) 
    }, 1000)
    // d3中求取p分位点的值，p的范围为[0, 1].数组需要先排序
    var numbers = [3, 1, 10]
    numbers.sort(d3.ascending) //排序
    d3.quantile(numbers, 0) // 返回1
    d3.quantile(numbers, 0.75) // 返回6.5
    d3.quantile(numbers, 1) // 返回10
    // d3.zip用多个数组来制作数组的数组参数是任意多个数组，输出是数组的数组
    var zip = d3.zip(
      [1, 2, 3],
      ['张三', '李四', '王五'],
      [true, false, true]
    )
    // 结果返回的是 [ [1, '张三', true], [2, '李四', false], [3, '王五', true]]
    // 映射map
    var dataset = [
      {id: 1000, color: 'red'},
      {id: 1001, color: 'blue'},
      {id: 1002, color: 'green'}
    ] 
    // 以数组dataset构建映射并以其中各项的id为键
    var d3map = d3.map(dataset, function(d, i){
      return d.id
    })
    d3map.set(1003, {id: 1003, color: 'yellow'})
    d3map.remove(1002)
    d3map.keys() 
    d3map.values()
    d3map.entries()
  }
}
</script>

<style>
   .red{
     color: rgb(224, 226, 215);
     background: rgb(0, 225, 255);
   }
</style>