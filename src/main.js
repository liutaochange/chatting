// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 light 主题
import 'assets/css/reset.css'
Vue.use(MuseUI)

function rem () {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  const htmlDom = document.getElementsByTagName('html')[0]
  if (htmlWidth >= 540) {
    htmlWidth = 540
  }
  htmlDom.style.fontSize = htmlWidth / 10 + 'px'
}
rem()
window.addEventListener('resize', function () {
  rem()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
