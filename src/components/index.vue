<template>
  <div class="wraper">
    <div class="demo-badge-container">
      <mu-badge content="10" class="demo-icon-badge" circle secondary>
        <mu-icon value="notifications"/>
      </mu-badge>
      <mu-badge content="12" circle secondary>
        <mu-icon-button icon="notifications"/>
      </mu-badge>
      {{obj.a}}
      <div>
        {{routers}}
      </div>
    </div>
    <mu-raised-button label="Primary" class="demo-raised-button" primary @click="change"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      obj: {
        a: 10,
        routers: ''
      }
    }
  },
  mounted () {
    console.log('start mounted')
  },
  created () {
    this.routers = this.username()
    this.changeObj()
  },
  methods: {
    changeObj () {
      this.obj.a = 20
    },
    change () {
      this.$set(this.obj, 'a', 30)
      this.$router.push('/home')
    },
    username () {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }
  }
}
</script>
<style lang="scss" scoped>
  .indexContent{
    width: 100%;
  }
  .demo-badge-container{
    padding-top: 24px;
  }
  .demo-icon-badge {
    padding: 12px;
    margin-right: 16px;
  }
</style>
