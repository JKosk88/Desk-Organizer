<template>
  <div class="root d-flex">
    <LogoutWithGoogle class="logout" title="Logout"></LogoutWithGoogle>
    <TemperatureComponent></TemperatureComponent>
    <CurrencyComponent/>
    <h1 class="text-center">Calendar</h1>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss" scoped>
.root {
  background-color: #000;
  color: #fff;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.logout {
  right: 0;
  position: absolute;
  width: auto !important;
}
</style>
