function fibonacci(n) {
  const fbnq =(n,a,b)=>{
    if(n===0) return a
    if(n===1) return b
    return fbnq(n-1,b,a+b)
  }
  return fbnq(n,1,1)
}

function fibonacci1(n) {
  let a = 1,b = 1
  let i = 2
  while(i < n){
    [a,b] = [b,a+b]
    i++
  }
  return a+b
}
console.log(fibonacci1(41))