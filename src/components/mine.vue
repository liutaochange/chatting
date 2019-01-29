<template>
  <div class="mine-wraper">
    <div class="mine-avatar-wraper">
      <mu-avatar :size="50">
        <img :src="avatar">
      </mu-avatar>
    </div>
    <mu-paper :z-depth="1" class="mine-list-wrap">
      <mu-list>
        <mu-list-item button :ripple="true" v-for="(item, index) in mine" :key="index" @click="handleItem(index)">
          <mu-list-item-action>
            <mu-icon :value="item.value"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>{{item.name}}</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-paper>
    <div class="mine-buuton-wamp">
      <mu-button full-width color="secondary" @click="handleLogout">退出</mu-button>
    </div>
  </div>
</template>

<script>
import { clear } from '@/utils/store'
export default {
  name: 'mine',
  data() {
    return {
      mine: [
        {
          value: 'face',
          name: '修改图像'
        },
        {
          value: 'redeem',
          name: '赞助一下'
        },
        {
          value: 'grade',
          name: 'github地址'
        },
        {
          value: 'replay',
          name: '清除缓存'
        }
      ],
      avatar: require('@/assets/images/uicon.jpg')
    }
  },
  methods: {
    handleItem(index) {
      console.log(index)
    },
    handleLogout() {
      clear()
      this.$router.push({path: '/login', name: 'login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mine-wraper{
  position: absolute;
  bottom: 50px;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
}
.mine-avatar-wraper{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items:center;
}
.mine-list-wrap {
  width: 100%;
  .mu-item-action{
    min-width: 40px;
  }
}
.mine-buuton-wamp{
  width: 80%;
  margin: 40px auto 50px;
}
</style>
