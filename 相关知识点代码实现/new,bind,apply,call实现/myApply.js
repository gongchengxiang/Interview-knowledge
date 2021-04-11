Function.prototype.myApply = function (context,paramsArr){
  const _context = context || window
  const fnkey = Symbol('fnkey')
  _context[fnkey] = this
  const result = _context[fnkey](...paramsArr)
  delete _context[fnkey]
  return result
}