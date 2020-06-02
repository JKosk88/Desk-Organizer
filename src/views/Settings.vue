<template>
    <div class="root">
      <TopBar title='Settings' to='/main' />
      <div class="image-container">
        <img src="../assets/person.png" alt="person icon" class="img-fluid"/>
      </div>
      <div class="menu mt-5">
        <div class="bg-grey">
          <span>Email address</span>
        </div>
        <div class="bg-white">{{this.userEmail}}</div>
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
        <b-form-checkbox class="checkbox" size="md" checked v-model="calendarDisplay" switch>Display calendar</b-form-checkbox>
        <b-form-checkbox class="checkbox" size="md" v-model="detailedWeatherDisplay" switch>Display details about weather</b-form-checkbox>
        <div class="chartColorSelection">
          <label for="chart-color">Select your chart color</label>
          <b-form-select id="chart-color" class="chart-select" v-model="chartColor" :options="chartList"></b-form-select>
        </div>
        <div class="weatherTypeSelection">
          <label for="weather-type">Select displayed weather type</label>
          <b-form-select id="weather-type" class="chart-select" v-model="weatherType" :options="weatherList"></b-form-select>
        </div>
        <div class="bg-grey">Reset to default</div>
        <div class="text-center">
          <b-button class="confirmBtn" variant="success" v-on:click="validatePass()">Apply changes</b-button>
        </div>
        <button v-on:click="changeColor('FF9E00')" style="backgroundColor: #FF9E00">change color</button>
        <button v-on:click="changeColor('00A2FF')" style="backgroundColor: #00A2FF">change color</button>
        <button v-on:click="changeColor('FF0042')" style="backgroundColor: #FF0042">change color</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Settings',
  methods: {
    changeColor(color){
      let userID = sessionStorage.getItem('loggedUserId');
      firebase.database().ref('users/' + userID).update({
        chartColor: color
      })
    }
  },
  data() {
    return {
      newPassword: '',
      userEmail: 'example@email.com',
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
        ],
      weatherList: [
          { value: null, text: 'Please select an option' },
          { value: 'hourly', text: 'Hourly' },
          { value: 'daily', text: 'Daily' },
        ],
    };
  },
  methods: {
    validatePass() {
      var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      this.validPass = regex.test(this.newPassword);
    },
  },
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
.confirmBtn {
  border-radius: 20px;
  padding: 8px 40px;
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
