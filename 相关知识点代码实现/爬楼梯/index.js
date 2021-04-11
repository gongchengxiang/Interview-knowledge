// 每次能爬一步或两步，一共n步台阶，一共有多少中爬法

// 解题思路: 还剩两步的时候，有可能是一次跨上去的，有可能是分两步走上去的，就这两种可能 那么
// F(x) = F(x-1) + F(x-2) 

function getMethods(n){
  let prev = 0, curr = 1, next = 2;
  for(let i = 2; i <= n; i++){
      prev = curr
      curr = next
      next = prev + curr 
  }
  return curr
}

console.log(getMethods(100))