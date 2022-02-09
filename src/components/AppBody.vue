<template>
  <span @click="sorted" class="pointer filter">Sort by name</span>
  ||
  <span class="filter">Search by badge #: <input v-model="this.$store.state.badge" placeholder="***" size="3" maxlength="3" /></span><span class="pointer clear" @click="unsorted"> X Clear filters</span>
  <br />
  <br />
  <div v-if="this.$store.state.badge.length > 2" class="results">
    Results for badge #{{ this.$store.state.badge }}
  </div>
  <div>
    <ul v-for="(volunteer, v) in this.$store.state.volunteers" :key="v" @mouseover="this.$store.state.hover = true"
    @mouseleave="this.$store.state.hover = false" class="list-format flex-container"  :style="this.$store.state.badge.length < 3 || volunteer.id === this.$store.state.badge ? 'display: block' : 'display: none'">
        <li @click="increment">
          <div>
          {{ volunteer.name }} | {{ volunteer.pronouns }}
          </div>
          <div>
            Badge #{{ volunteer.id }} - County: {{ volunteer.county }}
          </div>
          <img alt="Profile Photo" :src="require('@/assets/' + volunteer.name.toLowerCase() + '.jpg')" class="profile-styling">
          <span v-if="this.$store.state.hover" class="active-style"> Status: {{ volunteer.active.toUpperCase() }}</span>
        </li>
    </ul>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
  },
  methods: {
    sorted () {
      this.$store.commit('sorted')
    },
    unsorted () {
      this.$store.commit('unsorted')
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
  .active-style {
    position: relative;
    top: -20px;
    left: 40px;
    text-align: center;
  }
  .pointer {
    cursor: -webkit-pointer; cursor: pointer;
  }
  .filter {
    font-size: 10px;
    font-weight: 600;
    color: rgb(0, 0, 102);
    text-transform: uppercase;
  }
  .clear {
    font-size: 10px;
    font-weight: 600;
    color: rgb(248, 6, 6);
    text-transform: uppercase;
  }
  .results {
    font-size: 18px;
    font-weight: 700;
    color: rgb(51, 51, 141);
    text-transform: uppercase;
  }
</style>
