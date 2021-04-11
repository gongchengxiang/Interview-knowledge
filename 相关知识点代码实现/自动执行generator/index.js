
function run(generatorFn) {
  return new Promise((resolve,reject)=>{
    try{
      const generator = generatorFn()
      let result = generator.next()
      const next = (result)=>{
        if(result.done){
          resolve(result.value)
        }else{
          Promise.resolve(result.value).then(res=>{
            result = generator.next(res) // res传进next里面
            next(result)
          })
        }
      }
      next(result)
    }catch(err){
      reject(err)
    }
  })
}

function *fn() {
  console.log(111)
  var res2 = yield 2
  console.log(res2)
  var res3 = yield Promise.resolve(3)
  console.log(res3)
  var res4 = yield 4
  console.log(res4)
  console.log('....')
}
run(fn).then(res=>{
  console.log(res)

})