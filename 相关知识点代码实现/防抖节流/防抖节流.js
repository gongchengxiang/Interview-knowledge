// 防抖：在函数频繁触发的时候，只有在函数触发的间隔时间超过指定时间才会执行

function debounce (fn, time) {
  if (typeof fn === 'function' && Number.isInteger(time) && time > 0) {
    let timer = null
    return function () {
      if(timer){
        clearTimeout(timer)
      }else{
        fn()
      }
      timer = setTimeout(()=>{
        fn()
      },time)
    }
  } else {
    throw new Error('用法：fnWrap(fn: function, time: Number && time >0)');
  }
}
// 示例：
function aaa () {
  console.log('aaa');
}
const executeA = debounce(aaa, 1000);

function throttle (fn,time) {
  let canExecute = true
  return function () {
    if(canExecute){
      fn()
      canExecute = false
      setTimeout(()=>{
        canExecute = true
      },time)
    }
  }
}
// 示例：
function bbb () {
  console.log('bbb');
}
const executeB = throttle(bbb, 1000);

export default {
  debounce,
  throttle
};