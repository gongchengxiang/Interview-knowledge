// 递归二分查找
function binarySearch(arr,target,start=0,end=(arr.length-1)){
  if(!arr.length || start > end) return -1
  const mid = parseInt((start + end) / 2)
  if(arr[mid] === target){
    return mid
  }else if(arr[mid] > target){
    return binarySearch(arr, target, start, (mid - 1))
  }else{
    return binarySearch(arr, target, (mid + 1), end)
  }
} 
console.log(binarySearch([1,2,3,4,5,6,7,8,9],9))