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
  constructor (...args) {
    super(...args)
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


class GreatArray extends Array {
    print () {
        console.log('## print', Array.prototype)
    }
}

var _GreatArray = new GreatArray ()

_GreatArray.print()