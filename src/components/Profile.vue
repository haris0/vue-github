<template>
  <div>
    <md-toolbar class="md-accent md-dense toolbar" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Search Github id : {{id}}</h3>
    </md-toolbar>
    <div class="container">

      <div v-if="isLoading" class="center" >
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>

      <div v-else>
        <div v-if="profile == null">
          <md-empty-state
            md-icon="highlight_off"
            md-label="Not Font"
            md-description="The github account you are looking for was not found, please try again">
            <md-button class="md-primary md-raised button-back" @click="goBack">Back to Home</md-button>
          </md-empty-state>
        </div>
        <div v-else>
          <md-subheader class="header">Profile</md-subheader>
          <md-card>
            <md-card-header>
              <md-avatar>
                <img :src="profile.avatar_url" alt="Avatar">
              </md-avatar>
              <div class="md-title">{{profile.name}}</div>
              <div class="md-subhead">{{profile.login}}</div>
            </md-card-header>
            <md-card-content>
              {{profile.bio}}
            </md-card-content>
          </md-card>
          
          <md-subheader>Project</md-subheader>
          <div v-for="repo in repos" v-bind:key="repo.full_name" @click="goToProject(repo.name)" class="list-project">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">{{repo.name}}</div>
                  <div class="md-subhead">{{repo.language}}</div>
                </md-card-header>
                <md-card-content>
                  {{repo.description}}
                </md-card-content>
                <md-card-actions>
                  <md-button>Open</md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '../services/config'
  import {mapGetters} from 'vuex'
  import { async } from 'q';

  let self;

  export default {
    name: 'Profile',
    created(){
      self = this;
    },
    mounted(){
      self.id = self.$route.params.id
      self.$store.dispatch('GET_PROFILE', self.id)
    },
    data:()=>({
      id: "",
    }),
    computed : {
      ...mapGetters(['profile']),
      ...mapGetters(['repos']),
      ...mapGetters(['isLoading']),
    },
    methods:{
      goToProject: function(path){
        this.$router.push('/'+self.id+'/'+path)
      },
      goBack: function(){
        window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }
    }
  }

</script>

<style scoped>
  .toolbar{
    background-color: gray!important;
  }
  .center{
    text-align: center;
    margin: 100px;
  }
  .list-project{
    margin-bottom: 10px;
  }
  .header{
    margin-top: 10px;
  }
  .button-back{
    background-color: gray !important;
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