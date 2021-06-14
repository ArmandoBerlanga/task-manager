<template>
    <div id="tasks">
        <div :class="[task.remember ? 'reminder' : '', 'task-holder']" 
            v-for="task in tasks" :key="task.id"
            @click="removeReminder(task.id)"
        >
            <div class="task-info">
                <h4>{{task.description}}</h4>
                <h4 class="due">{{task.dueDate}}</h4>
            </div>

            <button class="delete" @click="deleteTask(task.id)">X</button>
        </div>
    </div>
</template>

<script>

    import { useStore } from 'vuex';
    import { computed } from 'vue';

    export default {
        name: 'Tasks',

        setup(){

            const store = useStore();
            store.commit('FETCH_TASKS');

            const tasks = computed(() => store.state.tasks);

            function deleteTask(id) {
                store.commit('DELETE_TASK', id);
            }

            function removeReminder(id) {
                store.commit('CHANGE_REMINDER', id);
            }

            return{
                deleteTask,
                removeReminder,
                tasks
            }

        }
    }

</script>

<style lang="scss" scoped>

#tasks {
    margin-top: 10px;
}

.task-holder {
    margin-bottom: 10px;
    background-color: white;
    padding: 10px 5%;
    border-radius: 6px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    transition: transform 250ms;

    &:hover {
        transform: scale(1.02, 1.02);
        background-color: rgba(62, 145, 117, 0.089);
    }

    h4 {
        margin: 0;
    }

    .due {
        color: rgb(185, 183, 183);
    }

    .delete {
        background-color: rgb(177, 32, 32);
        color: white;
        border: 0;
        border-radius: 5px;
        font-weight: bold;
        transition: transform 250ms;
        padding: 0px 10px;

        &:hover{
            transform: scale(1.05, 1.05);
        }

        &:active {
            background-color: rgb(224, 98, 98);
        }
    }
}

.reminder {
    border-left: 4px solid cadetblue;
}

</style>


