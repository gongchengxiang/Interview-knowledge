// 一共有n堆香蕉，[2,3,5,4,6,5,5,4,3,3],H个小时以前得吃完，假设一堆有7根，速度是每小时4根，那么也得2小时，规定当前小时内不能去吃下一堆，求最小速度是多少

// 核心思路：
// 最小速度就是一小时吃1根，不可能比这更小了
// 最大速度就是所有堆中最大堆的香蕉数，更大没有意义，因为当前小时内不能吃其他堆的
// 那么就是在[1,最大堆数量]中取一个符合条件的最小值
// 在取符合条件的值的时候，可以使用二分查找减小时间复杂度

function getMinSpeed(bananas,h) {
  let min = 1
  let max = Math.max(...bananas)
  let mid = null
  let res = 1
  while(min <= max){
    mid = Math.floor((min + max)/2)
    if(getTime(bananas,h,mid)){
      res = mid
      max = mid - 1
    }else{
      min = mid + 1
    }
  }
  return res
}
function getTime(bananas,h,s){
  let time = 0
  bananas.forEach(e => {
    time = time + Math.ceil(e / s)
  })
  return time <= h
}
const minSpeed = getMinSpeed([30,11,23,4,20],5)
console.log(minSpeed)



