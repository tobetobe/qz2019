const fa = (a, fb) => {
  for (let i = 0; i < a; i++) {
    console.log(i)
  }
  if (typeof fb === 'function') {
    fb(x)
  }
}

const cb = (x) => {
  console.log('callback', x)
}

fa(10, cb)(x)
