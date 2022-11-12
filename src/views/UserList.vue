<template>
  <div class="events">
    <h1>Users website</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'UserList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 235446,
          category: 'animal welfare',
          title: 'cat adoption day',
          description: 'find your new feline friend at this event.',
          location: 'meow town',
          date: 'january 28 2022',
          time: '11:00',
          petsAllowed: true,
          organizer: 'kats Laydee',
        },
        {
          id: 123456,
          category: 'animal welfare',
          title: 'cat adoption day',
          description: 'find your new feline friend at this event.',
          location: 'meow town',
          date: 'january 28 2022',
          time: '11:00',
          petsAllowed: true,
          organizer: 'kats Laydee',
        },
      ],
    }
  },
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
