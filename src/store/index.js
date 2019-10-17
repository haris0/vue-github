import Vue from 'vue'
import Vuex from 'vuex'
import config from '../services/config'
import profile from './modules/profile'
import projectMd from './modules/projectMd'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading : true,
  },
  getters : {
    isLoading: state => {
      return state.isLoading
    },
  },
  mutations: {
    CHANGE_LOADING : (state,payload) => {
      state.isLoading = payload
    },
  },
  actions:{},
  modules : {
    profile,
    projectMd
  }
})