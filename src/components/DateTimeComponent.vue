<template>
  <div class="d-flex justify-content-between">
    <div id="hour">
      {{ hour }}
    </div>
    <div>
      <img class="icon img-fluid" alt="weather icon" src='../assets/rain.svg'/>
      <p id="date">{{ date }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DateTimeComponent',
  data() {
    return {
      hour: '',
      date: '',
    };
  },
  methods: {
    async getDateTimeFunction() {
      this.hour = moment().format('HH:mm');
      this.date = moment().format('dddd, Do MMMM YYYY');
    },
  },
  mounted () {
    this.getDateTimeFunction();
    this.timer = setInterval(this.getDateTimeFunction, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};

</script>

<style scoped>
.icon{
  width: 40%;
  filter: invert(1);
  float: right;
}
#hour{
  font-size: 2.5rem;
}
#date{
  font-size: 0.8rem;
  clear: both;
  text-align: right;
}
</style>
