import smpp from 'smpp'
import db from '@/plugins/datastore'

let smppUrl = db.get('settings.smsServer')
let smppPort = db.get('settings.smsPort')
let smppLogin = db.get('settings.smsLogin')
let smppPass = db.get('settings.smsPass')
let sender = db.get('settings.smsAlfaName')

const session = smpp.connect(smppUrl, smppPort)
let didConnect = false

session.on('connect', function () {
  didConnect = true

  session.bind_transceiver({
    system_id: smppLogin,
    password: smppPass
  }, function (pdu) {
    console.log('pdu status', lookupPDUStatusKey(pdu.command_status))
    if (pdu.command_status === 0) {
      console.log('Successfully bound')
    }
  })
})

function lookupPDUStatusKey (pduCommandStatus) {
  for (let k in smpp.errors) {
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

export {session, lookupPDUStatusKey, sender}
