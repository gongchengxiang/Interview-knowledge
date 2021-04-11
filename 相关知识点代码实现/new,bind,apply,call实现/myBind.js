Function.prototype.myBind = function (context, ...rest){
  const _context  = context || window
  const fnkey = Symbol('fnkey')
  _context[fnkey] = this
  return function (...rest1){
    const result = _context[fnkey](...rest,...rest1)
    delete _context[fnkey]
    return result
  }
}


// example
// function getParams(...params){
//   console.log(this)
//   console.log(params)
// }
// const obj = { name:'obj'}
// getParams.myBind(obj,1,2,3)(4,5,6)