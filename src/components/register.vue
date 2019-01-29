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
    </div>
  </div>
</template>
<script>
import { saveUser } from '@/utils/store'
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
      }
    }
  },
  methods: {
    handleRegister() {
      this.$refs.form.validate().then((result) => {
        if (result) {
          saveUser(this.validateForm)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    handleLogin() {
      this.$router.push({path: '/login', name: 'login'})
    }
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
