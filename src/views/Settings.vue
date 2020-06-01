<template>
    <div class="root">
      <TopBar title='Settings' to='/main' />
      <div class="image-container">
        <img src="../assets/person.png" alt="person icon" class="img-fluid"/>
      </div>
      <div class="menu mt-5">
        <div class="bg-grey">
          <span>Profile</span>
        </div>
        <div class="bg-white">Username</div>
        <div class="bg-white">Email</div>
        <div class="bg-grey">
          <span>Account</span>
        </div>
        <div class="bg-white">Change password</div>
        <div class="bg-white">Log out...</div>
        <div class="bg-grey">
          <span>Customize</span>
        </div>
        <div class="bg-white">Customize dashboard</div>
        <div class="bg-white">Reset to default</div>
        <button v-on:click="changeColor('FF9E00')" style="backgroundColor: #FF9E00">change color</button>
        <button v-on:click="changeColor('00A2FF')" style="backgroundColor: #00A2FF">change color</button>
        <button v-on:click="changeColor('FF0042')" style="backgroundColor: #FF0042">change color</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Settings',
  methods: {
    changeColor(color){
      let userID = sessionStorage.getItem('loggedUserId');
      firebase.database().ref('users/' + userID).update({
        chartColor: color
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  color: white;
  overflow: visible;
}
.image-container {
  margin: 10% auto 0 auto;
  width: 100px;
  @media (min-width: 600px) {
    margin-top: 5%;
  }
}
.menu {
  color: #000;
  div {
    padding: 10px;
  }
  @media (min-width: 600px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    min-width: 60%;
  }
  @media (min-width: 900px) {
    min-width: 40%;
  }
}
.bg-grey {
  background-color: #EFF1F8;
  span {
    text-transform: uppercase;
    font-size: .8rem;
    opacity: .5;
  }
}
</style>
