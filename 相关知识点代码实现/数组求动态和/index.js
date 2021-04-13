// 数组动态和，sum[i] = sum[0]+...+sum[i]
function sum(arr){
  const res = []
  let i = 0 
  while(i < arr.length){
    if(i === 0){
      res[i] = arr[i]
    }else{
      res[i] = res[i-1] + arr[i]
    }
    i++
  }
  return res
}

console.log(sum([1,2,3,4]))
console.log(sum([1,1,1,1,1]))
