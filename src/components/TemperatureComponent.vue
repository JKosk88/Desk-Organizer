<template>
<div class="root">
  <DateTimeComponent></DateTimeComponent>
  <img class="iconweather" alt="weather icon" src='../assets/humidity.svg'/>
  <div class="humidity">{{ humidity }} %</div>

  <div id="temp">
  <img class="iconweather" alt="weather icon" src='../assets/temperature.svg'/>
  <div class="temp">{{ temperature }} °C</div>
  </div>

  <br>
  <img class="iconweather" alt="weather icon" src='../assets/pressure.svg'/>
  <div class="pressure">{{ pressure }} kPa</div>

  <div id="wind">
  <img class="iconweather" alt="weather icon" src='../assets/wind.svg'/>
  <div class="wind">{{ windSpeed }} km/h</div>
  </div>

  <div class="tempdiv" v-show="hourlyForecast" v-on:click="hourlyForecast = !hourlyForecast, dailyForecast = !dailyForecast">
    <div class="htempdiv" v-for="temp in hourlyTemp">
      <div class="htemp">{{ temp[0] }} <b>{{ temp[1] }}</b></div>
      <div class="hsum">{{ temp[2] }}</div>
    </div>
  </div>

  <div class="tempdiv" v-show="dailyForecast" v-on:click="hourlyForecast = !hourlyForecast, dailyForecast = !dailyForecast">
    <div class="htempdiv" v-for="temp in dailyTemp">
      <div class="htemp">{{ temp[0] }} <b>{{ temp[1] }}</b></div>
      <div class="hsum">{{ temp[2] }}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TemperatureComponent',
  data() {
    return {
      temperature: '',
      hour: '',
      weather: '',
      wind: '',
      humidity: '',
      pressure: '',
      hourlyTemp: [],
      dailyTemp: [],
      hourlyForecast: true,
      dailyForecast: false,
    };
  },
  methods: {
    getWeatherData() {
      const url = 'https://api.darksky.net/forecast/7a31a719515942165dd6e87e76096fb4/50.049683,%2019.944544?units=si';

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.temperature = data.currently.temperature;
          this.humidity = data.currently.humidity;
          this.windSpeed = data.currently.windSpeed;
          this.pressure = data.currently.pressure;
          this.weather = data.currently.icon;

          // eslint-disable-next-line no-undef,guard-for-in,no-restricted-syntax
          for (const val of data.hourly.data) {
            // eslint-disable-next-line no-undef
            const time = new Date(val.time * 1000);
            const timestamp = `${(`0${time.getHours()}`).substr(-2)}:00 `;
            // eslint-disable-next-line radix
            this.hourlyTemp.push([timestamp, `${parseInt(val.temperature)} °C`, val.summary]);
          }
          // eslint-disable-next-line no-undef,guard-for-in,no-restricted-syntax
          for (const val of data.daily.data) {
            // eslint-disable-next-line no-undef
            const date = new Date(val.time * 1000);
            const month = `0${(date.getMonth() + 1).toString()}`;
            const day = `0${(date.getDate() + 1).toString()}`;
            const fullDate = `${month.substr(-2)}.${day.substr(-2)}`;
            // eslint-disable-next-line radix
            this.dailyTemp.push([fullDate, `${parseInt(val.temperatureHigh)} °C`, val.summary]);
          }
        });
    },
  },
  mounted() {
    this.getWeatherData();
  },
};
</script>

<style lang="scss" scoped>
.root {
  padding: 10px;
  min-width: 40%;
  background-color: #000000;
}
.time {
  font-size: 3rem;
}
.tempdiv{
  margin-top: 2rem;
}
.htempdiv{
  margin-top: 2px;
}
.htemp{
  font-size: 1.2rem;
  display: inline-block;
}
.hsum{
  font-size: 1.2rem;
  /*flex: 0;*/
  display: inline-block;
  float: right;
}
.iconweather{
  width: 2.6rem;
  filter: invert(1);
  position: static;
}
.wind, .humidity, .pressure,.temp{
  font-size: 2rem;
  display: inline-block;
  position: relative;
  top: 0.7rem;
  left: 0.7rem;
  font-family: "Comfortaa Light";
}
.humidity{
  display: inline-block;
}
.temp{
  float: right;
}
#temp{
  float: right;
}
#wind{
  float: right;
}
.pressure{
  display: inline-block;
}
</style>
