// 父类
function ParentType(){
  this.name = 'ParentType'
}
ParentType.prototype.sayName = function(){
  return this.name
}

// 方法1、将父类的实例作为子类的原型
function ChildType (){
  this.childName = 'ChildName'
}

ChildType.prototype = new ParentType()

2