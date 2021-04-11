// 例如：213434 ，获取这个数字的十位 => 3
function  getNumbyIndex(num,index){
  // num:数字
  // index:想获取指定位置的位数，如个位=1，十位=10
  return parseInt( num % (index*10) / index )
}