<script>
import charts from "../charts";

export default {
  extends: charts,
  props: {
    color: {
      type: String,
      default: "#F3B600"
    },
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
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
      this.createBarChart(
        this.chartId,
        this.data,
        this.color,
        this.optionCallback
      );
    }
  }
};
</script>
