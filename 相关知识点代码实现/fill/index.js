Array.prototype.myFill=function(value){
  const len = this.length
  const loop = (num)=>{
    if(num >= 0){
        this[num] = value
        return loop(num-1)
    }else{
        return this
    }
  }
  return loop(len-1)
}
var arr = []
arr.length = 4
arr.myFill({a:1})
console.log(arr)