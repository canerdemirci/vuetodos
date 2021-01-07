<template>
  <div>
    <AddTodo />
    <Todos :todos="todos" :loading="loading" />
  </div>
</template>

<script>
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';

export default {
  name: "Home",
  data() {
    return {
      loading: true,
    }
  },
  components: {
    Todos,
    AddTodo
  },  
  computed: {
    todos() {
      return this.$store.getters['dbmodule/getTodos'];
    },
  },
  mounted() {
    this.$store.dispatch('dbmodule/bindTodos').then(() => this.loading = false);
  },
};
</script>

<style scoped>

</style>
