<template>
    <div class="root">
      <TopBar title='Event' to='/Main'/>
      <div class="spacer mt-2"></div>
      <b-container fluid="sm">
        <div class="functional-container">
          <input placeholder="Event Title*" type="text" v-model="title">
          <div class="setEventTime mt-5">
              <div class="d-flex justify-content-between align-items-center">
                <p style="opacity: .7">Start</p>
                <b-form-datepicker class="w-50" size="sm" offset="-130" v-model="from"></b-form-datepicker>
              </div>
              <div class="spacer mb-3"></div>
              <div class="d-flex justify-content-between align-items-center">
                <p style="opacity: .7">Finish</p>
                <b-form-datepicker class="w-50" size="sm" offset="-130" v-model="to"></b-form-datepicker>
              </div>
          </div>
          <div v-on:click="addEvent()">
            <CustomButton class="custom-btn" text="Add event"/>
          </div>
          <p class="text-center" v-show="hint" id="hint"></p>
        </div>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'AddEvent',
  data() {
    return {
      from: '',
      to: '',
      title: '',
      hint: false,
    };
  },
  methods: {
    addEvent() {
      const localId = parseInt(sessionStorage.getItem('loggedUserId'));

      if (this.from !== '' && this.to !== '' && this.title !== '') {
        this.$notify({
          group: 'events',
          type: 'success',
          title: 'Success!',
          text: 'New event has been added to your schedule.'
        });
        addNewEvent(localId, this.from, this.to, this.title);
      } else {
        document.getElementById('hint').innerText = 'You cannot add an empty event.';
      }
      this.hint = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  color: white;
  overflow: visible;
}
.spacer {
  height: 1px;
  background-color: #fff;
  opacity: .5;
}
.custom-btn {
  margin-top: 30px;
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
input {
  width: 100%;
  margin-bottom: 5px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 10px;
}
#hint {
  color: red;
}
</style>
