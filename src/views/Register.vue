<template>
    <div class="root">
      <TopBar title='Sign up' to='/Home'/>
      <div class="spacer mt-2"></div>
      <b-container class="text-center" fluid="sm">
        <div class="information-text">
          <h5>Sign up</h5>
          <p>When you use this method we will not be
              able to get events from your Google
              Calendar and you will have to do it manually.</p>
        </div>
        <div class="functional-container">
          <CustomInput type="email" placeholder="Email*"/>
          <CustomInput type="password" placeholder="Password*"/>
          <CustomInput type="password" placeholder="Re-enter Password*"/>
          <p style="opacity: .7">Use 8 or more characters with a mix
              of letters, numbers & symbols</p>
          <CustomButton class="custom-btn" text="Submit"/>
          <p style="opacity: .5; font-size: .8rem;">
            By proceeding you also agree to the Terms of Service
            and Privacy Policy</p>
        </div>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'Register',
};
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  background-color: #000;
  color: white;
}
.information-text {
  margin-top: 100px;
  opacity: .8;
}
.spacer {
  height: 1px;
  background-color: #fff;
  opacity: .5;
}
.custom-btn {
  margin-bottom: 15px;
  @media (min-width: 900px) {
    margin-top: 30px;
  }
}
.functional-container {
  margin-top: 80px;
  @media (min-width: 900px) {
    position: absolute;
  left: 50%;
  transform: translateX(-50%);
      max-width: 40%;
  }
  @media (min-width: 1250px) {
      max-width: 25%;
  }
}
</style>
