// 核心就是顺着原型链找，找到就是true，找不到就是false

function instanceOf(target,type){
  if(typeof target !=='object' || target === null) return false 
  const parentType = type.prototype
  let targetType = target.__proto__
  while(targetType){
    if(targetType===parentType){
      return true
    }
    targetType = targetType.__proto__
  }
  return false
}

console.log(instanceOf([],Number)) // number
console.log(instanceOf([],Object)) // Object
console.log(instanceOf([],Array)) //Array