<template>
    <li @click.self="onClickToggle" :style="{background: !this.todo.completed ? this.todo.color : 'green'}">
      <span>{{this.todo.todo}}</span><i class="fas fa-trash-alt" @click.self="onClickDelete" />
    </li>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
      onClickToggle() {
        this.$store.dispatch('dbmodule/toggleCompleteTodo', this.todo);
      },
      onClickDelete() {
        this.$store.dispatch('dbmodule/deleteTodo', this.todo.id);
      }
    }
}
</script>

<style scoped>
li {
  padding: 1rem;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .5s all ease-in-out;
}

li > span:first-letter {
  text-transform: uppercase;
}

li > i {
  cursor: pointer;
  visibility: hidden;
}

li > i:hover {
  opacity: .7;
}

li:hover {
  background: #eee !important;
  color: #000 !important;
}

li:hover > i {
  visibility: visible;
}
</style>