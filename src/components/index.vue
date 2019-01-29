<template>
  <div class="index-wrapper">
    <router-view></router-view>
    <div class="m-footer-wraper">
      <mu-tabs :value.sync="active" color="secondary" full-width>
        <mu-tab to="/home">
          <mu-icon value="home"></mu-icon>主页
        </mu-tab>
        <mu-tab to="/mine">
          <mu-icon value="account_box"></mu-icon>我的
        </mu-tab>
      </mu-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      active: 0
    }
  },
  mounted() {},
  created() {},
  methods: {},
  watch: {
    '$route'(to, from) {
      // 对路由变化作出响应...
      console.log(to)
      console.log(from)
    }
  }
}
</script>
<style lang="less" scoped>
.index-wrapper{
  position: relative;
  width: 100%;
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
