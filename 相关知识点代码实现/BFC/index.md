# BFC 块级格式上下文，规定该环境之下的块级元素如何布局

## 规则是：

### 1、bfc 环境下一个块级元素占一整行空间，一个接一个往下排列，相邻盒子间的垂直间距由 margin 决定，相邻的垂直 margin 会重合，以高的为准

### 2、bfc 下块元素不会超出父元素，典型应用，overflow 来清除浮动引起的高度坍塌,例外就是子元素自己创建 bfc 后可能会超出父元素

### 2、能创建 bfc 环境的情况，html 为 bfc 环境，float,overflow:auto,hidden,scroll, display:inline-block,table-cell,position：fixed,absolute
