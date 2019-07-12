import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import lodash from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    champion: null,
    showPopup: false,
    synergies: [],
  },
  mutations: {
    LOAD_CHAMPION(state, champion) {
      state.champion = champion;
    },

    CLEAR_CHAMPION(state) {
      state.champion = null;
    },

    TOGGLE_POPUP(state, payload) {
      state.showPopup = payload;
    },

    LOAD_SYNERGIES(state, synerguies) {
      state.synergies = synerguies;
    },
  },
  actions: {
    async loadChampion({ commit }, name) {
      commit('TOGGLE_POPUP', true);
      const champions = await axios('/data/champions.json');
      const champion = lodash.find(champions.data, o => o.name === name);
      commit('LOAD_CHAMPION', champion);
    },

    closePopup({ commit }) {
      commit('CLEAR_CHAMPION');
      commit('TOGGLE_POPUP', false);
    },

    async loadSynergies({ commit }) {
      const synergies = await axios('/data/synergies.json');
      commit('LOAD_SYNERGIES', synergies);
    },
  },
});
