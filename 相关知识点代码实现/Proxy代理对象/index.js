var testObj = {
  a:1,
  b:{ba:1},
  c:[{a:1}]
}
var ptest = defineReactive(testObj)

function defineReactive(obj){
  if(typeof obj != 'object' || obj === null){
    return obj
  }
  return new Proxy(obj,{
    get(target,key,receiver){
      const res = Reflect.get(target,key,receiver)
      if(typeof res === 'object' && res !== null){
        return defineReactive(res)
      }else{
        console.log(`监听get[${key}]:${res}`)
        return res
      } 
    },
    set(target,key,value,receiver){
      const res = Reflect.set(target, key, value, receiver)
      if(typeof res === 'object' && res !== null){
        return defineReactive(res)
      }else{
        console.log(`监听set[${key}]:${value}`)
        return res
      }
    },
    deleteProperty(target,key){
      const value = Reflect.get(target,key,receiver)
      if(typeof value === 'object' && value !== null){
        return defineReactive(value)
      }else{
        console.log(`监听delete[${key}]:${res}`)
        return Reflect.deleteProperty(target, key)
      } 
    }
  })
}

// 不太行

