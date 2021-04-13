function reverseChain(head){
  if(!head|| !head.next) return head
  let prev = null
  let current = head
  while(current.next){
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }
  current.next = prev // 最后别忘了这个
  return current
}