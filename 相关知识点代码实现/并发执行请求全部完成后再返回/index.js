let i = 0
setInterval(()=>{
  document.querySelector('.num').innerHTML = ++i
},2000)
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
limitRequest(urls,1)

function getImage(imageUrl) {
  return new Promise((resolve,reject)=>{
    const image = new Image()
    image.src = imageUrl
    image.width = 40
    image.onload = function () {
      resolve(image)
    }
  })
}

function appendImg(url,index,result) {
  return getImage(url).then(img=>{
    result.push(img)
    document.querySelector('.images').appendChild(img)
    return index
  })
}

function limitRequest(requestUrls = [],limit = Infinity) {
  const result = [] //返回的结果
  const queue = [] // 当前执行中的队列

  let firstGroup = requestUrls.splice(0,limit).map((url,index)=>{
    return appendImg(url,index,result)
  })

  queue.push(...firstGroup)

  function loop(queue) {
    return Promise.race(queue).then(index=>{
      if(requestUrls.length){
        queue[index] = appendImg(requestUrls.shift(),index,result)
        return loop(queue)
      }else{
        return Promise.all(queue).then(()=>{
          console.log(result)
        })
      }
    })
  }

  loop(queue)
}
