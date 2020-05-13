<template>
  <div class="root d-flex">
    <router-link to="/home">
    <LogoutWithGoogle @update-events="updateEventsList" class="logout" title="Logout"></LogoutWithGoogle>
    </router-link>
    <TemperatureComponent></TemperatureComponent>
    <CurrencyComponent/>
    <div class="calendar-container">
      <functional-calendar class="calendar-container__calendar" :is-dark='true'></functional-calendar>
    </div>
    <b-button @click="getData">KLIK</b-button>
  </div>

</template>

<script>
import { store } from '../store.js';
const CLIENT_ID = '439953774653-vubk61fi297uc1pnm4889gpjftdfvtcc.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDvMEsaN4ivlogM2tUmMjGHpCER7tezSfI';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

export default {
  name: 'Main',
  data() {
    return {
      googleAcc: null,
      storeState: store.state.events,
    }
  },
  methods: {
    updateEventsList (item) {
      this.googleAcc = item;
    },
    showAcc () {
      console.log (this.storeState);
    },
    getData() {
      let vm = this;

      vm.api.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      }).then(response => {
        vm.items = this.syntaxHighlight(response.result.items);
        console.log(vm.items);
      });
    },
  },
  created() {
    this.api = gapi;
  }
};
</script>

<style lang="scss" scoped>
.root {
  color: #fff;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.logout {
  right: 0;
  position: absolute;
  width: auto !important;
}
.calendar-container {
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: top;
  position: relative;
  padding: 10px;
  @media (min-width: 900px) {
    margin-top: 50px;
  }
}
.calendar-container__calendar {
  max-height: 50%;
  min-width: 50%;
  @media (min-width: 900px) {
    width: 100%;
    margin-top: 10%;
  }
}
</style>
