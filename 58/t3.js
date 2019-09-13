var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on('line', function (line) {
  // 13254 4354325
  const input = line.split(' ')

  const a = parseInt(input[0])
  const b = parseInt(input[1])
  console.log(a, b, a + b)
})
