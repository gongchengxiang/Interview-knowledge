function  create(fn,...rest) {
  const obj = Object.create(fn.prototype)
  const res = fn.call(obj,...rest)
  return res instanceof Object ? res : obj
}

// 核心在于创一个以fn的原型为原型的对象,然后fn的上下文指定为这个对象,然后执行这个fn,
// 执行结果看是否是对象，是对象则返回这个对象，不是则返回一开始闯将那个对象