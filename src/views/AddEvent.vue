<template>
    <div class="root">
      <TopBar title='Event' to='/Home'/>
      <div class="spacer mt-2"></div>
      <b-container fluid="sm">
        <div class="functional-container">
          <CustomInput type="text" placeholder="Event Title"/>
          <div class="setEventTime mt-5">
              <div class="d-flex justify-content-between align-items-center">
                <p style="opacity: .7">Start</p>
                <b-form-datepicker class="w-50" size="sm" offset="-130"></b-form-datepicker>
              </div>
              <div class="spacer mb-3"></div>
              <div class="d-flex justify-content-between align-items-center">
                <p style="opacity: .7">Finish</p>
                <b-form-datepicker class="w-50" size="sm" offset="-130"></b-form-datepicker>
              </div>
          </div>
          <CustomButton class="custom-btn" text="Add event"/>
        </div>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'AddEvent',
};
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  background-color: #000;
  color: white;
}
.spacer {
  height: 1px;
  background-color: #fff;
  opacity: .5;
}
.custom-btn {
  margin-top: 100px;
  @media (min-width: 900px) {
    margin-top: 30px;
  }
}
.functional-container {
  margin-top: 30px;
  @media (min-width: 900px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    min-width: 40%;
  }
  @media (min-width: 1250px) {
    min-width: 25%;
  }
}
</style>
