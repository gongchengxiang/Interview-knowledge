// 模仿jQuery的ajax Api
ajax({
	url: '/test',
	method: 'POST',
	type: 'json',
	data: {},
	success: function(res) {
		console.log(res)
	},
	error: function(err) {
		console.log(err)
	} 
})
function ajax (option){
  if(Object.prototype.toString.call(option) !== '[object Object]') {
    throw new Error('options is not a object!')
  }else{
    option.method = option.method ? option.method.toUpperCase() : 'GET';
    option.data = option.data || {};
    option.type = option.type || 'json';
    /// TODO:data待处理
    const xhr = new XMLHttpRequest();
    xhr.responseType = option.type;
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          if(option.success && typeof option.success === 'function') {
            option.success(xhr.response)
          }
        } else {
          if(option.error && typeof option.error === 'function') {
            option.error(new Error(xhr.statusText))
          }
        }
      }
    }
    xhr.open(option.method, option.url, true); // true 代表是异步请求
    if (option.method === 'POST') xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(option.method === 'POST' ? option.data : null);
    return xhr
  }
}