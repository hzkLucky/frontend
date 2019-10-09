import chart, { dispose, getEcharts } from './chart'
import _ from 'lodash'
let createBarChart = async (chartId, data, color, optionCallBack) => {
  let echarts = await getEcharts()
  if (_.isEmpty(data)) {
    dispose(chartId)
    return
  }
  const option = {
    backgroundColor: '#fff',
    grid: {
      left: '4%',
      right: '4%',
      containLabel: true
    },

    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: data.legend,
      right: 10,
      top: 12,
      textStyle: {
        color: "#666"
      },
      itemWidth: 12,
      itemHeight: 10,
      // itemGap: 35
    },
    "dataZoom": [{
      "show": true,
      "height": 12,
      "xAxisIndex": [
        0
      ],
      bottom: '8%',
      left: '4%',
      right: '4%',
      start: 0,
      end: 10,
      handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
      handleSize: '110%',
      handleStyle: {
        color: "#d3dee5",

      },
      textStyle: {
        color: "#fff"
      },
      borderColor: "#90979c"
    }, {
      "type": "inside",
      "show": true,
      "height": 15,
      "start": 1,
      "end": 50
    }],
    xAxis: [{
      type: 'category',
      data: data.columns,
      axisLine: {
        show: true,
        lineStyle: {
          color: "gray",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        rotate: '-30',
        textStyle: {
          color: "#gray",
        }
      },
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        show: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "gray",
          width: 1,
          type: "solid"
        },
      },
      axisTick: {
        show: true
      },
      splitLine: {
        show: true
      }
    }],
    series: [{
      name: data.legend[0],
      type: 'bar',
      barWidth: '15%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#fccb05'
          }, {
            offset: 1,
            color: '#f5804d'
          }]),
          barBorderRadius: 12,
        },
      },
      data: data.data0
    },
    {
      name: data.legend[1],
      type: 'bar',
      barWidth: '15%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#8bd46e'
          }, {
            offset: 1,
            color: '#09bcb7'
          }]),
          barBorderRadius: 11,
        }

      },
      data: data.data1
    },
    ]
  };
  return chart(chartId, option, optionCallBack)
}
export default function (chartId, data, color, optionCallBack) {
  return createBarChart(chartId, data, color, optionCallBack)
}



