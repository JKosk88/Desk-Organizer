<template>
  <div class="about">
    <h1>This is Main page</h1>
    <TemperatureComponentName></TemperatureComponentName>
  </div>
</template>

<script>
// @ is an alias to /src
import TemperatureComponentName from '@/components/TemperatureComponent.vue';

export default {
  name: 'Temperature',
  components: {
    TemperatureComponentName,
  },
};
</script>
