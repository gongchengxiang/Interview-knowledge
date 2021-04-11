// 简单比较两个值是否是一样的，学习于Vue源码
function looseEqual(a,b){
  if(a === b) return true
  const isObejectA = isObject(a)
  const isObejectB = isObject(b)
  if(isObejectA && isObejectB){
    try{
      const isArraryA = Array.isArray(a)
      const isArraryB = Array.isArray(b)
      if(isArraryA && isArraryB){
        return a.length === b.length && a.every((e,i)=>{
          return looseEqual(e,b[i])
        })
      }else if(!isArraryA && !isArraryB){
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return keysA.length === keysB.length && keysA.every((key)=>{
          return looseEqual(a[key],b[key])
        })
      }else{
        return false
      }
    }catch(e){
      return false
    }
  }else if(!isObejectA && !isObejectB){
    return String(a) === String(b)
  }else{
    return false
  }
}

function isObject(obj){
  return obj !== null && typeof obj === 'object'
}

