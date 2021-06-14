<template>
    <div id="add-task" v-show="!show">
        <h3>Task add forms</h3>
        <form action="" @submit.prevent="addToList">

            <div class="holder">
                <label for="description">Description</label>
                <input type="text" name="description" v-model="state.description">
            </div>

            <div class="holder">
                <label for="date">Date & Time</label>
                <input type="text" name="date" v-model="state.date">
            </div>

            <div class="holder-checkbox">
                <label for="remember">Set Reminder</label>
                <input type="checkbox" name="remember" v-model="state.reminder">
            </div>

            <button>SAVE TASK</button>

        </form>
    </div>
</template>

<script>

import { reactive } from 'vue';
import { useStore } from 'vuex';

export default {
    name:'AddTask',
    props: {
      show: Boolean
    },
    setup() {
        const state = reactive ({
            description: '',
            date: '',
            reminder: false,
        })

        const store = useStore();

        function addToList () {

            var data = {
                "id": 0, 
                "description": state.description,
                "dueDate": state.date,
                "remember": state.reminder
            };

            store.commit('ADD_TASK', data);

            state.description = '';
            state.date = '';
            state.reminder = false;
        }

        return {
            state,
            addToList,
        }
    },
}

</script>

<style lang="scss" scoped>

#add-task{
    background-color: white;
    border-radius: 6px;
    padding: 12px 2%;
    margin: 10px 0px;

    h3 {
        margin: 5px 0px;
    }   
}

form {
    display: flex;
    flex-flow: column wrap;

    label{
        font-weight: bold;
    }

    input{
        padding: 8px 2%;
        border: 0;
        border-radius: 6px;
        background-color: #f4f4f9;
    }

    .holder {
        display: flex;
        flex-flow: column wrap;
        padding: 5px 2%;
    }

    .holder-checkbox {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        padding: 5px 2%;
    }

    button {
        margin: 5px 2%;
        border: 0;
        border-radius: 6px;
        padding: 8px;
        background-color: black;
        color: white;
        transition: transform 250ms;

        &:hover {
            transform: scale(1.05, 1.05);
        }

        &:active {
            background-color: rgb(66, 65, 65)
        }
    }
}

</style>
