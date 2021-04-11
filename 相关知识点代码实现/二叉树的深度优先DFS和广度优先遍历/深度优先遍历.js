const root = {
  val:0,
  left:{
    val:1,
    left:{
      val:3,
      left:{
        val:null
      },
      right:{
        val:6
      }
    },
    right:{
      val:null
    }
  },
  right:{
    val:2,
    left:{
      val:4,
      left:{
        val:7
      },
      right:{
        val:null
      }
    },
    right:{
      val:5,
      left:{
        val:null
      },
      right:{
        val:8
      }
    }
  }
}
// 深度优先遍历
function DFS(node){
  const path = []
  const valList = []
  function loop(node,currentPath){
    valList.push(node.val)
    const newPath = [...currentPath].concat(node.val)
    if(node.left){
      loop(node.left,newPath)
    }
    if(node.right){
      loop(node.right,newPath)
    }
    if(!node.left&&!node.right){
      path.push(newPath)
    }
  }
  loop(node, [])
  return { path,valList }
}

console.log(DFS(root).valList)