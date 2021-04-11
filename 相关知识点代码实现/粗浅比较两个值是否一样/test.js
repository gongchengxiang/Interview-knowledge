// 再写一遍
function  looseEqual(a,b) {
  if(a == b) return true
  const isObja = isObject(a)
  const isObjb = isObject(b)
  if(isObja && isObjb){
    const isArra = Array.isArray(a)
    const isArrb = Array.isArray(b)
    if(isArra && isArrb){
      return isArra.length == isArrb.length && a.every((e,i)=>{
        return looseEqual(e, b[i])
      })
    }else if(!isArra && !isArrb){
        const akeys = Object.keys(a)
        const bkeys = Object.keys(b)
        return(akeys.length === bkeys.length) && akeys.every((k)=>{
          return looseEqual(a[k],b[k])
        })
    }else{
      return false
    }
  }else if(!isObja && !isObjb){
    return String(a) == String(b)
  }else{
    return false
  }
}
function isObject(val) {
  return val!==null && typeof val === 'object'
}