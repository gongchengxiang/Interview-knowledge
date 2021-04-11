class A{
  constructor(){
    this.a = []
  }
  push(val){
    this.a.push(val)
    return this.a
  }
  static getSingleInstance = (function () {
    let instance = null
    return function () {
      return instance || (instance = new A())
    }
  })()
}

const a = A.getSingleInstance()
const b = A.getSingleInstance()
console.log(a===b)