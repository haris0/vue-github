<template>
  <div>
    <md-toolbar class="md-accent md-dense toolbar" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Search Github id : {{id}}</h3>
    </md-toolbar>
    <div class="container">
      <md-empty-state
        md-icon="highlight_off"
        md-label="Not Font"
        md-description="The github account you are looking for was not found, please try again">
        <md-button class="md-primary md-raised">Back to Home</md-button>
      </md-empty-state>
    </div>
  </div>
</template>

<script>
  let self;
  export default {
    name: 'Profile',
    created(){
      self = this;
    },
    mounted(){
      self.id = self.$route.params.id
    },
    data(){
      return {
        id: "",
      }
    },
    methods:{
      
    }
  }

</script>

<style scoped>
  .toolbar{
    background-color: gray!important;
  }
  .container{
    
  } 
  
</style>