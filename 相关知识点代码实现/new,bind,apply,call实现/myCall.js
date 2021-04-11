Function.prototype.myCall = function (context,...rest){
  const _context = context || window
  const fnkey = Symbol('fnkey')
  _context[fnkey] = this
  const result = _context[fnkey](...rest)
  delete _context[fnkey]
  return result
}