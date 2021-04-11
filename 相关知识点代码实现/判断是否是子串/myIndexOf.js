String.prototype.myIndexOf = function (str){
  const parentStr = this
  const childStr = `${(str||'')}`
  if(childStr === parentStr){
    return 0
  }else if(childStr.length > parentStr.length){
    return -1
  }else {
    let resIndex = -1
    const len = parentStr.length - childStr.length + 1
    for(let i=0;i<len;i++){
      if(parentStr.substr(i,childStr.length)===childStr){
        resIndex = i
        break
      }
    }
    return resIndex
  }
}

const str = '4ej12kfh12fdjnf173912rawefjuhg3rhdugh832740fhgt32r1df023jf12'

console.log(str.indexOf('h12fdjn'))
console.log(str.myIndexOf('h12fdjn'))