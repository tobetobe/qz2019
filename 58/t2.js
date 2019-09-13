var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on('line', function (line) {
  let input = line.trim("'").split('')
  //   console.log('input: ', input)
  let obj = {}

  let max = {
    v: 0,
    k: undefined
  }
  input.map((value, index) => {
    if (Object.keys(obj).indexOf(value) > -1) {
      obj[value] = obj[value] + 1
    } else {
      obj[value] = 1
    }
  })
  //   console.log('obj', obj)
  Object.keys(obj).map(v => {
    //   console.log(v, obj[v], max.v)
    if (obj[v] > max.v) {
      max.v = obj[v]
      max.k = v
    }
  })
  console.log(`${max.k} ${max.v}`)
})
