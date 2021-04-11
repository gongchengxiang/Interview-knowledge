// 选择排序，循环一次找到一个剩余值中的最小值依次放到前面, n*(n-1) + n*(n-2) + ... + n*1
function selectionSort (arr) {
  if(arr.length<2) return arr
  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[i]){
        [arr[j],arr[i]]=[arr[i],arr[j]]
      }
    }
  }
  return arr
}
export default selectionSort;