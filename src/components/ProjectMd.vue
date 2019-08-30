<template>
  <div >
    <md-toolbar class="md-accent md-dense toolbar" md-elevation="1">
      <h3 class="md-title" style="flex: 1">{{id}}/{{path}}</h3>
    </md-toolbar>
    <div class="container">
        <div></div>
    </div>
  </div>
</template>

<script>
import { async } from 'q';
import config from '../services/config'

  let self;

  export default {
    name: 'ProjectMd',
    created(){
      self = this;
    },
    mounted(){
      self.id = self.$route.params.id
      self.path = self.$route.params.path
      self.getReadmeHtml();
    },
    data() {
      return {
        id : "",
        path : "",
        rawReadme : ""
      }
    },
    methods:{
      getReadmeHtml : async() => {
        try{
          let response = await config.README.get(self.id+"/"+self.path+"/"+config.getReadmeHtml)
          console.log(response)
          self.rawReadme = response.data
        }catch(error){
          console.log(error.response);
        }
      }
    }
  }

</script>

<style scoped>
  .toolbar{
    background-color: gray!important;
  }
  @media (max-width: 600px) {
    .container{
      margin: 5px 10px;
    }
  }

  @media (max-width: 1024px) and (min-width: 601px) {
    .container{
      margin: 10px 50px;
    }
  }

  @media (min-width: 1025px) {
    .container{
      margin: 10px 20%;
    }
  }
</style>