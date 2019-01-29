<template>
  <transition name="drop">
    <div class="top-tip" v-show="showFlag" @click.stop="hide">
      <div class="top-center">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      delay: {
        type: Number,
        default: 2000
      }
    },
    data () {
      return {
        showFlag: false
      }
    },
    methods: {
      show () {
        this.showFlag = true
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.hide()
      }, this.delay)
      },
      hide () {
        this.showFlag = false
      }
    }
  }
</script>

<style scoped lang="less">
  @import "~assets/less/common.less";

  .top-tip{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 500;
    background: #fff;
    &.drop-enter-active, &.drop-leave-active{
      transition: all 0.3s
    }
    &.drop-enter, &.drop-leave-to{
      transform: translate3d(0, -100%, 0)
    }
    .top-center{
      width: 100%;
      margin: 0 auto;
      max-width: @maxWidth;
      background: @color;
      overflow: hidden;
    }
  }
</style>
