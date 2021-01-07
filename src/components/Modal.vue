<template>
    <div v-if="show" class="modal">
        <div>
            <header>{{ title }}</header>
            <main>{{ message }}</main>
            <footer><button @click="show = !show">Kapat</button></footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: [
        'title',
        'message',
    ],
    data() {
        return {
            show: true
        }
    }
}
</script>

<style scoped>
.modal {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
}

.modal *:first-letter {
    text-transform: capitalize;
}

.modal > div {
    background: #fff;
    border-radius: 5px;
    width: 30vw;
    padding: 2rem;
    margin: 20vh auto;
    display: flex;
    flex-direction: column;
}

.modal header {
    font-weight: bold;
    font-size: 1.4rem;
}

.modal main {
    margin: 1rem 0 2rem 0;
}

button {
    padding: 1rem;
    border: none;
    background: rgb(255, 0, 85);
    color: #fff;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    margin: auto;
    display: block;
}
</style>