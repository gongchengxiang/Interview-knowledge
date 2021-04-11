// 用递归


const arr = [['a','b'],['c','d'],['e','f']]
const res = []
function fn(arr,index,rest) {
  if(arr[index]){
    for(let i = 0;i<arr[index].length;i++){
      fn(arr,(index+1),[...rest,arr[index][i]])
    }
  }else{
    res.push(rest)
  }
  
}
fn(arr,0,[])
