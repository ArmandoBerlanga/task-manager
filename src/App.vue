<template>

  <div id="app">

    <nav>
      <HeaderBar/>
    </nav>

    <main>
       <router-view/>
    </main>

    <footer></footer>

  </div>

</template>

<script>

  import HeaderBar from './components/HeaderBar.vue';

  export default {
    components: { HeaderBar },
    name: 'App',
    setup() {   
      return{
      } 
    },
    
  }

</script>


<style lang="scss">

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  body{
    margin: 0;
  }

</style>
