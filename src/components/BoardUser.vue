<template>
  <div class='container'>
    <header class='jumbotron'>
      <h3>{{currentUser.username}} your id number is <strong>{{currentUser.id}}</strong></h3>
    </header>
  </div>
</template>
<script>
import UserService from '../services/user.service'
export default {
  name: 'User',
  data () {
    return {
      content: ''
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  mounted () {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data
      }
    )
  }
}
</script>
