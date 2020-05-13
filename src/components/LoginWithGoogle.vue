<template>
  <div style="width: 100%;">
    <GoogleLogin :params="params" :renderParams="renderParams"
    :logoutButton="isLogoutButton"
    :onSuccess="onSuccess">{{title}}</GoogleLogin>
  </div>
</template>

<script>
const CLIENT_ID = '439953774653-vubk61fi297uc1pnm4889gpjftdfvtcc.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDvMEsaN4ivlogM2tUmMjGHpCER7tezSfI';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

export default {
  name: 'LoginWithGoogle',
  props: ['isLogoutButton','title'],
  data() {
            return {
                // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
                params: {
                    client_id: "439953774653-vubk61fi297uc1pnm4889gpjftdfvtcc.apps.googleusercontent.com"
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                    longtitle: true,
                    width: '100%',
                },
                items: undefined,
                api: undefined,
                authorized: false,
            }
      },
  methods: {
        onSuccess(googleUser) {

            this.api.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
            }).then(response => {
            this.items = response.result.items;
            console.log("Items:" + this.items);
            });

            // This only gets the user information: id, name, imageUrl and email
            console.log("Z komponentu profil:" + googleUser.getBasicProfile());

            this.$router.push('/main');
        },
        handleClientLoad() {
          this.api.load('client:auth2', this.initClient);
        },
        initClient() {
          let vm = this;

          vm.api.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
          }).then(_ => {
            vm.api.auth2.getAuthInstance().isSignedIn.listen(vm.authorized);
          });
        },
        handleSignoutClick() {
          Promise.resolve(this.api.auth2.getAuthInstance().signOut())
          .then(_ => {
            this.authorized = false;
          });
        },
  },
  created() {
    this.handleSignoutClick;
    this.api = gapi;
    this.handleClientLoad();
  }
};
</script>
<style lang="scss">
.abcRioButton {
  width: 100% !important;
  height: 100% !important;
  padding: 8px;
  border-radius: 50px !important;
  background-color: transparent !important;
  color: #fff !important;
  border: 1px solid;
  margin-bottom: 20px;
  &:hover {
    background-color: #fff !important;
    color: #000 !important;
  }
}
.abcRioButtonContents {
  font-size: .9rem !important;
}
</style>
