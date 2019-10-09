import chart, { getEcharts } from './chart'
let createSecondBar = async (chartId, data, color, optionCallBack) => {
    let echarts = await new getEcharts()
    let option = {
        backgroundColor: "#ffff",
        grid: {
            containLabel: true,
            left: "5%",
            right: "5%",
            top: "15%",
            bottom: "15%",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' }
        },
        "dataZoom": [{
            "show": true,
            "height": 12,
            "xAxisIndex": [
              0
            ],
            bottom: '3%',
            left: '4%',
            right: '4%',
            start: 0,
            end: 50,
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
        legend: {
            textStyle: {
                color: '#080808'
            },
            top: 10,
            data: data.title
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: '#080808'
                    }
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: false,
                },
                axisLabel: {
                    show: false,
                    color: '#080808',
                    rotate: 45,
                },
                data: data.legend,
            }
        ],
        yAxis: [
            {
                type: 'value',
                // name: '税收（亿元）',
                nameTextStyle: {
                    color: '#080808',
                },
                min: 0,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: '#080808'
                    }
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: false,
                },
                axisLabel: {
                    show: true,
                    color: '#080808',
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                // name: '增长（%）',
                nameTextStyle: {
                    color: '#080808',
                },
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#080808'
                    }
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: false,
                },
                axisLabel: {
                    color: '#080808',
                    formatter: '{value}',
                }
            }
        ],
        series: [

            {
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: '#f0f', //百分比颜色
                        },
                        position: 'insideTop',
                        rotate: '-90',
                        offset: [5, -30],
                        //百分比格式
                        formatter: "{c}"
                    }
                },
                name: data.title[0],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: color[0],
                        opacity: 1,
                    }
                },
                data: data.data1,
            },
            {
                name: data.title[1],
                type: 'line',
                yAxisIndex: 1,
                itemStyle: {
                    normal: {

                        color: color[1]
                    }
                },
                data: data.data2

            },
        ]
    };
    return chart(chartId, option, optionCallBack)
}
export default function (chartId, data, color, optionCallBack) {
    return createSecondBar(chartId, data, color, optionCallBack)
}
