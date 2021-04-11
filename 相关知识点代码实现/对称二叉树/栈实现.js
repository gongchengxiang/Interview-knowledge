
var root ={
  val:1,
  left:{
    val:2,
    left:{
      val:3,
      right:{
        val:4
      }
    }
  },
  right:{
    val:2,
    right:{
      val:3,
      left:{
        val:4
      }
    }
  }
}
// 栈实现(迭代实现)
function isSymmertic(root){
  if(root == null) return true
  const stack = []
  stack.push(root.left)
  stack.push(root.right)
  while(stack.length){
    const left = stack.shift()
    const right = stack.shift()
    if(left == null && right == null){
      // nothing
    }else if(left && right && (left.val == right.val)){
      stack.push(left.left)
      stack.push(right.right)
      stack.push(left.right)
      stack.push(right.left)
    }else{
      return false
    }
  }
  return true
}
console.log(isSymmertic(root))