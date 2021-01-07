import firebase from 'firebase/app';
import 'firebase/auth';
import router from '../../router/index';

const state = () => ({
    user: null,
});

//const getters = {
//}

const mutations = {
    setUser: (state, payload) => state.user = payload
};

const actions = {
    async signIn({ commit }, input) {
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(input.email, input.password);
            commit('setUser', user.user);
            router.push({ name: 'Home' });
        } catch (error) {
            return 'Hatalı kullanıcı adı ya da parola girdiniz.';
        }
    }
};

export default {
    namespaced: true,
    state,
    //getters,
    mutations,
    actions
}