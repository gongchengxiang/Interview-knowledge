var str = 'rewr444ew2222123e23rrrr2123t222e2341231112314444eeeeee'
function getLongestRepeatChildStr(str){
  var arr = str.split('')
  var resObj ={}
  var count = 0
  var currnenKey = ''
  arr.forEach((e,i)=>{
      if(i===0){
        count++
        currnenKey = e
        
      }else{
        if(e===arr[i-1]){
          count++
          currnenKey=e.repeat(count)
        }else{
          resObj[currnenKey]=count
          count=1
          currnenKey=e
        }
      }
      if(count>0) {
        resObj[currnenKey]=count
      }
  })
  var result = []
  for(const childStr in resObj){
    if(result.length===0){
      result.push(childStr)
    }else {
      if(resObj[childStr]>result[0].length){
        result = [childStr]
      }else if(resObj[childStr]===result[0].length){
        result.push(childStr)
      }
    }
  }
  return result
}
console.log(getLongestRepeatChildStr(str))