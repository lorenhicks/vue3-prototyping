<template>
  <div>
    <ul v-for="(volunteer, v) in volunteers" :key="v" class="list-format flex-container">
        <li>
          <div>Database Entry: {{ v }}</div>
          {{ volunteer.name }} | {{ volunteer.pronouns }} | Badge #: {{ volunteer.id }} - County: {{ volunteer.county }}
          <img alt="Profile Photo" :src="require('@/assets/' + volunteer.name.toLowerCase() + '.jpg')" class="profile-styling" @mouseover="hover = true"
    @mouseleave="hover = false">
    <span v-if="hover"> This member is {{ volunteer.active }}.</span>
        </li>
    </ul>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    console.log('###CONSOLE LOGGER', store.state.count)
    const volunteer = computed(() => [
      { name: 'Davido', pronouns: 'he, him', id: '777', county: 'Orange', active: 'active' },
      { name: 'Loren', pronouns: 'she, hers', id: '333', county: 'Sarasota', active: 'active' },
      { name: 'Gemma', pronouns: 'they, them', id: '111', county: 'Miami', active: 'inactive' }
    ])
    return { volunteer }
  },
  data () {
    return {
      volunteers: [
        { name: 'Davido', pronouns: 'he, him', id: '777', county: 'Orange', active: 'active' },
        { name: 'Loren', pronouns: 'she, hers', id: '333', county: 'Sarasota', active: 'active' },
        { name: 'Gemma', pronouns: 'they, them', id: '111', county: 'Miami', active: 'inactive' }
      ],
      hover: false
    }
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
