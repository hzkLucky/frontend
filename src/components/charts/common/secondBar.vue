<script>
import charts from "../charts";

export default {
  extends: charts,
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    color: {
      type: Array,
      default: () => {
        return ["#C63E1F", "#fffa66"];
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
      this.createSecondBar(
        this.chartId,
        this.data,
        this.color,
        this.optionCallback
      );
    }
  }
};
</script>
