<template>
  <div >
    <md-toolbar class="md-accent md-dense toolbar" md-elevation="1">
      <h3 class="md-title" style="flex: 1">{{id}}/{{path}}</h3>
    </md-toolbar>
    <div class="container">
      <md-card>
        <md-card-content>
          <vue-simple-markdown :source="rawReadme"></vue-simple-markdown>
        </md-card-content>
        </md-card>
      <div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { async } from 'q';
import {mapGetters} from 'vuex'
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
      self.$store.dispatch('GET_READMEMD', {id :self.id, path : self.path})
    },
    data:()=>({
      id : "",
      path : "",
    }),
    computed:{
      ...mapGetters(['rawReadme']),
    },
    methods:{
    }
  }

</script>

<style scoped>
  .toolbar{
    background-color: gray!important;
  }
  @media (max-width: 600px) {
    .container{
      margin: 0px 10px;
    }
  }

  @media (max-width: 1024px) and (min-width: 601px) {
    .container{
      margin: 0px 50px;
    }
  }

  @media (min-width: 1025px) {
    .container{
      margin: 0px 20%;
    }
  }
</style>