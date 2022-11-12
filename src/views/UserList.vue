<template>
  <div class="events">
    <h1>Users website</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventsService from '@/services/EventsService.js'

export default {
  name: 'UserList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    EventsService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
