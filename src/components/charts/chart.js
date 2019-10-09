import Vue from 'vue'
import echarts from 'echarts'

const getContainerNode = container => {
  return typeof container === 'string' ? document.getElementById(container) : container
}

export const getChart = container => {
  container = getContainerNode(container)
  return container ? echarts.getInstanceByDom(container) : null
}

let chartContainers = []
export const dispose = async container => {
  const chart = await getChart(container)
  if (chart) {
    chart.dispose()
  }
}

export const registerMap = async (type, json) => {
  echarts.registerMap(type, json)
}
export const getBmap = () => require('echarts/extension/bmap/bmap')
// export const getBmap = () => import(/* webpackChunkName: 'bmap' */ 'echarts/extension/bmap/bmap')
export const getEcharts = () => require('echarts')
export default (container, option, optionCallback, clickCallback) => {
  return Vue.nextTick().then(async () => {
    const echarts = await getEcharts()


    if (optionCallback) {
      try {
        await optionCallback(option)
      } catch (e) {
        console.error(e)
      }
    }

    let chart = await getChart(container)
    if (!chart) {
      const containerNode = getContainerNode(container)
      if (!containerNode) {
        return null
      }
      const initOptions = option.initOptions || {}
      chart = echarts.init(containerNode, null, initOptions)
    }

    chart.setOption(option)
    if (clickCallback) {
      if (typeof clickCallback === 'function') {
        chart.on('click', params => {
          try {
            clickCallback(params)
          } catch (e) {
            console.error(e)
          }
        })
      } else {
        console.error('The clickCallback  must be a function')
      }
    }

    if (!chartContainers.includes(container)) {
      chartContainers.push(container)
    }

    return chart
  })
}
