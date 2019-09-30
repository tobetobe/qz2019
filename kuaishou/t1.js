// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on('line', function (line) {
  const address = line

  console.log('address', address)

  if (address.indexOf(':') > -1) {
    // v6
    const arr = address.split(':')
    arr.every(item => {
      try {
        if (parseInt(item, 16) && item !== '') return true
      } catch {
        return false
      }
    })
      ? console.log('IPv6')
      : console.log('Neither')
  } else if (address.indexOf('.') > -1) {
    // v4
    const arr = address.split('.')
    arr.every(
      item => item[0] != 0 && parseInt(item) >= 0 && parseInt(item) <= 255
    ) && arr.length == 4
      ? console.log('IPv4')
      : console.log('Neither')
  } else {
    console.log('Neither')
  }
})
