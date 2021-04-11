// 其他进制转10进制
function trans1(num,currentBase){
  return parseInt(num,currentBase)
}
// 十进制转其他进制
function trans2(num,base){
  return num.toString(base)
}
// 进制任意转换
function trans (num,currentBase,targetBase){
  return trans2(trans1(num,currentBase),targetBase)
}

const num = '123ab234ad23534a'
const res = trans(num, 16, 10)
console.log(res)