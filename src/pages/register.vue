<template>
  <div class="register-wraper">
    <div class="input-wamp">
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="账号" prop="username" :rules="usernameRules" label-float>
          <mu-text-field v-model="validateForm.username" prop="username" color="secondary" underline-color="secondary"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules" label-float>
          <mu-text-field type="password" v-model="validateForm.password" prop="password" color="secondary" underline-color="secondary"></mu-text-field>
        </mu-form-item>
      </mu-form>
      <mu-button full-width color="secondary" class="m-login-btn" @click="handleRegister">注册</mu-button>
      <p class="m-login-text" @click="handleLogin">已有账号， 去登录</p>
      <tips :color="bgColor" ref="tips">{{tipsText}}</tips>
    </div>
  </div>
</template>
<script>
import tips from '@/base/tips'
import Store from '@/utils/store'
import { register } from '@/api/index'
import { randomNumber } from '@/utils/util'
export default {
  name: 'register',
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: '必须填写账号' },
        { validate: val => val.length >= 3, message: '账号长度大于3' }
      ],
      passwordRules: [
        { validate: val => !!val, message: '必须填写密码' },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: '密码长度大于3小于10'
        }
      ],
      validateForm: {
        username: '',
        password: ''
      },
      tipsText: '',
      bgColor: '#ff4081',
      avator: [
        'https://web-blog.oss-cn-beijing.aliyuncs.com/avatar1.jpg',
        'https://web-blog.oss-cn-beijing.aliyuncs.com/avatar2.jpg',
        'https://web-blog.oss-cn-beijing.aliyuncs.com/avatar3.jpg',
        'https://web-blog.oss-cn-beijing.aliyuncs.com/avatar4.jpg',
        'https://web-blog.oss-cn-beijing.aliyuncs.com/avatar5.jpg'
      ]
    }
  },
  components: {
    tips
  },
  methods: {
    handleRegister() {
      this.$refs.form.validate().then((result) => {
        if (result) {
          let params = {
            ...this.validateForm,
            avator: this.avator[randomNumber(0, 5)]
          }
          register(params).then(res => {
            if (res.data.code === 0) {
              Store.set('__USER_INFO__', res.data.data)
              this.tipsText = '注册成功'
              this.$refs.tips.show()
              setTimeout(() => {
                this.$router.push({path: '/index.html', name: 'index'})
              }, 2000)
            } else {
              this.tipsText = res.data.msg
              this.$refs.tips.show()
            }
          }).catch(() => {
            this.tipsText = '系统异常，请重试'
            this.$refs.tips.show()
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    handleLogin() {
      this.$refs.form.clear()
      this.$router.push({path: '/login.html', name: 'login'})
    }
  },
  beforeDestroy() {
    this.$refs.tips.hide()
  }
}
</script>
<style lang="less" scoped>
.register-wraper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  .input-wamp {
    width: 80%;
    margin: 50px auto;
    overflow: hidden;
    .mu-form-item__focus {
      color: #ff4081;
    }
    .mu-input {
      width: 100%;
    }
    .m-login-btn {
      margin-top: 30px;
    }
    .m-login-text{
      text-align: center;
      margin-top: 10px;
      cursor: pointer;
      line-height: normal;
    }
  }
}
</style>
