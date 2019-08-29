import axios from 'axios'

export default {
    name: 'config',
    getProfile: 'users/',
    HTTP: axios.create({ 
        baseURL: 'https://api.github.com/',     
        timeout:30000,
    }),
    data() {
      return {
      }
    }
   }