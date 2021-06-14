<template>
  <div class="home">

    <div class="container">
      <Tasks/>
    </div>

  </div>
</template>

<script>

  import Tasks from '../components/Tasks.vue'
  
  export default {
    name: 'Home',
    components: { Tasks },
    
    setup() {   

      return{
  
      } 
    },    
  }
</script>

<style lang="scss" scoped>

  .container {

    border: 2px solid rgba(128, 128, 128, 0.071);
    border-radius: 6px;
    background-color: #F4F9F9;
    padding: 10px 5%;
    margin: 0px 5%;
    height: 470px;
    overflow: scroll;

    .add-task{
      background-color: white;
      border-radius: 6px;
      padding: 20px 5%;
    }

  }

</style>
