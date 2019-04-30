const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
const userModel = mongoose.model('user')
const jwt = require('jsonwebtoken')
const screct = 'chatting'
router.post('/register', async ctx => {
  const userInfo = ctx.request.body
  if (userInfo && userInfo.username && userInfo.password && userInfo.avator) {
    let { username } = userInfo
    let result = await userModel.findOne({ name: username }).exec()
    if (!result) {
      // 生成token, secret作为密钥，expiresIn为失效时间，看情况，一般也不会太久
      const token = jwt.sign(userInfo, screct, { expiresIn: '5h' })
      // eslint-disable-next-line new-cap
      let newUser = new userModel({
        ...userInfo,
        name: username,
        token
      })
      let response = await newUser
        .save()
        .then(res => {
          return {
            code: 0,
            data: {
              username: res.name,
              avator: res.avator,
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
  console.log(ctx.request.body)
  const userInfo = ctx.request.body
  if (userInfo && userInfo.username && userInfo.password) {
    let { username, password } = userInfo
    let result = await userModel.findOne({ name: username }).exec()
    if (result && result.name === username && result.password === password) {
      // 生成token, secret作为密钥，expiresIn为失效时间，看情况，一般也不会太久
      const token = jwt.sign(userInfo, screct, { expiresIn: '5h' })
      await userModel.findOneAndUpdate({name: username}, {token}).exec()
      ctx.body = {
        code: 0,
        data: {
          user: username,
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
