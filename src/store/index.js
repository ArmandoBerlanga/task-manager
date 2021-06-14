import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },

  mutations: {

    FETCH_TASKS(state) {
      const request = new Request('http://localhost:5000/lista');
      fetch(request)
        .then (function(response) {
          return response.json();
        })  

        .then(function(data) {
          state.tasks = data;
        })
    },

    DELETE_TASK(state, id){
      const request = new Request(`http://localhost:5000/lista/${id}`);  
      fetch(request, {
        method: 'DELETE'
      })
      .then(function(response){
        if (response.status === 200)
          if (confirm('You want to erase the task?')) {
            state.tasks = state.tasks.filter((task) => task.id !== id);
          }
          else
            alert('Error al deleting');
      })
    },

    CHANGE_REMINDER (state, id) {

      let upTask = {};

      let request = new Request(`http://localhost:5000/lista/${id}`);
      fetch(request)
        .then (function(response) {
          return response.json();
        })  

        .then(function(data) {
          upTask = data;
          upTask.remember = !upTask.remember;

          request = new Request(`http://localhost:5000/lista/${id}`);  
          fetch(request, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(upTask)
          })

            .then (function(response) {
              return response.json();
            })  

            .then(function(info) {
              state.tasks = state.tasks.map((task) => 
              task.id === id ? { ...task, remember: info.remember } : task
              )
            })

        })    
    },

    ADD_TASK (state, data){
      data.id = state.tasks.length + 1;

      const request = new Request('http://localhost:5000/lista');      
      fetch(request, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then (function(response) {
          return response.json();
        })  

        .then(function(info) {
          alert('The task has been added correctly');
          state.tasks = [...state.tasks, info];
        })
    },

  },

  actions: {
  },

  modules: {
  }
})
