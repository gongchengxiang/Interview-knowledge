var addTwoNumbers = function(l1, l2) {
  let s1 = l1||[]
  let s2 = l2||[]
  const diff = s1.length-s2.length
  if(diff>0){
    const arr = []
    arr.length = diff
    s2 = s2.concat(arr.fill(0)) 
  }else if(diff<0){
    const arr = []
    arr.length = -diff
    s1 = s1.concat(arr.fill(0)) 
  }
  const res = []
  s1.forEach((e,i) => {
    const addRes = s1[i]+s2[i]
    if(addRes>9){
      res[i] = addRes % 10
      s1[i+1] = s1[i+1] + 1
    }else{
      res[i] = addRes
    }
  });
  return res
}
const res = addTwoNumbers([2,4,3],[5,6,4])
console.log(res)