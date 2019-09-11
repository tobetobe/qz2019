// console.log(process)
const process = require('process')

// console.log(process)

const printLater = function () {
  console.log('print later')
}

process.on('uncaughtException', e => {
  console.log('error', e)
})

process.nextTick(printLater())
