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
var isSymmetric = function(root) {
  function check(left,right){
    if(left==null && right==null){
      return true
    }else if(left&&right){
      return left.val == right.val && check(left.left,right.right) && check(left.right,right.left)
    }else{
      return false
    }
  }
  if(root==null) return true
  return check(root.left,root.right)
}


// console.log(isSymmetric(root))