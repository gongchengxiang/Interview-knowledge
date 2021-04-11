function getImage(imageUrl) {
  return new Promise((resolve,reject)=>{
    const image = new Image()
    image.src = imageUrl
    image.onload = function () {
      resolve(image)
    }
  })
}

function collectImage(url,index,result) {
  return getImage(url).then(res=>{
    result.push(res)
    return index
  })
}
/**
 * 
 * @param {Array<String>} urls 
 * @param {Number} limit 
 * @returns 
 */
function limitRequest(urls = [],limit = Infinity) {
  const result = []
  const firstGroup = urls.splice(0,limit).map((url,index)=>{
    return collectImage(url,index,result)
  })
  const queue = [...firstGroup]
  function loop(queue) {
    return Promise.race(queue).then(index=>{
      if(urls.length){
        queue[index] = collectImage(urls.shift(), index, result)
        return loop(queue)
      }else{
        return Promise.allSettled(queue).then(()=>{
          return result
        })
      }
    })
  }
  return loop(queue)
}
