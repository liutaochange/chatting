<template>
  <div class="login-wraper">
    <div class="input-wamp">
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="账号" prop="username" :rules="usernameRules" label-float>
          <mu-text-field v-model="validateForm.username" prop="username" color="secondary" underline-color="secondary"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules" label-float>
          <mu-text-field type="password" v-model="validateForm.password" prop="password" color="secondary" underline-color="secondary"></mu-text-field>
        </mu-form-item>
      </mu-form>
      <mu-button full-width color="secondary" class="m-login-btn" @click="handleLogin">登录</mu-button>
      <p class="m-login-text" @click="handleRegister">无账号，去注册</p>
    </div>
    <tips :color="bgColor" ref="tips">{{validateText}}</tips>
  </div>
</template>
<script>
import Store from '@/utils/store'
import tips from '@/base/tips'
import { login } from '@/api/index'
export default {
  name: 'login',
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
      validateText: '',
      bgColor: '#ff4081'
    }
  },
  methods: {
    handleLogin() {
      this.$refs.form.validate().then((result) => {
        if (result) {
          login(this.validateForm).then(res => {
            if (res.data.code === 0) {
              Store.set('__USER_INFO__', res.data.data)
              this.validateText = '登录成功'
              this.$refs.tips.show()
              setTimeout(() => {
                this.$router.push({path: '/index.html', name: 'index'})
              }, 2000)
            } else {
              this.validateText = res.data.msg
              this.$refs.tips.show()
            }
          }).catch(() => {
            this.validateText = '系统异常，请重试'
            this.$refs.tips.show()
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    handleRegister() {
      this.$refs.form.clear()
      this.$router.push({path: '/register.html', name: 'register'})
    }
  },
  components: {
    tips
  },
  beforeDestroy() {
    this.$refs.tips.hide()
  }
}
</script>
<style lang="less" scoped>
.login-wraper {
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
