// 
// 十进制转到其它进制（暂时只能转2到36进制，因为最小就是二进制，）
function baseChange(num,base){
  if(num == undefined || base < 2 || base > 36) return false
  const res = []
  const map = {
    10: "a", 11: "b", 12: "c", 13: "d", 14: "e", 15: "f", 16: "g", 
    17: "h", 18: "i", 19: "j", 20: "k", 21: "l", 22: "m", 23: "n", 
    24: "o", 25: "p", 26: "q", 27: "r", 28: "s", 29: "t", 30: "u", 
    31: "v", 32: "w", 33: "x", 34: "y", 35: "z"
  }
  while(num >= base){
    const yu = num % base
    res.unshift(yu > 9 ? map[yu] : yu)
    num = Math.floor(num / base)
  }
  res.unshift(num)
  return res.join('')
}

const num = 214
const res = baseChange(num, 9)
console.log(res)