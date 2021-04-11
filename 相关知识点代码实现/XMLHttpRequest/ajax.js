// // 使用示例
// ajax({
//   method:'post',
//   url:'/xxx/xx',
//   header:{
//     'Content-Type':'application/x-www-form-urlencoded',
//   },
//   params:{
//     test:'111'
//   },
//   timeout:10000,
//   success(res){

//   },
//   error(err){

//   }
// })


// function ajax(option = {}) {
//   const { method, url, header, params, success, error, timeout} = options
//   if(method.toUpperCase() === 'GET'){
    
//   }
//   const URL = new URL(url)
  
//   const methods = ['GET','POST','PUT','DELETE']
//   if(methods.includes(method.toUpperCase())){
//     const http = new XMLHttpRequest()
//     http.open(method.toUpperCase(), URL.href)
//     for(let key in header){
//       http.setRequestHeader(key,header[key])
//     }
    
//   }else{
//     throw new Error('请求方式不存在')
//   }
// }

 function onreadystateChange(){
   if(this.readyState == 4){
    // 0 还没send
    // 1 send中
    // 2 send完成
    // 3 接收到部分响应
    // 4 解析响应完成
   }
 }