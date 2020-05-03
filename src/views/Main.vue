<template>
  <div class="root d-flex">
    <router-link to="/home">
    <LogoutWithGoogle class="logout" title="Logout"></LogoutWithGoogle>
    </router-link>
    <TemperatureComponent></TemperatureComponent>
    <CurrencyComponent/>
    <div class="calendar-container">
      <functional-calendar :is-dark='true'></functional-calendar>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss" scoped>
.root {
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
.calendar-container {
  display: flex;
  align-items: center;
}
</style>
