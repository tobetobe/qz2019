var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on('line', function (line) {
  let input = line.split('')
  console.log('input: ', input)
  if (line == '""') {
    console.log(true)
    return
  }
  const Stack = []

  for (let i = 0; i < input.length; i++) {
    if (input[0] == '') {
      console.log(true)
      return
    } else if (input[0] == ')') {
      console.log(false)
      return 
    } else {
      if (input[i] == '(') {
        Stack.push(input[i])
      } else if (input[i] == ')') {
        Stack.pop()
      }
    }
  }
  Stack.length == 0 ? console.log(true) : console.log(false)
})
