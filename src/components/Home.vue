<template>
  <div class='container'>
    <header class='jumbotron'>
      <h3>myVolunteerPortal</h3>
    </header>
    <p>
      Welcome <strong>{{currentUser.username}}</strong>!
    </p>
    <p>
      Thank you for using <strong>myVolunteerPortal</strong>
    </p>
    <p>
      Use the navigation options at the top of the screen to:
      <ul>
        <li>Search the <strong>MVPortal Database</strong></li>
        <li>Update your voluneer information</li>
        <li>View or change your account settings</li>
      </ul>
    </p>
    <p>
      Select the Home Icon <font-awesome-icon icon='home' /> above to return to this page at any time.
    </p>
  </div>
</template>
<script>
import UserService from '../services/user.service'
export default {
  name: 'Home',
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
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
      }
    )
  }
}
</script>
