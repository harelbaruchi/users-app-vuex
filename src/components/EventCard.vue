<template>
  <div class="event-card">
    <span> @ {{ event.time }} on {{ event.date }}</span>
    <!-- Display event data -->
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  border: 1px solid;
  cursor: pointer;
  margin-bottom: 18px;
}
</style>
