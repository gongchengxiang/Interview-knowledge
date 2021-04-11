// 函数柯里化：把接收多个参数的函数转化为一个 -> 接收单一参数且返回一个接收剩余参数并返回结果的新函数的技术
// 个人理解，就是创建一个闭包，先收集参数，最后执行
// 不知道有什么卵用
 
// 示例：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function createCurry(fn, args) {
  var fnLen = fn.length;
  var args = args || [];
  
  return function () {
    var _args = [].slice.apply(arguments);
    args.push(..._args);
    
    if (args.length < fnLen) {
      return createCurry.call(this, fn, args);
    }
    
    return fn.apply(this, args);
  }
}