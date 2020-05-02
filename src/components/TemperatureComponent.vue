<template>
<div class="root">
  <DateTimeComponent></DateTimeComponent>
  <p>Current temp: {{ temperature }}</p>
  <p>Hourly temp: {{ hour }}</p>
  <p>Daily temp: {{ dailyTemp }}</p>
  <p>Humidity: {{ humidity }}</p>
  <p>Wind speed: {{ wind }}</p>
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
  },
  mounted: function() {
    this.getWeatherData();
  }
};
</script>

<style lang="scss" scoped>
.root {
  padding: 5px;
  max-width: 40%;
  background-color: #003;
}
</style>
