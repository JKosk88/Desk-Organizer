<template>
  <div class="about">
    <DateTimeComponent></DateTimeComponent>
    <TemperatureComponentName></TemperatureComponentName>
  </div>
</template>

<script>
// @ is an alias to /src
import TemperatureComponentName from '@/components/TemperatureComponent.vue';
// eslint-disable-next-line import/extensions
import DateTimeComponent from '../components/DateTimeComponent';

export default {
  name: 'Temperature',
  components: {
    DateTimeComponent,
    TemperatureComponentName,
  },
};
</script>
