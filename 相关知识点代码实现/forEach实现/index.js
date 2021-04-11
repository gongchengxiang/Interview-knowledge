Array.prototype.mForEach = function (callback) {
  let len = this.length
  for(let i=0;i<len;i++){
    const item = this[i]
    callback(item,i,this)
  }
}