import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { find } from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: [],
    menuItems: [],
  },
  mutations: {
    GET_RESTAURANTS_SUCCESS(state, payload) {
      state.restaurants = state.restaurants.concat(payload);
    },
    GET_MENU_ITEMS(state, payload) {
      const restaurant = find(state.restaurants, ['_id', payload]);
      if (restaurant) {
        state.menuItems = restaurant.menuitems;
      }
    },
  },
  actions: {
    GET_RESTAURANTS({ commit }) {
      axios.get('http://localhost:1337/restaurants').then((response) => {
        commit('GET_RESTAURANTS_SUCCESS', response.data);
      });
    },
  },
});
