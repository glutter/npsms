import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    createdEn: [],
    dateFilter: {
      dateFrom: new Date(),
      dateTo: new Date()
    }
  },
  actions: {
    LOAD_EN_LIST: function ({commit}) {
        var url = 'https://api.novaposhta.ua/v2.0/json/'
        var apiKey = '6be5aca674dcb520b2b64a50c9f51935'
        var data = {
          "apiKey": apiKey,
          "modelName": "InternetDocument",
          "calledMethod": "getDocumentList",
          "methodProperties": {
            "DateTimeFrom": this.state.dateFilter.dateFrom.toLocaleDateString("ru-RU"),
            "DateTimeTo": this.state.dateFilter.dateTo.toLocaleDateString("ru-RU"),
            "GetFullList": "1"
          }
        }
        axios.post(url, data).then((response) => {
          commit('SET_EN_LIST', response.data.data)
          console.log(this.state.createdEn)
        }).catch(function (error) {
          console.log(error)
        })
    }
  },
  mutations: {
    SET_EN_LIST (state, createdEn) {
      state.createdEn = createdEn
    }
  },
  getters: {

  },
  modules: {

  }
})

export default store