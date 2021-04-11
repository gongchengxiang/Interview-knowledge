Array.prototype.myReduce = function (reducer,initValue) {
  const arr = [].slice.call(this)
  let res = initValue
  arr.forEach((e,i)=>{
    res = reducer.call(null,res,e,i,arr)
  })
  return res
}

var x = [1,23,12,31,3,12].reduce((t,c,i,arr)=>{
  return t + c
},0)
console.log(x)

var z = [1,23,12,31,3,12].myReduce((t,c,i,arr)=>{
  return t + c
},0)
console.log(z)


