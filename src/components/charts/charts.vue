<template>
  <div
    :id="chartId"
    :style="{ width: getChartWidth(), height: getChartHeight(), 'min-height': getChartMinHeight() }"
    class="chart-container"
  />

</template>
<script>
import { getChart } from "./chart";
import uuid from "uuid";
export default {
  props: {
    width: {
      type: [String, Number],
      required: false
    },
    height: {
      type: [String, Number],
      required: false
    },
    minHeight: {
      type: [String, Number],
      required: false
    },
    optionCallback: {
      type: Function,
      required: false
    }
  },
  computed: {
    chartId() {
      return uuid();
    }
  },
  methods: {
    getChartWidth() {
      return typeof this.width !== "undefined"
        ? typeof this.width === "string"
          ? this.width
          : this.width + "px"
        : "100%";
    },
    getChartHeight() {
      if (this.flexible) {
        return "auto";
      }
      return typeof this.height !== "undefined"
        ? typeof this.height === "string"
          ? this.height
          : this.height + "px"
        : "100%";
    },
    getChartMinHeight() {
      if (this.flexible) {
        return "auto";
      }
      return typeof this.minHeight !== "undefined"
        ? typeof this.minHeight === "string"
          ? this.minHeight
          : this.minHeight + "px"
        : "300px";
    }
  }
};
</script>

