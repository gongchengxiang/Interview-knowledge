const arr = [-2,1,-3,4,-1,2,1,-5,4]
function getMaxSubArray(arr){
  let max = arr[0]
  let currentMax = arr[0]
  let i = 1
  while(i < arr.length){
    currentMax = Math.max(currentMax + arr[i], arr[i])
    max = Math.max(max, currentMax)
    i++
  }
  return max
}

console.log(getMaxSubArray(arr))