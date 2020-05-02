<template>
  <div>
    <h1>xdfcvgjhbknm;l,'</h1>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FullCalendar,
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin],
    };
  },
};
</script>
