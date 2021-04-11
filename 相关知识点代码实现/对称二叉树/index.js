//看样子是瞎扯淡
var isSymmetric = function(root) {
  const arr = root || []
  const res = []
  let num = 1
  while(arr.length>0){
    if(arr.length<num){
      return false
    }else{
      res.push(arr.splice(0,num))
      num *= 2
    }
  }
  for(let i=0,l=res.length;i<l;i++){
    const len = res[i].length
    if(len>1){
      const group = [res[i].slice(0,len/2).map(e=>String(e)),res[i].slice(len/2).map(e=>String(e)).reverse()]
      if(group[0].join('')!=group[1].join('')){
        return false
      }
    }
  }
  return true
};
// const res = isSymmetric([1,2,2,3,4,4,3])
const res = isSymmetric([1,2,2,null,3,null,3])
console.log(res)