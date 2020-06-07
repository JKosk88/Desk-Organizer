<template>
  <div >
    <h2 class="text-center mb-3">Incoming events</h2>
    <div class="htempdiv d-flex justify-content-between events-header">
      <div class="eventName text-center">Event name</div>
      <div>Starts</div>
      <div>Ends</div>
    </div>
    <div class="spacer"></div>
    <div class="htempdiv d-flex justify-content-between events-data" :key="`item-${index}`" v-for="(item, index) in eventTitle">
      <div class="eventName">{{ item }}</div>
      <div>{{ eventDateFrom[index] }}</div>
      <div>{{ eventDateTo[index] }}</div>
    </div>
  </div>

</template>

<script>

  export default {
        name: "Events",
        data: function (){
          return {
            eventTitle: [],
            eventDateFrom: [],
            eventDateTo: [],
          }
        },
        methods: {
          async displayEvents() {
            var database = firebase.database();
            var userId = sessionStorage.getItem('loggedUserId');
            let dataObj = database.ref('users/' + userId + '/events');
            const refToTitles = this.eventTitle;
            const refToStartDates = this.eventDateFrom;
            const refToEndDates = this.eventDateTo;

            await dataObj.on('value', gotData, errData);


            function gotData(data) {
              var events = data.val();
              var keys = Object.keys(events);
              for (var i = 0; i < keys.length; i++){
                var k = keys[i];
                var fromDate = events[k].from;
                var toDate = events[k].to;
                var eventTitle = events[k].title;
                refToTitles.push(eventTitle);
                refToStartDates.push(fromDate);
                refToEndDates.push(toDate);
              }
            }

            function errData(err) {
              console.log('Error!');
              console.log(err);
            }
          },
        },
        mounted(){
          this.displayEvents();
        }
    }
</script>

<style lang="scss" scoped>
  .htempdiv{
    margin-top: 10px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  .spacer {
    height: 0.1px;
    background-color: #fff;
    opacity: .3;
  }
  .eventName {
    width: 30%;
  }
  .events-header {
    font-weight: bold;
    font-size: 0.8rem;
    @media (min-width: 900px) {
      font-size: 1rem;
    }
  }
  .events-data {
    font-size: 0.6rem;
    @media (min-width: 900px) {
      font-size: 1rem;
    }
  }

</style>
