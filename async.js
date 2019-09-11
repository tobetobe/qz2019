// // Condition NO.1
// const realReq = () =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolve')
//       console.log('Promise is Done')
//     }, 500)
//   })

// async function asyncreq () {
//   await realReq()
//   console.log('HERE!  :)')
// }

// function normalreq () {
//   realReq()
//   console.log('normal is here!')
// }

// asyncreq()

// setTimeout(() => {
//   console.log('======waiting...======')
// }, 800)

// normalreq()

// setTimeout(() => {
//   console.log('===========Condition No.2===========')
// }, 2000)
// // Condition NO.2

// const fakeReq = () => {
//   for (let i = 0; i < 100; i++) {
//     console.log(i)
//   }
// }

// async function req2 () {
//   await fakeReq()
//   console.log('Condition2 arrived here.')
// }

// console.log(req2())

const a = (info) => {
  console.log('a')
}

async function b () {
  await a()
  console.log('b', new Date())
}

// b().then(info => console.log('then', info))

// console.log(b())

const c = async function () {
    // await b()
    b ()
    console.log('chhhh')
}

c()