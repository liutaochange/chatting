<template>
  <div class="index-wrapper">
    <router-view></router-view>
    <div class="m-footer-wraper">
      <mu-tabs :value.sync="active" color="secondary" full-width>
        <mu-tab to="/home.html">
          <mu-icon value="home"></mu-icon>主页
        </mu-tab>
        <mu-tab to="/mine.html">
          <mu-icon value="account_box"></mu-icon>我的
        </mu-tab>
      </mu-tabs>
    </div>
    <tips :color="bgColor" ref="tips">{{tipsText}}</tips>
  </div>
</template>
<script>
import tips from '@/base/tips'
export default {
  name: 'index',
  data() {
    return {
      active: 0,
      tipsText: '',
      bgColor: '#ff4081'
    }
  },
  mounted() {},
  created() {},
  components: {
    tips
  },
  methods: {},
  watch: {
    '$route'(to, from) {
      // 对路由变化作出响应...
      if (to.name === 'home') {
        this.active = 0
      } else if (to.name === 'mine') {
        this.active = 1
      }
    }
  }
}
</script>
<style lang="less" scoped>
.index-wrapper{
  position: absolute;
  width: 100%;
  height: 100%;
}
.m-footer-wraper {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  .mu-tabs{
    height: 50px;
    .mu-tab{
      height: 100%;
    }
    .mu-icon{
      margin-bottom: 0 !important;
      margin-top: -6px;
    }
  }
}
</style>
