<template>
  <div>
    <ul v-for="(volunteer, v) in volunteers" :key="v" class="list-format">
        <li>{{ volunteer.name }} | ID: {{ volunteer.id }} | County: {{ volunteer.county }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      volunteers: [
        { name: 'Davido', id: '777', county: 'Orange' },
        { name: 'Loren', id: '333', county: 'Orange' },
        { name: 'Gemma', id: '111', county: 'Orange' }
      ]
    }
  }
}
</script>

<style lang="scss">
    .list-format {
      color: rgb(0, 81, 255);
      text-align: left;
    }
</style>
