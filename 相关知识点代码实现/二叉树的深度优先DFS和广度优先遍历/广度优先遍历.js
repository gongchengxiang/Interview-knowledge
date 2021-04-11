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
// 广度优先遍历
function BFS(node){
  const valList = []
  const queue = [node]
  while(queue.length){
    const first  = queue.shift()
    valList.push(first.val)
    if(first.left){
      queue.push(first.left)
    }
    if(first.right){
      queue.push(first.right)
    }
  }
  return valList
}

console.log(BFS(root))