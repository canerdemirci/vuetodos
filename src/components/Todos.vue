<template>
    <div class="todos-container">
      <div v-if="todos.length == 0 && !loading"><i class="fas fa-check-circle fa-3x" /></div>
      <div v-if="loading"><i class="fas fa-spinner fa-spin fa-3x" /></div>
      <ul v-else>
        <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" />
      </ul>
    </div>
</template>

<script>
import TodoItem from '../components/TodoItem';

export default {
    name: 'Todos',
    props: ['todos', 'loading'],
    components: {
        TodoItem
    }
}
</script>

<style scoped>
.todos-container {
  width: 20vw;
  margin: 50px auto;
}

.todos-container ul {
  list-style: none;
}

.todos-container div {
    text-align: center;
}

.todos-container div i {
    margin: 3rem auto;
    color: royalblue;
}
</style>