// 一组数字，每个值代表当天股票价格，找到在最低价格买入，接下来最高价格卖出的利润，不能盈利则利润为0
const prices = [1224,1231,2522,211,4122,6134,2312]

function getMaxProfit(arr){
  const length = arr.length
  if(length<2) return 0
  let max = 0
  let min = arr[0]
  let i = 1
  while(i < length){
    if(arr[i] < min){
      min = arr[i]
    }else if(arr[i] - min > max){
      max = arr[i] - min
    }
    i++
  }
  return max
}
console.log(getMaxProfit(prices))