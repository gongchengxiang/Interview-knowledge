
// requestAnimationFrame 请求动画帧

// 页面运行周期
// 事件 -> js执行 -> 检查微任务队列()并执行(这个过程中如果还有添加到微任务队列的任务都会执行) -> ...
// -> requestAnimationFrame -> requestIdleCallback(如果当前帧还有时间的话执行callback,一般一帧只有16.7ms, 但是也可以设置超时时间，
// 到期强制执行,有个特点是requestIdCallback在requestAnimationFrame后面执行，如果没有requestAnimationFrame想过请求，
// requestIdleCallback直接进入下一轮才可能执行) -> 更新renderTree,回流重绘 -> 渲染这一帧

// 渲染完这一帧之后进入下一轮事件循环，
window.requestAnimationFrame(()=>{
  console.log('requestAnimationFrame')
  Promise.resolve().then(res=>{
    console.log('promise1')
  })
})
window.requestIdleCallback(()=>{
  console.log('requestIdleCallback')
  Promise.resolve().then(res=>{
    console.log('promise2')
  })
})
Promise.resolve().then(res=>{
  console.log('promise3')
  Promise.resolve().then(res=>{
    console.log('promise4')
  })
})
setTimeout(()=>{
  console.log('setTimeout')
},0)
console.log('start')