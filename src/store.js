import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    displayWeatherDetails: true,
    displayCalendar: true,
  },
  mutations: {
    changeCalendarBool() {
      this.state.displayCalendar = !this.state.displayCalendar
    },
    changeWeatherBool() {
      this.state.displayWeatherDetails = !this.state.displayWeatherDetails
    }
  },
  actions: {
    changeCalendar( {commit} ) {
      commit('changeCalendarBool');
    },
    changeWeather( {commit} ) {
      commit('changeWeatherBool');
    }
  },
  getters: {
    getCalendarBool: state => {
      return state.displayCalendar
    },
    getWeatherBool: state => {
      return state.displayWeatherDetails
    }
  },
});
