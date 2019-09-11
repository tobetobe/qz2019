var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

function node (value, next) {
  this.value = value
  this.next = next
}

rl.on('line', function (line) {
  const listarray = line.split(' ')
//   console.log(listarray)
  let head = new node()
  for (let item of listarray) {
    // console.log('item', item)
    if (head.value == undefined) {
      head.value = item
      head.next = new node()
      var list = head.next
    } else {
      list.value = item
      list.next = new node()
      list = list.next
    }
  }

  const stack = []
  while (head.next != undefined) {
    stack.push(head.value)
    head = head.next
  }

//   console.log('stack', stack)
  let _head = new node()
  while (stack.length != 0) {
    let item = stack.pop()
    // console.log('item', item)
    if (_head.value == undefined) {
      _head.value = item
      _head.next = new node()
      var relist = _head.next
    } else {
      relist.value = item
      relist.next = new node()
      relist = relist.next
    }
  }

//   console.log('relist: ', JSON.stringify(_head))

  const result = []

  while (_head.next != undefined) {
    result.push(_head.value)
    _head = _head.next
  }
//   console.log(result)
  console.log(result.join(' '))
})
