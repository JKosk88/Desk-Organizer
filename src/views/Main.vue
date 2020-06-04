<template>
  <div class="root d-flex">
    <router-link to="/home">
      <LogoutWithGoogle class="logout" title="Logout"></LogoutWithGoogle>
    </router-link>
    <TemperatureComponent></TemperatureComponent>
    <CurrencyComponent/>
    <div class="calendar-container">
      <img v-on:click="goToAddEvent()" src="../assets/addEvent.svg" alt="add event" class="img-fluid addEvent" style="cursor: pointer;"/>
      <functional-calendar v-if="calendarDisplay" class="calendar-container__calendar" :is-dark='true'></functional-calendar>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Main',
  data() {
    return {
      calendarDisplay: true,
    };
  },
  methods: {
    goToAddEvent() {
      this.$router.push('/addEvent');
    },
    async getCalendarBool(){

      let userID = sessionStorage.getItem('loggedUserId');
      let calendarBool;

      await firebase.database().ref('users/' + userID + '/').once("value", function (data) {
        calendarBool = data.child('displayCalendar').node_.value_;
      });

      this.calendarDisplay = calendarBool;
    },
  },
  computed: {

  },
   mounted() {
    this.getCalendarBool();
    this.getWeatherBool();
  },
};
</script>

<style lang="scss">
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
  border: 1px solid #fff;
  margin: 2px;
  &:hover {
    background-color: white;
    color: black;
  }
}
.calendar-container {
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: top;
  position: relative;
  padding: 10px;
  margin-top: 30px;
  @media (min-width: 900px) {
    margin-top: 50px;
  }
  &__calendar {
    max-height: 40%;
    min-width: 40%;
    @media (min-width: 900px) {
      width: 100%;
      margin-top: 10%;
    }
  }
  .vfc-calendar {
    max-height: 250px;
    @media (min-width: 900px) {
      max-height: 100%;
    }
  }
  .addEvent {
    max-width: 25px;
    position: absolute;
    left: 15px;
    top: -20px;
    @media (min-width: 900px) {
      max-width: 50px;
      top: 10px;
      left: 20px;
    }
  }
}
</style>
