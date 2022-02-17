<template>
  <div>
      <h2>{{ currentUser.username }}'s Volunteer Log</h2>
      <hr />
      <div class="alert alert-success" v-if="isSuccess">
          Post Created Successfully
      </div>
      <form @submit.prevent="onCreatePost">
          <div class="form-group">
              <label>County</label>
              <input type="text" class="form-control" v-model="county" />
          </div>
          <div class="form-group">
              <label>Activities</label>
              <textarea
                  class="form-control"
                  v-model="activities"
              ></textarea>
          </div>
          <div class="mt-3">
              <button type="submit" class="btn btn-primary">
                  Add Entry
              </button>
              &nbsp;
              <button type="reset" class="btn btn-secondary">
                  Clear Fields
              </button>
          </div>
      </form>
  </div>
</template>
<script>
import axios from 'axios'
import UserService from '../services/user.service'
export default {
  name: 'User',
  data () {
    return {
      county: '',
      activities: '',
      isSuccess: false
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
  },
  methods: {
    onCreatePost () {
      axios.post('http://localhost:8080/post.json', {
        county: this.county,
        activities: this.activities
      })
        .then((response) => {
          this.isSuccess = true
          console.log('Post test', response)
          this.$emit('postcreated')
        })
    }
  }
}
</script>
