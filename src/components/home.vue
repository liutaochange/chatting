<template>
  <div class="wraper">
    <mu-paper :z-depth="1" class="home-list-wrap">
      <mu-list>
        <mu-sub-header>最近聊天记录</mu-sub-header>
        <mu-list-item avatar button :ripple="true" v-for="(item, index) in history" :key="index" @click="handleItem(index)">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="item.avatar">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>{{item.name}}</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <mu-divider></mu-divider>
      <mu-list>
        <mu-sub-header>客服</mu-sub-header>
        <mu-list-item avatar button :ripple="true" v-for="(item, index) in service" :key="index" @click="handleService">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="item.avatar">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>{{item.name}}</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      history: [
        {
          avatar: require('../assets/images/avatar1.jpg'),
          name: 'Mike Li'
        },
        {
          avatar: require('../assets/images/avatar2.jpg'),
          name: 'Maco Mai'
        },
        {
          avatar: require('../assets/images/avatar3.jpg'),
          name: 'Alex Qin'
        },
        {
          avatar: require('../assets/images/avatar4.jpg'),
          name: 'Allen Qun'
        }
      ],
      service: [
        {
          avatar: require('../assets/images/avatar5.jpg'),
          name: 'Gaia Zhou'
        }
      ]
    }
  },
  methods: {
    handleItem(index) {
      console.log(index)
    },
    handleService() {
      console.log('service')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.wraper{
  position: absolute;
  bottom: 50px;
  top: 0;
  left: 0;
  right: 0;
}
.home-list-wrap {
  width: 100%;
}
</style>
