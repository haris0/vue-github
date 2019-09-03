<template>
  <div class="container">
    <div class="search">
      <div class="search-title">
        <span>
          Github Search
        </span>
      </div>      
      <md-field :class="messageClass">
        <label>Github id</label>
        <md-input @keyup.enter="goToProfile" @click="onInputClick" v-model="id"></md-input>
        <md-icon>search</md-icon>
        <span class="md-error">Cannot be empty</span>
      </md-field>
      <div class="search-button">
        <md-button @click="goToProfile" class="md-dense md-raised md-primary button-search">Search</md-button>
      </div>
    </div>
  </div>
</template>

<script>

  let self;

  export default {
    name: 'Homepage',
    created(){
      self = this;  
    },
    mounted(){
    },
    data:()=>({
      id:"",
      hasMessages: false
    }),
    computed: {
      messageClass () {
        return {
          'md-invalid': this.hasMessages
        }
      }
    },
    methods:{
      goToProfile: function(){
        if(self.id == ""){
          self.hasMessages= true;
        }else{
          this.$router.push('/profile/'+self.id)
        }
      },
      onInputClick: function(){
        self.hasMessages= false;
      }
    }
  }

</script>

<style scoped>
  .container{
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .search{
    width: 70%;
  }
  .search-title{
    margin: 15px;
    text-align: center;
    font-size: 30px;
    font-family: monospace;
    color: darkgray;
  }
  .search-button{
    text-align: center !important;
  }
  .button-search{
    background-color: gray !important;
  }
</style>