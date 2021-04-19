function getType(value){
  return Object.prototype.toString.call(value).replace(/(\[|\]|object|\s)/g,'')
}
function json2str(o) { 
  let arr = []; 
  const fmt = function(s) {
    if(typeof s == 'object' && s !== null) return json2str(s); 
    return /^(string)$/.test(typeof s) ? `"${s}"`: s; 
  }
  for (var i in o){
    arr.push(`"${i}":${fmt(o[i])}`) 
  }
  return `{${arr.join(',')}}` 
}
