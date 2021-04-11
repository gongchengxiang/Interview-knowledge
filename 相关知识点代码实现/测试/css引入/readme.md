# css中@import语法缺点

## css中使用@import './xxx.css'
### 在css文件中使用 @import 
#### 那么这个被import的css会等到引入它的css下载完解析完后再开始下载css
### 在style中使用 @import 
#### 那么只要解析到style中@import就会立即下载css

### 在IE中表现会更糟糕，例如不能并行下载的问题