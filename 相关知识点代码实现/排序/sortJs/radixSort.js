// 基数排序，LSD(从个位到高位排序)，得知道所有数中最大的数的位数，先按个位排，再按十位，依次往后
// 
function radixSort(oldArr,maxDigit){
  let arr = JSON.parse(JSON.stringify(oldArr))
  let dev = 1, mod = 10 // num % mod / dev ,这样可以获取数字的个位，十位，百位...，对应的数字
  for(let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10){  // 遍历各个位数，从个位到最高位
    let sortArr = []
    for(let n = 0 ; n < arr.length; n++){ // 按当前位数的数字排序
      const c = parseInt( arr[n] % mod / dev)
      if(!sortArr[c]) sortArr[c] = []
      sortArr[c].push(arr[n])
    }
    const tempArr = []
    for(let m  = 0; m < sortArr.length; m ++){ // 按当前位数数字排完后把二维数组转为一维数组，继续进行下一个位数排序
      if(sortArr[m]){
        sortArr[m].forEach(e=> {
          tempArr.push(e)
        })
      }
    }
    arr = tempArr
  }
  return arr
}

export default radixSort;
