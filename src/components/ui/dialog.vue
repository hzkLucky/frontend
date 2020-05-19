<template>
  <el-dialog ref="dialog" :visible.sync="dialogVisible" :width="width" :custom-class="customClass"
    :class="{ 'pure-model': pureModal }" :close-on-click-modal="canCloseOnClickModal"
    :close-on-press-escape="canCloseOnPressEscape" :top="top" center>
    <div slot="title" class="dialog-header">
      <span class="title">{{ title }}</span>
    </div>
    <slot />
    <span v-if="!pureModal && (showConfirmButton || showCancelButton)" slot="footer" class="dialog-footer">
      <el-button v-if="showCancelButton" class="btn-cancel" @click="dialogVisible = false">
        {{ cancelLabel ? cancelLabel : $t('cancel') }}
      </el-button>
      <el-button v-if="showConfirmButton" class="btn-ok" type="primary" @click="$emit('confirm')">
        {{ confirmLabel ? confirmLabel : $t('ok') }}
      </el-button>
    </span>
  </el-dialog>
</template>
<script>
  export default {
    name: 'Dialog',
    props: {
      title: {
        type: String,
        required: false,
        default: ''
      },
      confirmLabel: {
        type: String,
        required: false,
        default: ''
      },
      cancelLabel: {
        type: String,
        required: false,
        default: ''
      },
      top: {
        type: String,
        default: '15vh'
      },
      width: {
        type: String,
        default: '50%'
      },
      customClass: {
        type: String,
        default: ''
      },
      closeOnClickModal: {
        type: Boolean,
        default: false
      },
      closeOnPressEscape: {
        type: Boolean,
        default: true
      },
      pureModal: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        dialogVisible: false
      }
    },
    computed: {
      showConfirmButton() {
        return typeof this.confirmLabel !== 'undefined'
      },
      showCancelButton() {
        return typeof this.cancelLabel !== 'undefined'
      },
      canCloseOnClickModal() {
        return this.pureModal ? false : this.closeOnClickModal
      },
      canCloseOnPressEscape() {
        return this.pureModal ? false : this.closeOnPressEscape
      }
    },
    methods: {
      open() {
        this.dialogVisible = true
        this.$nextTick(() => {
          this.$focus()
        })
      },
      close() {
        this.dialogVisible = false
      }
    }
  }
</script>
<style lang="less">
  @active-btn-background-color: #0b9da4;
  @color1: #20a0ff;
  @color2: #55a8fd;

  /deep/ .el-dialog__footer {
    padding: 40px 20px 20px 0 !important;
  }

  .el-dialog--small {
    width: 800px;

    &::-webkit-scrollbar {
      display: none;
    }

    .el-dialog__footer {
      padding: 0 20px 15px !important;
    }
  }

  .el-dialog__wrapper {
    &::-webkit-scrollbar {
      display: none;
    }

    &.pure-model {
      .el-dialog__header {
        display: none;
      }

      .el-dialog__body {
        padding: 0;
      }

      .el-dialog__footer {
        display: none;
      }
    }

    .el-dialog__header {
      border-radius: 1px;
      background-color: #f6f6f6;
      height: 40px;
      padding: 0 !important;
      /deep/ .el-dialog__headerbtn{
        top: 10px;
      }
      .el-dialog__title {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
      }
    }

    .el-dialog__body {
      &::-webkit-scrollbar {
        display: none;
      }

      .el-form {
        max-height: 90vh;
        overflow: auto;

        .el-form-item {
          margin-top: 10px;

          .el-form-item__label {
            font-weight: 100;
          }
        }
      }

      .el-tree {
        border: 0;

        .el-tree-node__expand-icon:not(.is-leaf) {
          border-left-color: @color1;
        }

        .node-label {
          display: inline-block;

          .level1 {
            color: @color1;
          }
        }

        .el-progress {
          display: inline-block;
          width: 260px;

          .el-progress-bar__outer {
            background-color: #d8d8d8;
            border-radius: 3px;
          }

          .el-progress-bar__inner {
            background-color: @color1;
            border-radius: 3px;
          }
        }

        .score {
          margin-left: 20px;

          span {
            margin-left: 10px;
          }
        }

        &:last-child {
          .el-tree-node__expand-icon:not(.is-leaf) {
            border-left-color: @color2;
          }

          .node-label {
            .level1 {
              color: @color2;
            }
          }

          .el-progress-bar__inner {
            background-color: @color2;
          }
        }
      }

      /deep/ .el-dialog__footer {
        text-align: right;
      }
    }
  }

  /deep/ .el-dialog__headerbtn {
    top: 10px !important;
  }

  /deep/ .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
</style>
<style lang="less" scoped>

  .el-button {
    line-height: 0.5;
  }

  .btn-ok,
  .btn-cancel {
    width: 120px;
    height: 40px;
  }

  .btn-cancel {
    border-radius: 8px;
    background-color: rgb(252 229 231);
    border: 1px solid rgb(252 229 231);
    font-size: 12px;
    color: rgb(232 65 78);
  }

  .btn-ok {
    border-radius: 8px;
    background-color: rgb(224 233 253);
    font-size: 12px;
    color: rgb(36 99 239);
  }

  .dialog-header {
    height: 40px;
    background-color: #fff;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid rgb(234 237 241);

    .title {
      color: rgb(27 32 70);
      font-size: 16px;
      float: left;
      margin-left: 20px;
      line-height: 40px;
    }

    .logo {
      width: 80px;
    }
  }
</style>
