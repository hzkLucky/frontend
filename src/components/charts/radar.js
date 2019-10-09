import chart, { dispose, getEcharts } from './chart'
import _ from 'lodash'
let createRadarChart = async (chartId, data, optionCallBack) => {
  let echarts = await getEcharts()
  if (_.isEmpty(data)) {
    dispose(chartId)
    return
  }


var dataList = data[0];
var maxValue = data[1];

var background = "#fff"; //背景 

//字体基数
var scale = 0.7;

var rich = {
    total: {
        color: "#ffc72b",
        fontSize: 18 * scale,
        align: 'center',
        padding: [1, 0],
    },
    total_text: {
        fontSize: 15 * scale,
        align: 'center'
    },
};

var holeTypeData = data[2];


//option
var option = {

    backgroundColor: background,

    grid: {
        top: "1%",
        left: "1%",
        right: "1%",
        bottom: "1%"
    },
    tooltip: {
        trigger: 'axis'
    },
    radar: [{
        nameGap: 5,
        indicator: holeTypeData,
        center: ['50%', '50%'],
        radius: '80%',
        name: {
            textStyle: {
                fontSize: 15 * scale,
                color: '#666'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#696969',
                width: 1
            },
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: '#fff',
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#696969'
            }
        }
    }],
    legend: {
        selectedMode: false,
        top: '0', // 图例组件离容器顶部的距离
        right: '0%',
        icon: 'none',
        textStyle: {
            fontSize: 15 * scale,
            rich: rich
        }
    },
    series: [{
        type: 'radar',
        animation: false, // 是否开启动画。
        tooltip: {
            trigger: 'item'
        },
        data: [{
            value: dataList,
            name: ''
        }],
        symbolSize: 2,
        itemStyle: {
            normal: {
                borderColor: '#ffc000',
            }
        },
        lineStyle: {
            normal: {
                color: "#ffc000",
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,246,0, 0.9)'
                }, {
                    offset: 0.5,
                    color: 'rgba(255,246,0,0)'
                }, {
                    offset: 1,
                    color: 'rgba(255,246,0, 0.9)'
                }], false)
            }
        }
    }, ]
};
  return chart(chartId, option, optionCallBack)
}
export default function (chartId, data, optionCallBack) {
  return createRadarChart(chartId, data, optionCallBack)
}



