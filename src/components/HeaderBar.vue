<template>

  <div class="HeaderBar">
    <div class="nav-container">
        <h1>Task Tracker</h1>
        <button @click="onClick()" :class="[!state.active ? 'hide' : '']">
          {{state.active ? 'Add Task' : 'Hide Form'}}
          </button>
      </div>

       <AddTask :show="state.active"/>
  </div>
 
</template>

<script>

  import AddTask from '../components/AddTask.vue';
  import { reactive } from 'vue'

  export default {
      components: { AddTask },
      name: 'HeaderBar',
      setup() {

        const state = reactive({
          active: true,
        });

        function onClick() {
          state.active = !state.active;
        }

        return{
          state,
          onClick,
        }
      },
  }

</script>

<style lang="scss" scoped>

  .HeaderBar{
    border: 2px solid rgba(128, 128, 128, 0.071);
    border-radius: 6px;
    background-color: #F4F9F9;
    margin: 10px 5%;
    padding: 10px 5%;
  }

  .nav-container {
    
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .hide {
      background-color: rgb(179, 174, 174);
    }

    h1 {
      margin: 0;
    }

    button {
      border: 0;
      border-radius: 6px;
      padding: 0px 15px;
      background-color: cadetblue;
      color: white;
      font-weight: bold;
      transition: transform 250ms;

      &:hover {
        transform: scale(1.05, 1.05);
      }

      &:active {
        background-color: rgb(252, 196, 11);
      }
    }
  }

</style>