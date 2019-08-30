import axios from 'axios'

export default {
    name: 'config',
    getProfile: 'users/',
    getReadmeHtml: 'master/README.md',
    README: axios.create({
      baseURL: 'https://raw.githubusercontent.com/',
      timeout:30000,
    }),
    HTTP: axios.create({ 
        baseURL: 'https://api.github.com/',
        timeout:30000,
    }),
    data() {
      return {
      }
    }
   }