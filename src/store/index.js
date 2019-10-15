import Vue from 'vue'
import Vuex from 'vuex'
import profile from './modules/profile'

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
    profile
  }
})