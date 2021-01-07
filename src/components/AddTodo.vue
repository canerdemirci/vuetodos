<template>
    <div class="formcontainer">
      <form @submit.prevent="onSubmit">
        <input :style="{'background-color': todoColor}" type="text" v-model="todoInput" placeholder="Görev ekleyin..." required />
      </form>
      <ColorPicker />
    </div>
</template>

<script>
import { Timestamp } from '../main';
import ColorPicker from './ColorPicker';

export default {
    name: 'AddTodo',
    components: {
        ColorPicker
    },
    data() {
        return {
            todoInput: '',
        }
    },
    computed: {
        todoColor() {
            return this.$store.state.uimodule.todoColor;
        }
    },
    methods: {
        onSubmit() {
            const todo = {
                todo: this.todoInput,
                color: this.todoColor,
                completed: false,
                createdAt: Timestamp.now()
            };
            this.$store.dispatch('dbmodule/addTodo', todo);
        }
    }
}
</script>

<style scoped>
.formcontainer {
  width: 20vw;
  margin: 50px auto;
}

.formcontainer input {
  display: block;
  width: 100%;
  color: #fff;
  padding: 1rem;
}

.formcontainer input::placeholder {
  color: #fff;
}
</style>