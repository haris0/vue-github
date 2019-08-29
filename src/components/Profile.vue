<template>
  <div>
    <md-toolbar class="md-accent md-dense toolbar" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Search Github id : {{id}}</h3>
    </md-toolbar>
    <div class="container">

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