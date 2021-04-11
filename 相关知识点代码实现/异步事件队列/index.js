
const events = []
const result = []
result.length = events.length
while(events.length<10){
  const eventIndex = events.length
  events.push(
    function (res){ 
      return new Promise((resolve,reject)=>{
        const time = Math.random()*2000
        setTimeout(()=>{ 
          if(time > 1000){
            reject('err:' + eventIndex)
          }else{
            console.log('success:' + eventIndex)
            result[eventIndex] = eventIndex
            resolve()
          }
        },time)
      })
    }
  )
}
// 利用reduce 和then将events 串联起来
events.reduce((t,c,i)=>{
  return t.then(c).catch(err=>{
    console.log(err)
    result[i] = err
  })
},Promise.resolve())
