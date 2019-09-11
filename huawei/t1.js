var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
const result = []
rl.on('line', function (line) {
  const A = []

  const B = []

  let R
  const str_arr = line.split('},').map((value, index) => {
    if (index === 0) {
      value
        .split('={')[1]
        .split(',')
        .map(v => A.push(parseInt(v)))
    }
    if (index === 1) {
      value
        .split('={')[1]
        .split(',')
        .map(v => B.push(parseInt(v)))
    }
    R = parseInt(value.split('=')[1])
    // console.log('A', A, 'B', B, 'R', R)
  })
  A.map((va, ia) => {
    for (let i = 0; i < B.length; i++) {
      if (va <= B[i]) {
        if (Math.abs(ia - i) <= R) {
          result.push('(' + va + ',' + B[i] + ')')
          break
        } else {
          let destence = Infinity
          let ib
          for (let m = 0; m < B.length; m++) {
            if (va <= B[m]) {
              if (Math.abs(m - ia) < destence) {
                ib = m
                destence = Math.abs(m - ia)
              }
            }
          }
          // console.log('ib', ib)
          result.push('(' + va + ',' + B[ib] + ')')
          break
        }
      }
    }
    //   console.log('va ', va, 'ia ', ia, 'B', B)
    //   console.log('result: ', result)
  })
  const realresult = result.filter((v, i) => result.indexOf(v) == i).join('')
  console.log(realresult)
})
