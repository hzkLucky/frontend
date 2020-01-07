<template>
  <div>
    <div class="box">
      <label
        :style="{ transform: !foucsPoint && value === '' ? 'translateY(0) scale(1)' : 'translateY(-18px) scale(.75)' }"
        aria-hidden="true" class="v-label theme--light" style="left: 0; right: auto; position: absolute;">
        {{ label }}
      </label>
      <input v-if="!isTextArea" v-model="value" :class="{ inputActive: foucsPoint }"
        :style="{ height: inputHeight, borderStyle: disabled ? 'dotted' : 'solid' }" :disabled="disabled"
        aria-label="First Name" class="input" @focus="InputFocus" @blur="inputBlur">
      <textarea v-else v-model="value" :class="{ inputActive: foucsPoint }"
        :style="{ height: inputHeight, borderStyle: disabled ? 'dotted' : 'solid' }" :disabled="disabled"
        cols="30" rows="10" aria-label="First Name" class="input textarea" @focus="InputFocus" @blur="inputBlur"
         />
      <div :class="{ long: foucsPoint, short: blurPoint }" class="box2" />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'VuetifyInput',
    props: {
      label: {
        type: String,
        required: false
      },
      inputHeight: {
        type: String,
        default: '34px'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      isTextArea: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        foucsPoint: false,
        blurPoint: false,
        value: ''
      }
    },
    methods: {
      setValue(val) {
        this.value = val
      },
      InputFocus() {
        this.foucsPoint = true
        this.blurPoint = false
      },
      inputBlur() {
        if (this.value) {
          this.foucsPoint = true
        }
        this.blurPoint = true
        this.foucsPoint = false
      }
    }
  }
</script>
<style lang="less" scoped>
  .box {
    position: relative;

    .v-label {
      color: #aaa !important;
      font-size: 14px;
      font-weight: 400;
    }
    .labelActive {
      transform: translateY(-18px) scale(0.75);
    }
    .input {
      background-color: #fff;
      outline: none;
      border-width: 0;
      transition: 0.2 ease-in-out !important;
      width: 100%;
      border-bottom-color: #ccc;
      border-bottom-width: 1px;
    }
    .textarea {
      display: block;
    }
    .box2 {
      content: '';
      position: absolute;
      width: 100%;
      bottom: -0.2px;
      height: 1px;
      overflow: hidden;
      background-color: #ccc;
    }
    .short {
      animation: animate1 0.3s linear;
      animation-fill-mode: forwards;
    }
    .long {
      animation: animate 0.3s linear;
      animation-fill-mode: forwards;
    }
    .inputActive {
      caret-color: #4ace50;
    }

    @keyframes animate {
      0% {
        background-color: blueviolet;
        transform: scaleX(0);
        transform-origin: center center 0;
      }
      25% {
        background-color: blueviolet;
        transform: scaleX(0.25);
        transform-origin: center center 0;
      }
      50% {
        background-color: blueviolet;
        transform: scaleX(0.5);
        transform-origin: center center 0;
      }

      75% {
        background-color: blueviolet;
        transform: scaleX(0.75);
        transform-origin: center center 0;
      }
      100% {
        background-color: blueviolet;
        transform: scaleX(1);
        transform-origin: center center 0;
      }
    }

    @keyframes animate1 {
      0% {
        background-color: blueviolet;
        transform: scaleX(1);
        transform-origin: center center 0;
      }
      25% {
        background-color: blueviolet;
        transform: scaleX(0.75);
        transform-origin: center center 0;
      }
      50% {
        background-color: blueviolet;
        transform: scaleX(0.5);
        transform-origin: center center 0;
      }

      75% {
        background-color: blueviolet;
        transform: scaleX(0.25);
        transform-origin: center center 0;
      }
      100% {
        background-color: blueviolet;

        transform: scaleX(0);
        transform-origin: center center 0;
      }
    }
    .blurActive {
      transform: translateY(0) scale(1);
    }
  }
</style>
