<template>
  <div class="root d-flex">
    <router-link to="/home">
    <LogoutWithGoogle class="logout" title="Logout"></LogoutWithGoogle>
    </router-link>
    <TemperatureComponent></TemperatureComponent>
    <CurrencyComponent/>
    <h1 class="text-center">Calendar</h1>
    <v-app>
      <v-content>
        <MyCalendar/>
      </v-content>
    </v-app>
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
</style>
