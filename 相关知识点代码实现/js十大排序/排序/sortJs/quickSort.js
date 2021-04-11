function quickSort(arr){
  if(arr.length<2) return arr
  const left = []
  const right = []
  const centerIndex = Math.floor(arr.length/2)
  arr.forEach((item,index)=>{
    if(index!=centerIndex){
      if(item<=arr[centerIndex]){
        left.push(item)
      }else{
        right.push(item)
      }
    }
  })
  return quickSort(left).concat(arr[centerIndex],quickSort(right))
}
export default quickSort