const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
const userModel = mongoose.model('user')
const jwt = require('jsonwebtoken')
const screct = 'chatting'
router.post('/register', async ctx => {
  const userInfo = ctx.request.body
  if (userInfo && userInfo.user && userInfo.password && userInfo.type) {
    let { user } = userInfo
    let result = await userModel.findOne({ name: user }).exec()
    if (!result) {
      // 生成token, secret作为密钥，expiresIn为失效时间，看情况，一般也不会太久
      const token = jwt.sign(userInfo, screct, { expiresIn: '5h' })
      // eslint-disable-next-line new-cap
      let newUser = new userModel({
        ...userInfo,
        name: user,
        token
      })
      let response = await newUser
        .save()
        .then(res => {
          return {
            code: 0,
            data: {
              user,
              type: res.type,
              token: res.token
            }
          }
        })
        .catch(err => {
          console.log(err)
          return {
            code: 1,
            msg: '注册失败，请重试'
          }
        })
      ctx.body = response
    } else {
      ctx.body = {
        code: 1,
        msg: '用户名已被占用，请重新输入'
      }
    }
  } else {
    ctx.body = {
      code: 1,
      msg: '请求参数错误'
    }
  }
})

router.post('/login', async ctx => {
  const userInfo = ctx.request.body
  if (userInfo && userInfo.user && userInfo.password) {
    let { user, password } = userInfo
    let result = await userModel.findOne({ name: user }).exec()
    if (result && result.name === user && result.password === password) {
      // 生成token, secret作为密钥，expiresIn为失效时间，看情况，一般也不会太久
      const token = jwt.sign(userInfo, screct, { expiresIn: '5h' })
      await userModel.findOneAndUpdate({name: user}, {token}).exec()
      ctx.body = {
        code: 0,
        data: {
          user: user,
          avator: result.avator,
          token
        },
        msg: '登录成功'
      }
    } else {
      ctx.body = {
        code: 1,
        msg: '用户名和账号不匹配',
        data: {}
      }
    }
  } else {
    ctx.body = {
      code: 1,
      msg: '请求参数错误'
    }
  }
})
module.exports = router
