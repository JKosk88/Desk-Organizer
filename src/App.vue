<template>
  <div class="app">
    <notifications position="bottom right" group="events" />
    <notifications position="bottom right" group="settings" />
    <notifications position="bottom left" group="reset" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
</style>
<script>
  export default {
    name: 'App',
  }
</script>
