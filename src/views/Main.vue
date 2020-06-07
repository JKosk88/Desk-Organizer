<template>
  <div class="root d-flex">
    <router-link to="/home">
      <LogoutWithGoogle class="logout" title="Logout"></LogoutWithGoogle>
    </router-link>
    <TemperatureComponent></TemperatureComponent>
    <CurrencyComponent/>
    <div class="calendar-container">
      <div v-on:click="goToAddEvent()" class="addEventBtn" style="cursor: pointer;"></div>
      <functional-calendar v-if="calendarDisplay" class="calendar-container__calendar" :is-dark='true'></functional-calendar>
      <Events class ="events" />
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
}
.calendar-container {
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: top;
  position: relative;
  padding: 10px;
  margin-top: 30px;
  @media (min-width: 900px) {
    margin-top: 50px;
  }
  &__calendar {
    max-height: 45%;
    min-width: 40%;
    @media (min-width: 900px) {
      width: 100%;
      margin-top: 5%;
      max-height: 40%;
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
      top: -20px;
      left: 20px;
    }
  }
  .events {
    margin-top: 60px;
    @media (min-width: 900px) {
      margin-top: 50px;
    }
  }
  .addEventBtn {
    background-image: url("../assets/addEvent.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    left: 15px;
    top: -20px;
    transition: all .25s ease-in-out;
    width: 30px;
    height: 30px;
    &:hover {
      background-image: url("../assets/addEvent-grey.svg");
    }
    @media (min-width: 900px) {
      width: 50px;
      height: 50px;
      top: -20px;
      left: 20px;
    }
  }
}
</style>
