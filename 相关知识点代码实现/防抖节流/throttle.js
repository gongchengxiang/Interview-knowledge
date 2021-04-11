// throttle 节流, 指定时间内只能执行一次
function throttle(fn,time) {
  let canExecute = true  
  return function () {
      if(canExecute){
        fn()
        canExecute = false
        setTimeout(()=>{
          canExecute= true
        },time)
      }
  }
}