import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  campeonatos: [],
  mercados: []
};

const mutations = {
  'set-campeonatos'(state, campeonatos) {
    state.campeonatos = campeonatos;
  },
  'set-mercados'(state, mercados) {
    state.mercados = mercados;
  }
};
const actions = {
  'carregar-campeonatos'(context) {
    Vue.http.get("http://127.0.0.1:8000/api/campeonatos").then(response => {
      let campeonatos = response.data;
      context.commit('set-campeonatos', campeonatos);
    });
  },
  'carregar-mercados'(context) {
    Vue.http.get("http://127.0.0.1:8000/api/mercados").then(response => {
      let mercados = response.data;
      context.commit('set-mercados', mercados);
    });
  }
};

export default new Vuex.Store({
  state,
  getters: {},
  actions,
  mutations
}); 