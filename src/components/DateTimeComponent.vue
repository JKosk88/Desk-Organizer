<template>
  <div id="ap">
    <div id="hour">{{ hour }} <img class="icon" src='../assets/rain.svg'/></div>
    <p id="date">{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: 'DateTimeComponent',
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
    getDateTimeFunction() {
      const date = new Date();
      const hours = `0${date.getHours()}`;
      const minutes = `0${date.getMinutes()}`;
      const formattedTime = `${hours.substr(-2)}:${minutes.substr(-2)}`;

      this.hour = formattedTime;
      // eslint-disable-next-line default-case
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'December'];
      this.date = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    },
  },
  mounted() {
    this.getWeatherData();
    this.getDateTimeFunction();
  },
};

</script>

<style scoped>
#ap{
  width: 40%;
}
.icon{
  width: 27%;
  filter: invert(.5);
}
#hour{
  font-size: 550%;
}
#date{
  font-size: 1.4em;
  /*position: relative;*/
}
</style>
