// 删除所有的指定值的节点或者删除第一个

function deleteNode (head,val,all = false){
  if(head.val === val) return head.next
  let prev = head
  let current = head.next
  while(current){
    if(current.val === val){
      prev.next = current.next
      if(!all) break // 是否删除所有的，或者删除第一个就停了
    }
    prev = current
    current = current.next
  }
  return head
}

const head = {
  val:1,
  next:{
    val:2,
    next:{
      val:3,
      next:{
        val:4,
        next:{
          val:5
        }
      }
    }
  }
}

deleteNode(head,4)
console.log(head)