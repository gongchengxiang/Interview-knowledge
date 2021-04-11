// 其他进制转十进制（只能转2进制到36进制之间的数）
function baseChange(numstr,currentBase){ 
  const map = {"a":"10","b":"11","c":"12","d":"13","e":"14","f":"15","g":"16","h":"17","i":"18","j":"19","k":"20","l":"21","m":"22","n":"23","o":"24","p":"25","q":"26","r":"27","s":"28","t":"29","u":"30","v":"31","w":"32","x":"33","y":"34","z":"35"}
  const list = numstr.split('')
  return list.reduce((t,e,i)=>{
    const v = e <= 9 ? e : map[e];
    return t + Number(v * Math.pow(currentBase, list.length - 1 - i))
  },0)
}

const num = '234634'

console.log(baseChange(num,36))