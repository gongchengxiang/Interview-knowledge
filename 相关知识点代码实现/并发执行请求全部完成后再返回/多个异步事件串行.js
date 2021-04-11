function sequeue(promiseList) {
  const result = []
  return promiseList.reduce((total,current,index,arr)=>{
    total = total.then(current).then(res=>{
      console.log('success:'+res)
      result.push(res)
      return res
    }).catch(err=>{
      console.log('err:'+err)
      result.push(err)
      return new Error(err)
    })
    return total
  }, Promise.resolve('start')).then(()=>{
    console.log(result)
  })
}

const events = [ ]
let i = 0
while(i<10){
  events.push(
    ((id)=>{
      return ()=>new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(Math.random()>0.5){
            resolve(id)
          }else{
            reject(id)
          }
        },Math.random()*5000)
      })
    })(i)
  )
  i++
}

sequeue(events,[])