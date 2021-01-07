<template>
    <div class="colors-container">
        <div @click="onClick('#ff6e6e')"></div>
        <div @click="onClick('#ff3737')"></div>
        <div @click="onClick('#ca0101')"></div>
    </div>
</template>

<script>
export default {
    name: 'ColorPicker',
    methods: {
      onClick(color) {
        this.$store.commit('uimodule/setTodoColor', color);
      }
    }
}
</script>

<style scoped>
.colors-container {
  margin-top: 1rem;
  display: flex;
  width: 100%;
}

.colors-container div {
  padding: 2rem;
  flex: 1;
  cursor: pointer;
  transition: .3s all;
}

.colors-container div:hover {
  transform: scale(1.1);
}

.colors-container div:nth-child(1) {
  background:#ff6e6e;
}
.colors-container div:nth-child(2) {
  background: #ff3737;
}
.colors-container div:nth-child(3) {
  background: #ca0101;
}
</style>