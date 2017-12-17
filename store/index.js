import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    createdEn: [],
    filterDateFrom: Date(),
    filterDateTo: Date()
  },
  mutations: {
    getCreatedEn (state, createdEn) {
      state.createdEn = createdEn
    }
  }
})

export default store