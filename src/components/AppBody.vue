<template>
  <span><input type="checkbox" id="name-checkbox" @click="this.$store.state.sortName = !this.$store.state.sortName" >
  <label for="name-checkbox">Sort by name</label></span>
  ||
  <span>Search by badge #: <input v-model="this.$store.state.badge" placeholder="***" size="3" maxlength="3" /></span><span style="color:red" class="pointer" @click="this.$store.state.badge = ''"> X Clear filter</span>
  <br />
  <div>
    Results for badge #{{ this.$store.state.badge }}
  </div>
  <div v-if="this.$store.state.sortName === false">
    <ul v-for="(volunteer, v) in this.$store.state.volunteers" :key="v" @mouseover="this.$store.state.hover = true"
    @mouseleave="this.$store.state.hover = false" class="list-format flex-container"  :style="this.$store.state.badge.length < 3 || volunteer.id === this.$store.state.badge ? 'display: block' : 'display: none'">
        <li>
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
  <div v-else>
    <ul v-for="(volunteer, v) in this.$store.state.volunteers.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
" :key="v" @mouseover="this.$store.state.hover = true"
    @mouseleave="this.$store.state.hover = false" class="list-format flex-container"  :style="this.$store.state.badge.length < 3 || volunteer.id === this.$store.state.badge ? 'display: block' : 'display: none'">
      <li>
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
    const volunteerMap = store.state.volunteers
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
</style>
