
function getImage(imageUrl) {
  return new Promise((resolve,reject)=>{
    const image = new Image()
    image.src = imageUrl
    image.onload = function () {
      resolve(image)
    }
  })
} 