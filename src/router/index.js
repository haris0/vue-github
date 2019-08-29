import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import { MdButton, MdField} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdField)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }
  ]
})
