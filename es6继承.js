class Father {
  constructor (name) {
    this.name = name
    this.sex = 'man'
  }
  walk () {
    console.log('walk', this)
  }
}

class Son extends Father {
  constructor (name) {
    super(name)
  }
  say () {
    super.walk()
    console.log('son says', this.name)
  }
}

var father = new Father('liu')
//walk Father { name: 'liu', sex: 'man' }

father.walk()

var son = new Son('wei')

son.say()
//walk Son { name: 'wei', sex: 'man' }
//son says wei
