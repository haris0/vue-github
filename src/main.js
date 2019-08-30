// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {MdButton, 
        MdField, 
        MdToolbar, 
        MdEmptyState,
        MdCard,
        MdProgress,
        MdAvatar,
        MdDivider,
        MdSubheader,
        MdRipple
        }from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.use(VueSimpleMarkdown)
Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdToolbar)
Vue.use(MdEmptyState)
Vue.use(MdCard)
Vue.use(MdProgress)
Vue.use(MdAvatar)
Vue.use(MdDivider)
Vue.use(MdSubheader)
Vue.use(MdRipple)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
