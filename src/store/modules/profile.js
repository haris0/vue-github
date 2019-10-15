import config from '../../services/config'

export default {
  state: {
    profile : null,
    repos : []
  },
  getters : {
    profile : state => {
      return state.profile
    },
    repos: state => {
      return state.repos
    }
  },
  mutations: {
    SET_PROFILE : (state,payload) => {
      state.profile = payload
    },
    SET_REPOS : (state,payload) => {
      state.repos = payload
    }
  },
  actions : {
    GET_PROFILE : async (context, id) => {
      try{
        let response = await config.HTTP.get(config.getProfile+id)
        context.commit('CHANGE_LOADING', false)
        context.commit('SET_PROFILE', response.data)
        context.dispatch('GET_REPOS', response.data.repos_url)
      }catch(error){
        context.commit('CHANGE_LOADING', false)
        console.log(error.response);
      }
    },
    GET_REPOS : async (context, repos_url) => {
      try{
        let response = await config.HTTP.get(repos_url)
        context.commit('SET_REPOS',response.data)
      }catch(error){
        console.log(error.response);
      }
    }
  }
}