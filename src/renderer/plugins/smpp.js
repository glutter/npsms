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

export {session, lookupPDUStatusKey}
