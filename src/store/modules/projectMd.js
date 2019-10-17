import config from '../../services/config'

export default {
  state: {
    rawReadme : ''
  },
  getters : {
    rawReadme : state =>{
      return state.rawReadme
    }
  },
  mutations: {
    SET_READMEMD : (state, payload) =>{
      state.rawReadme = payload
    }
  },
  actions : {
    GET_READMEMD : async (context, payload) => {
      context.commit('SET_READMEMD', '')
      try{
        let response = await config.README.get(payload.id+"/"+payload.path+"/"+config.getReadmeHtml)
        console.log(response)
        context.commit('SET_READMEMD', response.data)
      }catch(error){
        console.log(error.response);
      }
    }
  }
}