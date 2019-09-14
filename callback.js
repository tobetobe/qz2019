const fa = (a, fb) => {
  for (let i = 0; i < a; i++) {
    console.log(i)
  }
  if (typeof fb === 'function') {
    fb(x)
  }
}

const cb = x => {
  console.log('callback', x)
}

// fa(10, cb)(x)

let Event = {}

Event.on = function (signal, callback) {
  if (signal == 'event01') {
    console.log(signal)
    console.log(typeof callback)
    callback()
    console.log('just callback!')
}
}

Event.on('event01', () => {
  console.log('callback')
})
