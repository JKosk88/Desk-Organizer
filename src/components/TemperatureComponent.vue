<template>
<div>
  {{ sampleFunction() }}
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
      currentTemp: 0,
      dailyTemp: [],
      hourlyTemp: [],
      humidity: 0,
      windSpeed: 0,
      pressure: 0,
    };
  },
  methods: {
    sampleFunction() {
      const hourlyTemperature = [];
      const dailyTemperature = [];
      let currentTemperature;
      fetch('https://api.darksky.net/forecast/7a31a719515942165dd6e87e76096fb4/50.049683,%2019.944544?units=si')
        .then((response) => response.json())
        .then((data) => {
          currentTemperature = data.currently.temperature;
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < data.daily.data.length; i++) {
            dailyTemperature.push(data.daily.data[i].temperatureHigh);
          }
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < data.hourly.data.length; i++) {
            hourlyTemperature.push(data.hourly.data[i].temperature);
          }
          this.currentTemp = currentTemperature;
          this.hourlyTemp = hourlyTemperature;
          this.dailyTemp = dailyTemperature;
          this.humidity = data.currently.humidity;
          this.windSpeed = data.currently.windSpeed;
          this.pressure = data.currently.pressure;
        });
    },
  },
};
</script>

<style scoped>

</style>
