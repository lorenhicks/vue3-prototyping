import { createStore } from 'vuex'
/* eslint-disable */
// @ts-ignore
import { auth } from './auth.module'
/* eslint-enable */

export default createStore({
  state: {
    count: 7,
    badge: '',
    hover: false,
    sortName: false,
    volunteers: [
      { name: 'Davido', pronouns: 'he, him', id: '777', county: 'Orange', active: 'active' },
      { name: 'Loren', pronouns: 'she, her', id: '333', county: 'Sarasota', active: 'active' },
      { name: 'Gemma', pronouns: 'they, them', id: '111', county: 'Miami', active: 'inactive' }
    ]
  },
  mutations: {
    sorted (state) {
      state.volunteers.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    },
    unsorted (state) {
      state.volunteers.sort((a, b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
      state.badge = ''
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
