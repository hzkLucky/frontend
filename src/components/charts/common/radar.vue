<script>
import charts from "../charts";

export default {
  extends: charts,
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  created() {
    this.showCharts();
  },
  watch: {
    data: {
      immediate: true,
      handler() {
        this.showCharts();
      }
    }
  },
  methods: {
    showCharts() {
      this.createRadarChart(
        this.chartId,
        this.data,
        this.optionCallback
      );
    }
  }
};
</script>
