<template>
    <div id="login">
        <Modal v-if="modalshow" :title="modalTitle" :message="modalMessage"/>
        <h1>Giriş</h1>
        <form @submit.prevent="onSubmit">
            <input v-model="email" type="email" placeholder="E-Posta" required />
            <input v-model="password" type="password" placeholder="Parola" required />
            <input type="submit" value="Giriş" />
        </form>
        <router-link to="/register">Kaydol</router-link>
    </div>
</template>

<script>
import store from '../store/index';
import Modal from '../components/Modal';

export default {
    name: 'Login',
    components: {
        Modal
    },
    data() {
        return {
            email: '',
            password: '',
            modalshow: false,
            modalTitle: '',
            modalMessage: ''
        }
    },
    methods: {
        onSubmit() {
            let input = { email: this.email, password: this.password };
            store.dispatch('auth/signIn', input).then(result => {
                this.modalshow = true;
                this.modalTitle = 'Hata';
                this.modalMessage = result;
            });
        }
    }
}
</script>

<style scoped>
a {
    display: block;
    margin: .5rem auto 0 auto;
    text-align: center;
}

h1 {
    text-align: center;
}

#login {
    padding: 2rem;
    border-radius: 5px;
    width: 350px;
    margin: 10vh auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
}

#login form {
    display: flex;
    flex-direction: column;
}

#login form input {
    display: block;
    margin: 1rem;
}
</style>