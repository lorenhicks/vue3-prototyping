<template>
  <div>
    <ul v-for="(volunteer, v) in this.$store.state.volunteers" :key="v" class="list-format flex-container">
        <li>
          <div>Database Entry: {{ v }}</div>
          {{ volunteer.name }} | {{ volunteer.pronouns }} | Badge #: {{ volunteer.id }} - County: {{ volunteer.county }}
          <img alt="Profile Photo" :src="require('@/assets/' + volunteer.name.toLowerCase() + '.jpg')" class="profile-styling" @mouseover="this.$store.state.hover = true"
    @mouseleave="this.$store.state.hover = false">
    <span v-if="this.$store.state.hover"> This volunteer is {{ volunteer.active }}.</span>
        </li>
    </ul>
  </div>
</template>
<script>
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
  }
}
</script>

<style lang="scss">
  .flex-container {
    display: flex;
    background-color: #6c6cec;
    max-width: 100vw;
  }
  .flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  }
  .list-format {
    text-align: left;
    font-size: 20px;
    color: #ffffff;
    padding: 5px;
  }
  .profile-styling {
    padding: 10px;
    box-shadow: 2px 2px 2px 1px rgba(1, 1, 61, 0.2);
  }
</style>
