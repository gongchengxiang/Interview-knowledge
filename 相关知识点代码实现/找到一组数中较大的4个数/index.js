
// arr 表示数字序列，num表示需要找最大的多少个
function getMax(arr,num){
  if(num<1) return null
  const res = [arr[0]]
  let index = 1
  while(index < arr.length){
    let i = res.length - 1
    const current = arr[index]
    while(i >= 0){
      if(current <= res[i]){
        res.splice(i+1, 0, current)
        break
      }
      if(i===0) res.unshift(current)
      i--
    } 
    if(res.length > num) res.length = num
    index++
  }
  return res
}

const arr = [123,12,541,341,5,34,123,4,23,6,367,435,2,34,23,5,346,3,5,234,12,34,2,45,3,645,67,345,324,2]
console.log(getMax(arr,3))

