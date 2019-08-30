import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Profile from '@/components/Profile'
import ProjectMd from '@/components/ProjectMd'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Homepage',
      component: Homepage
    },
    { 
      path: '/profile/:id',
      component: Profile
    },
    { 
      path: '/:id/:path',
      component: ProjectMd
    }
  ]
})
