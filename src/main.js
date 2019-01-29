// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/less/reset.less'
import 'muse-ui/lib/styles/base.less'
import { Button, List, Tabs, Icon, Avatar, Paper, Divider, SubHeader, GridList, Form, TextField, Dialog } from 'muse-ui'
import theme from 'muse-ui/lib/theme'
theme.use('light') // 使用 light 主题
Vue.use(Button).use(List).use(Tabs).use(Icon).use(Avatar).use(Paper).use(Divider).use(SubHeader).use(GridList).use(Form).use(TextField).use(Dialog)

;(function(window, doc) {
  let docEl = doc.documentElement
  let resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let resizeHandle = function() {
    let WIDTH = docEl.clientWidth
    if (WIDTH >= 750) {
      WIDTH = 750
    }
    let size = 200 * (WIDTH / 750)
    docEl.style.fontSize = size + 'px'
  }
  window.addEventListener(resizeEvent, resizeHandle, false)
  resizeHandle()
}(window, document))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
