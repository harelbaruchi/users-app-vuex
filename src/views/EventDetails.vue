<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
<script>
/* eslint-disable */
import EventsService from '@/services/EventsService'
export default {
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventsService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
