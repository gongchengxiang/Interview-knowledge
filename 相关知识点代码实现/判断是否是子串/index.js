// 例如: abc 是不是 abacdfalsaabcdad 的子串
// 可理解为实现indexOf方法
function IndexOf(childStr,str){
  if(childStr === str){
    return 0
  }else if(childStr.length > str.length){
    return -1
  }else {
    const child = childStr.split('')
    const parent = str.split('')
    let currentIndex = 0
    let index = -1
    while(currentIndex < (parent.length - child.length)){
      if(parent[currentIndex] === child[0]){
        let childIndex = 1
        while(parent[currentIndex + childIndex] === child[childIndex]){
          childIndex++
        }
        if(childIndex === child.length){
          index = currentIndex
          break
        }
      }
      currentIndex++
    }
    return index
  }
}
console.log(IndexOf('adx','gdfzjandjsadhbfaduadsksfjnadjksfshadbfuaaddsnkadadsbfasbdhfadjadshbshbfuaaddsfuadshfhiwadx'))
console.log('gdfzjandjsadhbfaduadsksfjnadjksfshadbfuaaddsnkadadsbfasbdhfadjadshbshbfuaaddsfuadshfhiwadx'.indexOf('adx'))