import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => {
  var d = new Date()
  var month = d.getMonth() + 1
  var day = d.getDate()
  var year = d.getFullYear()
  const date = day + '.' + month + '.' + year

  return new Vuex.Store({
    state: {
      createdEn: [],
      dateFilter: [
        date,
        date
      ]
    },
    actions: {
      LOAD_EN_LIST: function ({ commit }) {
        var url = 'https://api.novaposhta.ua/v2.0/json/'
        var apiKey = '6be5aca674dcb520b2b64a50c9f51935'
        var apiDateFrom = this.state.dateFilter[0]
        var apiDateTo = this.state.dateFilter[1]
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
            console.log(this.state.createdEn)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      SEND_SMS: function ({ commit }, [enNumber, phoneNumber]) {
        console.log('выход', enNumber, phoneNumber)
      }
    },
    mutations: {
      SET_EN_LIST (state, createdEn) {
        state.createdEn = createdEn
      },
      UPDATE_DATE_FILTER (state, dateFilter) {
        state.dateFilter = dateFilter
      }
    },
    getters: {},
    modules: {}
  })
}
export default store
