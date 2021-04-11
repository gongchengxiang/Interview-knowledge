

function deepClone(obj){
  if(!obj) return obj
  const type = typeof obj
  if(type == 'object'){
    let result = null
    if(Array.isArray(obj)){
      result = []
      obj.forEach((e,i)=>{
        result[i] = deepClone(e)
      })
      return result
    }else{
      result = {}
      Object.keys(obj).forEach(key=>{
        result[key] = deepClone(obj[key])
      })
      return result
    }
  }else{
    return obj
  }
}

var obj = {
  a:1,
  b:{
    c:2,
    d:{
      e:3,
      f:function name(params) {
        console.log(1)
      },
      reg: /ggg/g,
      date:new Date(),
      un:undefined,
      nu:null
    }
  }
}
console.log(deepClone(obj))
