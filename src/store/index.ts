import { createStore } from 'vuex'

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
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
