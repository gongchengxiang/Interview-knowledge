// 插入排序，从第二个元素开始，和前面的进行比较，直到找到一个合适的位置，如打牌，把小的往前插
function insertSort (arr) {
  if(arr.length<2){
    return arr 
  }
  for(let i=1;i<arr.length;i++){
    for(let j=i-1;j>=0;j--){
      if(arr[i]>=arr[j]){
        arr.splice(j+1,0,...arr.splice(i,1))
        break
      }
      if(j===0){
        arr.unshift(...arr.splice(i,1))
      }
    }
  } 
  return arr
};
// const arr = [123,14,1,3412,512,31,-31,241,-12312,41,-1434,-14,1231,451,-324,532412,34534,12,41,25423,4]
// console.log(insertSort(arr))
export default insertSort; 