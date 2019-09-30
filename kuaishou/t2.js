// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const obj = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

let result = []
const arr = []
rl.on('line', function (line) {
  const input = line.split('')

  for (let i = 0; i < input.length; i++) {
    arr.push(obj[parseInt(i, 10)].split(''))
  }
  console.log('arr', arr)

  for (let i = 0; i < arr.length; i++) {
    for (let m = 0; m < arr[i].length; m++) {
      if (result.length == 0) {
        result.push(arr[0][m])
      } else {
        for (let x = 0; x < arr[i].length; x++) {
          result.push(result[x] + arr[i][m])
          console.log('res:', res)
        }
      }
    }
  }
  //   for (let i of input) {
  //     for (let m of obj[parseInt(i, 10)]) {
  //       console.log('m', m)
  //       if (result.length < obj[parseInt(i, 10)].length) {
  //         result.push(m)
  //         console.log('res: ', result)
  //       } else {
  //         for (let n of result) {
  //           //   console.log('n', n)
  //           n += m
  //           console.log('n: ', n, 'm :', m)
  //           // result.indexOf(n) == -1 ? result.push(n) : null
  //         }
  //       }
  //     }
  //   }
  console.log('result: ', result)
})
