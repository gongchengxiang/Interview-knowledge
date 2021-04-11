// 实现setTimeout，利用window.requestAnimationFrame

function miniSetTimeout(fn, timeout, ...params){
  const startTime = Date.now()
  let timerId = { value: null }
  const loop = ()=> {
    timerId.value = window.requestAnimationFrame(loop)
    const currentTime = Date.now()
    if(currentTime - startTime >= timeout){
      fn.apply(this, params)
      window.cancelAnimationFrame(timerId.value)
    }
  }
  window.requestAnimationFrame(loop)
  // 基本类型变量无法return出去，可以传一个对象出去
  return timerId
}


// 下面这个例子，可以断定，js执行阻塞住主线程的话，requestAnimationFrame是没法执行的，和setTimeout类似
function test(text){
  console.log(text)
}
miniSetTimeout(test,100)
let i = 0
while(i < 99999999){
    i = i + 1
}