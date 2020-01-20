<template>
  <div class="body">
  </div>
</template>

<script>
export default {
  mounted() {
    let matrix = [
      [11975, 5871, 8916, 2868],
      [1951, 10048, 2060, 6171],
      [8010, 16145, 8090, 8045],
      [1013, 990, 940, 6907]
    ];
    let innerRadius = 150;
    let outerRadius = 150;
    let width = 600;
    let height = 600;
    let chordData = d3.chord().padAngle(0.1); // 线图之间的距离
    let chords = chordData(matrix);
    let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
    let svg = d3
      .select(".body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    let accent = d3.scaleOrdinal(d3.schemeAccent); // d3中随机颜色分布
    let group = svg
      .append("g").attr('class','gBox')
      .selectAll("g")
      .data(chords.groups)
      .join('g')
    group
      .append("path")
      .attr("fill", function(d, i) {
        return accent(i);
      })
      .attr("stroke", function(d, i) {
        return accent(i);
      })
      .attr("d", function(d, i) {
        return arc(d);
      });
    const ribbon = d3.ribbon().radius(innerRadius);  // 弦数据通常传递给 d3.ribbon 来显示相互之间的流量关系。
    svg
      .append("g").attr('class','gBox')
      .attr("fill-opacity", 0.67)
      .selectAll("path")
      .data(chords)
      .enter()
      .append("path")
      .attr("d", (d, i) => {
        return ribbon(d);
      })
      .attr("fill", (d, i) => {
        return accent(i);
      })
      .attr("stroke", (d, i) => {
        return accent(i);
      });
  }
};
</script>
<style lang="less" scoped>
  /deep/.gBox{
     transform: translate(250px, 150px) !important;
  }
</style>