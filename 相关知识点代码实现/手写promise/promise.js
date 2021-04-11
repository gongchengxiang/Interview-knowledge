class Promise{
  constructor(executor){
    this.state = 'pending'
    this.value = undefined
    this.onResolved = undefined
    this.onRejected = undefined

    const resolve = (value) => {
      if(this.state === 'pending'){
        this.state = 'fulfilled'
        this.value = value
        this.onResolved(value)
      }
    }

    const reject = (value) => {
      if(this.state === 'pending'){
        this.state = 'rejected'
        this.value = value
        this.onResolved(value)
      }
    }

    try{
      executor(resolve,reject)
    }catch(err){
      reject(err)
    }
  }
  then(onResolved,onRejected){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        this.onResolved = onResolved
        this.onRejected = onRejected
        if(this.state == 'fulfilled'){
          onResolved(this.value)
        }else if(){

        }else{
          
        }
      })
    })
    
  }
}