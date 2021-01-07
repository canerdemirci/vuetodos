import Vue from "vue";
import Vuex from "vuex";
import auth from './modules/auth';
import dbmodule from './modules/dbmodule';
import uimodule from './modules/uimodule';
import { vuexfireMutations } from 'vuexfire';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    dbmodule,
    uimodule
  },
  mutations: vuexfireMutations

});
