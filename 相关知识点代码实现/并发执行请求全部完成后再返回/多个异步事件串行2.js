const executor = function (events) {
  let index = 0
  const next = ()=>{
    if(index<events.length){
      events[index](next)
      index++
    }else{
      console.log('done')
    }
  }
  next()
}
const events = [
  (next) =>{
    setTimeout(()=>{
      console.log(111)
      next()
    },1000)
  },
  (next) =>{
    setTimeout(()=>{
      console.log(222)
      next()
    },2000)
  },
  (next) =>{
    setTimeout(()=>{
      console.log(333)
      next()
    },1000)
  }
]
executor(events)