// js 采用IEEE754标准实现的Number类型，采用的是双精度浮点型存储数据
// 单精度和双精度的特点是，单精度用32位二进制数存储，包括1个符号位，8个指数位，23个小数位
// 双精度采用64位二进制数存储，包括1个符号位，11个指数位，52个小数位
// 因为双精度浮点型占用64个二进制位，8个二进制位（bit）= 1字节（byte）(8bit = 1byte,计算机规定8个二进制位等于1字节)
// 那么双精度浮点型数据就占了8 * 8bit = 8byte, 
// js数字运算，现将数组转为二进制数，计算完再转为10进制数，转换的过程中超出双精度浮点型所能存储的最大位就会被忽略，然后产生误差

// 0.1 转换成二进制：0.000110011001100110....
// 0.2 转换成二进制：0.001100110011001100....
// 0.000110011001100110.... + 0.001100110011001100.... = 0.0100110011001100110011001100110011001100110011001100...
// 还很多，如果超过了 52 位就截断了
// 然后转换成十进制：0.30000000000000004

// 可以采用先乘以倍数消除小数点，然后结果再除以倍数，但是同样面临数字超过最大数的问题
// 小数转二进制的方法是：
// 将小数乘以二，整数部分存储，小数部分重复该操作，存储的按顺序就是二进制小数


// 十进制小数转其他进制小数
function trans1(num,targetBase = 2){
  let snum = num - Math.floor(num)
  const res = []
  while(parseInt(snum) != snum){ // 说明有小数
    snum = snum * targetBase
    res.push(Math.floor(snum))
    snum = snum - Math.floor(snum)
  }
  return '0.' + res.join('')
}
const num = 0.2
const res = trans1(num, 2)
console.log(res)

// 其他进制转十进制小数
function trans2(num,currentBase){
  const list = `${num}`.split('.')[1].split('')  
  return list.reduce((t,e,i) => {
    return t + e * Math.pow(currentBase, -Number(i+1))
  },0)
}

const num1 = 0.001
const res1 = trans2(num1, 2)
console.log(res1)

