import createBarChart from './barChart'
import createSecondBar from './secondBar'
import createRadarChart from './radar'

export default vue => {
    vue.prototype.createBarChart = createBarChart,
    vue.prototype.createSecondBar = createSecondBar,
    vue.prototype.createRadarChart = createRadarChart
}
