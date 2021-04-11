// promise 正常只能是pending状态到fulfilled或者rejected状态，中途不可中断。
// 但是类似请求时间过长需要提前取消请求的情况则需要中断promise
// 下面这个方法的核心在于提前执行reject方法，使后续resolve或者reject方法无效


let cancelRequest = function (reject){
  reject({code:-1,msg:'cancel'})
};

function request(){
  return new Promise((resolve,reject)=>{ 
    const timer = setTimeout(() => { // 2s后执行，类似超时取消请求
      console.log('执行取消')
      cancelRequest(reject)
    }, 2000);
    setTimeout(() => { // 假设这个是请求
      clearTimeout(timer)
      resolve('请求完成')
    }, Math.random() * 5000);
  })
}

request().then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
