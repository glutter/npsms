import axios from 'axios'
import {session, lookupPDUStatusKey} from '@/plugins/smpp'

const sender = 'POLYSTAR'

const state = {
  createdEn: [],
  loading: false,
  multipleSelection: []
}

const mutations = {
  SET_EN_LIST (state, createdEn) {
    state.createdEn = createdEn
  },
  SET_MULTI_EN (state, value) {
    state.multipleSelection = value
  }
}

const actions = {
  LOAD_EN_LIST: function ({ commit }) {
    var url = 'https://api.novaposhta.ua/v2.0/json/'
    var apiKey = '6be5aca674dcb520b2b64a50c9f51935'
    var apiDateFrom = this.state.DateFilter.dateFilter[0]
    var apiDateTo = this.state.DateFilter.dateFilter[1]

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
        if (response.data.data.length !== 0) {
          commit('SET_EN_LIST', response.data.data)
        } else {
          alert('Нет накладных за выбранный период. Выберите другую дату')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  SEND_SMS: function ({ commit }, [enNumber, phoneNumber]) {
    console.log('выход', enNumber, phoneNumber)
    session.submit_sm({
      source_addr: sender,
      destination_addr: phoneNumber,
      short_message: 'Ваш номер накладной для получения: ' + enNumber
    }, function (pdu) {
      console.log('sms pdu status', lookupPDUStatusKey(pdu.command_status))
      if (pdu.command_status === 0) {
        // Message successfully sent
        console.log(pdu.message_id)
        alert('Успешно отправлено')
      }
    })
  },
  SEND_ALL_SMS: function ({commit}) {
    var allMessages = this.state.EnTable.multipleSelection
    if (allMessages.length !== 0) {
      var itemsProcessed = 0
      for (let i = 0; i < allMessages.length; i++) {
        var e = allMessages[i]
        session.submit_sm({
          source_addr: sender,
          destination_addr: e.RecipientsPhone,
          short_message: 'Ваш номер накладной для получения: ' + e.IntDocNumber
        }, function (pdu) {
          console.log('sms pdu status', lookupPDUStatusKey(pdu.command_status))
          if (pdu.command_status === 0) {
            // Message successfully sent
            console.log(pdu.message_id)
          }
        })
        itemsProcessed++
        if (itemsProcessed === allMessages.length) {
          alert('Успешно отправлено')
        }
      }
    } else {
      alert('Нечего отправлять. Сперва нужно отметить накладную')
    }
  }
}

export default {
  state,
  mutations,
  actions
}
