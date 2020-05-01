<template>
<div class="root">
  {{ today }}
  <DateTimeComponent></DateTimeComponent>
  <p>Current temp: {{ currentTemp }}</p>
  <p>Hourly temp: {{ hourlyTemp }}</p>
  <p>Daily temp: {{ dailyTemp }}</p>
  <p>Humidity: {{ humidity }}</p>
  <p>Wind speed: {{ windSpeed }}</p>
  <p>Pressure: {{ pressure }}</p>
</div>
</template>

<script>
export default {
  name: 'TemperatureComponent',
  data() {
    return {
      temperature: '',
      hour: '',
      date: '',
      weather: '',
      wind: '',
      humidity: '',
      pressure: '',
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
        });
    },
    time() {
      this.datenow = moment().format('HH:mm');
      this.today = moment().format('dddd, Do MMMM YYYY');
      setInterval(this.time, 1000);
    },
  },
  mounted: function() {
    this.getWeatherData();
  }
};
</script>

<style lang="scss" scoped>
.root {
  padding: 10px;
  min-width: 40%;
  background-color: #003;
}
.time {
  font-size: 3rem;
}
</style>
