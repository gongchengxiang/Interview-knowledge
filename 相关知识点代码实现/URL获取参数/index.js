// url获取参数
// 可以利用new URL(url)方法获取一个对象，相关内容都有（针对标准的URL）
// 标准的URL指search(?)在hash(#)前面,query在hash后面的话上面那个对象就取不到search了
const url = 'https://juejin.cn/post/6935232082482298911/index.html?pageSize=10&pageNum=1#home?title=测试网址&name=gcx&sex=&age'

function getUrlInfo(url){
  return new URL(url) // url 无效的话会报错，url后面可以再传一个base地址，如（./url, https://） => https://url   
}

function getURLInfo(url){
  if(url){
    const decodedurl = decodeURIComponent(`${url}`)
    const paramsList = decodedurl.split('?')[1].split('#').shift().split('&')
    const info = {}
    paramsList.forEach (e => {
      const [key,val] = e.split('=')
      info[key] = val
    })
    return info
  }else{
    return null
  }
}
const info = getURLInfo(url)
console.log(info)