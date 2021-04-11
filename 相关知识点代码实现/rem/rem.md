# rem学习记录
## 基本要求是不管多大的屏幕，显示的内容和设计稿【同比缩放】(下述均参考设计稿375px宽度,div假设是100px宽，40px高)
### 1、古老的方法，利用html:font-size和rem属性来完成等比缩放。
#### 假设设计稿宽375px,设置html的font-size的为100px(1是px有最小限制12px,2是除以100好算),如下：
```css{
  html{
    font-size:100px;
  }
  div{
    width:1rem;
    height:0.4rem;
  }
}
/* 当前css是在375px宽度中刚好和设计稿一致，如果屏幕宽度大于或小于375都将布局错乱，那么就需要在window.resize的时候重置html的fontSize属性 */
```
```js
  function setHtmlFontSize(){
    const bodyWidth = document.body.clientWidth
    document.querySelector('html').style.fontSize = bodyWidth * 100 / 375 + 'px'
  }
  setHtmlFontSize()
  window.addEventListener('resize',setHtmlFontSize,false)
```
### 2、利用vw属性，比如设计稿是375px宽度，则将其分为375份，1px就是1vw (100vw/375)，那么如果项目中用了类似Sass的css预处理语言，则可以使用:
```scss
  @function px2vw($px){
    return $px / 375 * 100vw;
  }
  
  // xxx.css 中：
  div{
    width: px2vw(100);
    height:px2vw(40);
  }
  // 这样的话，这个div就一直是想对与375px设计稿在真实屏幕宽度中自适应缩放
```
### 3、利用vw和rem属性，如果项目中没有使用类似Sass的预处理语言，那么设置html的fontSize为calc(100vw/375),则在在375的宽度时，1px = 1rem = calc(100vw/375) = 0.26666666666...vw, 网易新闻的h5页面给这个数乘以100，然后px/100=rem,个人认为这样做一是能提高精度，二是以前老的代码都是除以100设置的rem,那么采用这种方案的话改动的地方少；
```css
  html{
    /* font-size:calc(100vw/375*100) */
    font-size: 26.6666666666vw;
  }
  div{
    width:1rem;
    height:0.4rem;
  }
  /* 这其实就是方法1的升级版，不用再用js来动态设置html的fontSize */
```

