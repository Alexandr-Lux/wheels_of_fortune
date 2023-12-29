import { createStore } from 'vuex'

export default createStore({
  state: {
    players: [],
    winner: ''
  },
  mutations: {
    SET_FIELD(state, [field, value]) {
      state[field] = value
    }
  }
})
