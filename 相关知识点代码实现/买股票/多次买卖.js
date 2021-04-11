// 一组数字，每个值代表当天股票价格，多次买卖，得到最大利润
function getMaxProfit(prices){
  if(prices.length < 2) return 0
  let allProfit = 0
  let currentMin = prices[0]
  let i = 1
  const length = prices.length
  while(i < length){
    if(prices[i] < currentMin){
      currentMin = prices[i]
      i++
    }else if(prices[i] > currentMin && (prices[i+1] < prices[i] || i === length-1)){
      allProfit += prices[i] - currentMin
      currentMin = prices[i+1]
      i = i+2
    }else{
      i++
    }
  }
  return allProfit
}
