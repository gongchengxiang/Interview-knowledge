# http 123  超文本传输协 web使用http协议作为规范，完成从客户端到服务器端等一系列运作流程。而协议是指规则的约定。可以说，Web 是建立在 HTTP 协议上通 信的。
# http2多路复用

## 1xx 请求处理中
## 2xx 响应完毕，成功
## 3xx 重定向
## 4xx 客户端错误
## 5xx 服务端错误


# code
### 100 continue
### 201 切换协议
### 200 ok
### 201 created 请求已被处理
### 202 accepted 已接到请求，未处理
### 204 not content 客户端不需要更新
### 301 moved permanently 永久重定向，影响搜索引擎修正
### 302 found 临时重定向
### 303 重定向
### 304 not Modified 无需传输请求内容 通常用(last-moddified 和if-modified-since 一对儿)（etag和if-none-match一对儿）

### 307临时重定向（302），308永久重定向（301），需要查一下和301，302的区别

### 400 bad-request  表示语法无效，客户端应检查参数
### 401 unauthorized 缺乏身份验证（请求头携带authorization ：token）
### 403 forbidden 身份验证通过，但是拒绝授权访问，例如没权限
### 404 找不到该资源
### 405 method not allowed 请求不支持

### 406 not acceptable 表示服务器不支持请求中accept相关请求头的内容，例如请求头accept-encoding，响应头content-encoding
### 409 和目标资源有冲突
### 413 payload too large ，请求主体太大，服务器不支持或者过段时间才支持
### 414 url too large
### 429 too many request
### 431 request header too large 请求头太大
### 500 internet server error 服务器错误，无法响应
### 501 not implemented meth
### 502 bad gateway 代理服务器错误
### 503 service unavailable 服务不可用
### 504 gateway timeout
### 
