<template>
    <div class="home d-flex">
      <b-container class="text-center" fluid="sm">
        <div class="logo-container">
          <div>
          <h1>
            Desk Organizer
          </h1>
          </div>
          <div class="logo-container__image">
            <img class="img-fluid" src='../assets/logo.png'/>
          </div>
        </div>
        <div class="buttons-container">
          <router-link to="/Login">
            <button class="btn btn-dark w-90">Sign in</button>
          </router-link>
          <br>
          <router-link to="/About">
            <button class="btn btn-dark w-90">Sign up</button>
          </router-link>
        </div>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    background-color: #000;
    color: #fff;
  }
  .logo-container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    margin-top: 100px;
    h1 {
      font-weight: 300;
      line-height: 2rem;
    }
    .logo-container__image {
      max-width: 25%;
      margin-left: 10px;
    }
  }
  .buttons-container {
    position: absolute;
    bottom: 10%;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    button {
      width: 100%;
      margin-bottom: 30px;
      border-radius: 50px;
      padding: 10px;
      border: 1px solid white;
      background-color: #000;
    }
  }
</style>
