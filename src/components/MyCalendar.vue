<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin],
    };
  },
};
</script>

<template>
  <div>
  <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" />
    <h1>xdfcvgjhbknm;l,'</h1>
  </div>
</template>
