<template>
    <div class="root">
      <TopBar title='Settings' to='/main' />
      <div class="image-container">
        <img src="../assets/person.png" alt="person icon" class="img-fluid"/>
      </div>
      <div class="menu mt-5 mb-5">
        <div class="bg-grey">
          <span>Email address</span>
        </div>
        <div class="bg-white">{{ this.userEmail }}</div>
        <div class="bg-grey">
          <span>Set new password</span>
        </div>
        <b-form-input required placeholder="Password" type="password" min="5" v-model="newPassword" :state="validPass" class="bg-white newpass"></b-form-input>
        <b-form-invalid-feedback>
          Your new password should contain at least one number, one lowercase and one uppercase letter. At least 6 characters.
        </b-form-invalid-feedback>
        <div class="bg-grey">
          <span>Customize</span>
        </div>
        <b-form-checkbox class="checkbox" size="md" id='calendar-display' v-model="calendarDisplay" switch>Display calendar</b-form-checkbox>
        <b-form-checkbox class="checkbox" size="md" id='weather-display' v-model="detailedWeatherDisplay" switch>Display details about weather</b-form-checkbox>
        <div class="chartColorSelection">
          <label for="chart-color">Select your chart color</label>
          <b-form-select id="chart-color" class="chart-select" v-model="chartColor" v-on:change="changeInputColor()" :options="chartList"></b-form-select>
        </div>
        <div class="weatherTypeSelection">
          <label for="weather-type">Select displayed weather type</label>
          <b-form-select id="weather-type" class="chart-select" v-model="weatherType" :options="weatherList"></b-form-select>
        </div>
        <div class="text-center">
          <b-button class="btn" id='reset' v-on:click="resetSettings()">Reset settings</b-button>
          <b-button class="btn" variant="success" v-on:click="applyChanges()">Apply changes</b-button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Settings',
  data() {
    return {
      newPassword: '',
      userEmail: '',
      validPass: null,
      calendarDisplay: true,
      detailedWeatherDisplay: true,
      chartColor: null,
      weatherType: null,
      chartList: [
          { value: null, text: 'Please select an option' },
          { value: 'FF9E00', text: 'Orange' },
          { value: '00A2FF', text: 'Blue' },
          { value: 'FF0042', text: 'Red' },
          { value: '00FF80', text: 'Mint' },
          { value: 'B900FF', text: 'Violet' },
          { value: 'F4F700', text: 'Yellow' },
          { value: '07F700', text: 'Green' },
          { value: 'FF01BD', text: 'Pink' },
        ],
      weatherList: [
          { value: null, text: 'Please select an option' },
          { value: 'hourly', text: 'Hourly' },
          { value: 'daily', text: 'Daily' },
        ],
    };
  },
  methods: {
    changeInputColor(){
      document.getElementById('chart-color').style.borderColor = '#' + this.chartColor;
    },
    applyChanges() {
      let color = document.getElementById('chart-color').value;
      let type = document.getElementById('weather-type').value;

      this.changeWeatherForecastType(type);
      this.changeColor(color);
      this.changeCalendarDisplay(this.calendarDisplay);
      this.changeWeatherDisplay(this.detailedWeatherDisplay);

      if (this.newPassword.length >= 1) {
        var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        this.validPass = regex.test(this.newPassword);
        if (this.validPass) {
          let userID = sessionStorage.getItem('loggedUserId');
          firebase.database().ref('users/' + userID).update({
            pass: this.newPassword
        });
        }
      }

    },

    changeColor(color){
      if (color) {
        let userID = sessionStorage.getItem('loggedUserId');
        firebase.database().ref('users/' + userID).update({
          chartColor: color
        });
      }
    },

    changeCalendarDisplay(boo){
        let userID = sessionStorage.getItem('loggedUserId');
        firebase.database().ref('users/' + userID).update({
          displayCalendar: boo
        });
    },

    changeWeatherDisplay(boo){
        let userID = sessionStorage.getItem('loggedUserId');
        firebase.database().ref('users/' + userID).update({
          displayWeatherDetails: boo
        });
    },

    changeWeatherForecastType(type){
      if (type) {
        let userID = sessionStorage.getItem('loggedUserId');
        firebase.database().ref('users/' + userID).update({
          weatherForecastType: type
        });
      }
    },

    resetSettings(){
      this.changeColor('FFFFFF');
      this.changeWeatherForecastType('hourly');
      document.getElementById('chart-color').style.borderColor = '#FFF';
      document.getElementById("calendar-display").checked = true;
      document.getElementById("weather-display").checked = true;
      this.changeCalendarDisplay(true);
      this.changeWeatherDisplay(true);
    },

    async checkChartColor(){

      let userID = sessionStorage.getItem('loggedUserId');
      let userChartColor;

      await firebase.database().ref('users/' + userID + '/').once("value", function (data) {
        userChartColor = data.child('chartColor').node_.value_;
      });

      document.getElementById("chart-color").style.borderColor = "#" + userChartColor;
    },

    async getCalendarBool(){

      let userID = sessionStorage.getItem('loggedUserId');
      let calendarBool;

      await firebase.database().ref('users/' + userID + '/').once("value", function (data) {
        calendarBool = data.child('displayCalendar').node_.value_;
      });

      this.calendarDisplay = calendarBool;
    },

    async getWeatherBool(){

      let userID = sessionStorage.getItem('loggedUserId');
      let weatherBool;

      await firebase.database().ref('users/' + userID + '/').once("value", function (data) {
        weatherBool = data.child('displayWeatherDetails').node_.value_;
      });

      this.detailedWeatherDisplay = weatherBool;
    },

    async getUserEmail(){
      let userID = sessionStorage.getItem('loggedUserId');
      let email;

      await firebase.database().ref('users/' + userID + '/').once("value", function (data) {
        email = data.child('email').node_.value_;
      });

      this.userEmail = email;
    },

  },
  mounted() {
    this.getUserEmail();
    this.checkChartColor();
    this.getCalendarBool();
    this.getWeatherBool();

    console.log(this.calendarDisplay);
    console.log(this.detailedWeatherDisplay);

  },
  computed: {

  }
};
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  color: white;
  overflow: visible;
}
.image-container {
  margin: 10% auto 0 auto;
  width: 100px;
  @media (min-width: 600px) {
    margin-top: 5%;
  }
  @media (min-width: 900px) {
    margin-top: 3%;
  }
}
.menu {
  color: #000;
  background-color: #fff;
  div {
    padding: 10px;
  }
  @media (min-width: 600px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
  }
  @media (min-width: 900px) {
    width: 40%;
  }
}
.bg-grey {
  background-color: #EFF1F8;
  span {
    text-transform: uppercase;
    font-size: .8rem;
    opacity: .5;
  }
}
.btn {
  border-radius: 20px;
  padding: 8px 40px;
  margin: 7px;
}
#reset{
  color: black;
  background-color: rgb(255, 255, 255);
  border-color: red;
  &:hover {
      background-color: rgb(184, 73, 73);
      color: #fff;
    }
}
#chart-color{
  outline: none;
  &:focus {
    box-shadow: none;
  }
}
.newpass {
  border: none;
  text-decoration: none;
  outline: none;
  padding: 25px 10px;
  &:focus {
    outline: none !important;
    border: none;
    box-shadow: none;
  }
}
.bg-black {
  background-color: #000;
}
.checkbox {
  margin-left: 35px;
}
.chart-select {
  color: #000;
}
</style>
