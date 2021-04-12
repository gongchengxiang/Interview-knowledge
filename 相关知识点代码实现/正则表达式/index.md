## 正则表达式字符匹配
### 字符组
1. 匹配其中任意一个字符

```javascript
const reg = /[abc]/; // 表示可以是 a,b,c 中的任意一个
```
2. 表示范围

```javascript
const reg = /[123456abcdEFGHIJ]/;
const reg1 = /[1-6a-dE-J]/;
// reg 与 reg1 一致
```
3. 排除字符组

## 正则表达式操作
> 匹配 → 验证，切割，提取，替换
### 验证
> 判断一个字符串中是否有数字

1. 使用 search

```javascript
const reg = /\d/;
const string = 'abc123';
console.log(!!~string.search(reg)); // true
```
2. 使用 match

```javascript                                                                                                        
const reg = /\d/;
const string = 'abc123';
console.log(!!string.match(reg)); // true
```
3. 使用 test

```javascript
const reg = /\d/;
const string = 'abc123';
console.log(reg.test(string)); // true
```
4. 使用 exec

```javascript
const reg = /\d/;
const string = 'abc123';
console.log(!!reg.exec(string)); // true
```

### 切割
> 切割字符串

```javascript
const reg = /\D/;
console.log('2021-01-21'.split(reg)); // ['2021', '01', '21']
console.log('2021/01/21'.split(reg)); // ['2021', '01', '21']
console.log('2021.01.21'.split(reg)); // ['2021', '01', '21']
```
### 提取
> 从字符串中提取匹配的数据，以提取日期为例

1. 使用search

```javascript
const reg = /^(\d{4})\D(\d{2})\D(\d{2})$/;
const string = '2021-01-21';
string.search(reg)
console.log(RegExp.$1, RegExp.$2, RegExp.$3);
// 2021 01 21
// 注意$1,$2,$3是RegExp对象中，而不是reg的属性
```

2. 使用match (最常用)

```javascript
const reg = /^(\d{4})\D(\d{2})\D(\d{2})$/;
const string = '2021-01-21';
console.log(string.match(reg));
// ['2021-01-21', '2021', '01', '21', index: 0, input: '2021-01-21', groups: undefined]
```
3. 使用replace

```javascript
const reg = /^(\d{4})\D(\d{2})\D(\d{2})$/;
const string = '2021-01-21';
const date = [];
string.replace(reg, function(_, year, month, day) {
  date.push(year, month, day);
});
console.log(date);
// [ '2021', '01', '21' ]
```
4. 使用exec

```javascript
const reg = /^(\d{4})\D(\d{2})\D(\d{2})$/;
const string = '2021-01-21';
console.log(reg.exec(string));
// ['2021-01-21', '2021', '01', '21', index: 0, input: '2021-01-21', groups: undefined]
```

5. 使用test

```javascript
const reg = /^(\d{4})\D(\d{2})\D(\d{2})$/;
const string = '2021-01-21';
reg.test(string);
console.log(RegE)


const reg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/