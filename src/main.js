import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNs50B0hyNQP3sL_oCF1tyo-mkWG2Z5DU",
    authDomain: "mytodo-a2fcc.firebaseapp.com",
    projectId: "mytodo-a2fcc",
    storageBucket: "mytodo-a2fcc.appspot.com",
    messagingSenderId: "550471427969",
    appId: "1:550471427969:web:4a5143648837f1d6ac6a80"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const { Timestamp } = firebase.firestore;
export { db, Timestamp };

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
