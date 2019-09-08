var xw = {
  name: '小王',
  gender: '男',
  age: 24,
  say: function () {
    console.log(this.name + ' , ' + this.gender + ' ,今年' + this.age)
  }
}
var xh = {
  name: '小红',
  gender: '女',
  age: 18
}
xw.say()

xw.say.call(xh)

xw.say.apply(xh)

xw.say.bind(xh)()
