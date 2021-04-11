// 主动取消
function canCancelRequest(reject){
  return function (){
    reject({code:-1,msg:'cancel'})
  }
}

function request(cancelAction){
  return new Promise((resolve,reject)=>{ 
    cancelAction.action = canCancelRequest(reject)
    setTimeout(() => { // 假设这个是请求
      resolve('请求完成')
    }, Math.random() * 5000);
  })
}



const cancelAction = {}

request(cancelAction).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
cancelAction.action()