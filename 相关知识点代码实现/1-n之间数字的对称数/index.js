function print(n){
  const res = []
  let i = 1
  while(i<n){
      if(ishw(i)){
        res.push(i)
      }
      i++
  }
  function ishw(num){
      let str = `${num}`
      if(str.length < 2) return false
      let a = 0
      let b = str.length - 1
      while(a<b){
        if(str[a] != str[b]){
            return false
        }
        a++
        b--
      }
      return true
  }
  return res 
}

console.log(print(10000))