// 再写一遍
function getImage(url) {
  return new Promise((resolve,reject)=>{
    const image = new Image()
    image.src = url
    image.width = 40
    image.onload = function () {
      resolve(image)
    }
  })
}
function collectImg(url,index,result) {
  return getImage(url).then(img=>{
    result.push(img)
    document.body.appendChild(img)
    return index
  }).catch(err=>{
    result.push(err)
    return index
  })
}
function limitRequest(urls,limit = Infinity) {
  const result = []
  const queue = []
  const firstGroup = urls.splice(0,limit).map((url,index)=>{
    return collectImg(url,index,result)
  })
  queue.push(...firstGroup)
  const loop = (queue)=>{
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
  loop(queue)
}


var urls = [
  'http://localhost:9091/img/1',
  'http://localhost:9091/img/2',
  'http://localhost:9091/img/3',
  'http://localhost:9091/img/4',
  'http://localhost:9091/img/5',
  'http://localhost:9091/img/6',
  'http://localhost:9091/img/7',
  'http://localhost:9091/img/8',
 ];
 limitRequest(urls,3)