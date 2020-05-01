<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarPlugins: [ dayGridPlugin ]
    }
  }
}
</script>

<template>
  <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" />
</template>
