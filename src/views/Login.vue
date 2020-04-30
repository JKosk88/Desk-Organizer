<template>
    <div class="root">
      <TopBar title='Sign in' to='/Home'/>
      <div class="spacer mt-2"></div>
      <b-container class="text-center" fluid="sm">
        <div class="information-text">
          <h5>Google Account</h5>
          <p>Sign in to your Google account to see all your upcoming events
            from your Google Calendar.</p>
        </div>
        <div class="functional-container">
          <CustomInput type="email" placeholder="Email*"/>
          <CustomInput type="password" placeholder="Password*"/>
          <CustomButton class="custom-btn mt-3" text="Sign in"/>
          <p style="opacity: .7">OR</p>
          <LoginWithGoogle></LoginWithGoogle>
          <p style="opacity: .5; font-size: .8rem;">
            By proceeding you also agree to the Terms of Service
            and Privacy Policy</p>
        </div>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'Login',
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
