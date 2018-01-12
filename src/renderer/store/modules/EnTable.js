import axios from 'axios'

const state = {
  createdEn: []
}

const mutations = {
  SET_EN_LIST (state, createdEn) {
    state.createdEn = createdEn
  }
  // DECREMENT_MAIN_COUNTER (state) {
  //   state.main--
  // },
  // INCREMENT_MAIN_COUNTER (state) {
  //   state.main++
  // }
}

const actions = {
  LOAD_EN_LIST: function ({ commit }) {
    var url = 'https://api.novaposhta.ua/v2.0/json/'
    var apiKey = '6be5aca674dcb520b2b64a50c9f51935'
    var apiDateFrom = this.state.DateFilter.dateFilter[0]
    var apiDateTo = this.state.DateFilter.dateFilter[1]
    console.log(apiDateFrom, apiDateTo)

    var data = {
      apiKey: apiKey,
      modelName: 'InternetDocument',
      calledMethod: 'getDocumentList',
      methodProperties: {
        DateTimeFrom: apiDateFrom,
        DateTimeTo: apiDateTo,
        GetFullList: '1'
      }
    }
    axios
      .post(url, data)
      .then(response => {
        commit('SET_EN_LIST', response.data.data)
        console.log(this.state.EnTable.createdEn)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  SEND_SMS: function ({ commit }, [enNumber, phoneNumber]) {
    console.log('выход', enNumber, phoneNumber)
  }
  // someAsyncTask ({ commit }) {
  //   // do something async
  //   commit('INCREMENT_MAIN_COUNTER')
  // }
}

export default {
  state,
  mutations,
  actions
}
