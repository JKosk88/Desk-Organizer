<template>
<div>
</div>
</template>

<script>
export default {
  name: 'TemperatureComponentName',
  data() {
    return {
      dailyTemp: [],
      hourlyTemp: [],
    };
  },
  methods: {
    getWeatherDataFunction() {
      const hourlyTemperature = [];
      const dailyTemperature = [];
      fetch('https://api.darksky.net/forecast/7a31a719515942165dd6e87e76096fb4/50.049683,%2019.944544?units=si')
        .then((response) => response.json())
        .then((data) => {
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < data.daily.data.length; i++) {
            dailyTemperature.push(data.daily.data[i].temperatureHigh);
          }
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < data.hourly.data.length; i++) {
            hourlyTemperature.push(data.hourly.data[i].temperature);
          }
          this.hourlyTemp = hourlyTemperature;
          this.dailyTemp = dailyTemperature;
        });
    },
  },
  mounted() {
    this.getWeatherDataFunction();
  },
};
</script>

<style scoped>

</style>
