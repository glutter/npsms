import axios from 'axios'
import smpp from 'smpp'

var session = smpp.connect('94.249.146.183', 29900)
var didConnect = false

session.on('connect', function () {
  didConnect = true

  session.bind_transceiver({
    system_id: 'bitrix_polystar',
    password: 'polystar2016'
  }, function (pdu) {
    console.log('pdu status', lookupPDUStatusKey(pdu.command_status))
    if (pdu.command_status === 0) {
      console.log('Successfully bound')
    }
  })
})

function lookupPDUStatusKey (pduCommandStatus) {
  for (var k in smpp.errors) {
    if (smpp.errors[k] === pduCommandStatus) {
      return k
    }
  }
}

function connectSMPP () {
  console.log('smpp reconnecting')
  session.connect()
}

session.on('close', function () {
  console.log('smpp disconnected')
  if (didConnect) {
    connectSMPP()
  }
})

session.on('error', function (error) {
  console.log('smpp error', error)
  didConnect = false
})

const state = {
  createdEn: [],
  loading: false,
  multipleSelection: []
}

const mutations = {
  SET_EN_LIST (state, createdEn) {
    state.createdEn = createdEn
  },
  SET_MULTI_EN (state, multipleSelection) {
    state.multipleSelection = multipleSelection
  }
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
        if (response.data) {
          commit('SET_EN_LIST', response.data.data)
          console.log(this.state.EnTable.createdEn)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  SEND_SMS: function ({ commit }, [enNumber, phoneNumber]) {
    console.log('выход', enNumber, phoneNumber)
    session.submit_sm({
      source_addr: 'POLYSTAR',
      destination_addr: phoneNumber,
      short_message: 'Ваш номер накладной для получения: ' + enNumber
    }, function (pdu) {
      console.log('sms pdu status', lookupPDUStatusKey(pdu.command_status))
      if (pdu.command_status === 0) {
        // Message successfully sent
        console.log(pdu.message_id)
      }
    })
  },
  SEND_ALL_SMS: function ({commit}) {
    var allMessages = this.state.EnTable.multipleSelection
    if (allMessages.length !== 0) {
      console.log(allMessages)
      alert('Успешно отправлено')
    } else {
      alert('Нечего отправлять')
    }
  }
}

export default {
  state,
  mutations,
  actions
}
