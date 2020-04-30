<template>
  <div class="root d-flex">
    <TemperatureComponent></TemperatureComponent>
    <h1 class="text-center">Calendar</h1>
    <LogoutWithGoogle class="logout" title="Logout">
    </LogoutWithGoogle>
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
