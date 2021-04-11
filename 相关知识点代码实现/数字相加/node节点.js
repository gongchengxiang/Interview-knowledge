
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  const num1 = []
  const num2 = []
  function node2arr(l1,arr){
      let temp = l1
      arr.push(temp.val)
      while(temp.next){
          temp = temp.next
          arr.push(temp.val)
      }
  }
  node2arr(l1,num1)
  node2arr(l2,num2)
  const res = []
  let long = num1.length > num2.length ? num1.length : num2.length
  let i = 0
  while(i < long){
      res[i] = (res[i]||0) + num1[i] + num2[i]
      if(res[i]>9){
          res[i] = 0
          res[i+1] = 1
      }
      i++
  }
  const result = {}
  function loop(result){
      result.val = res.shift()
      if(res.length) {
          result.next = {} 
          loop(result.next) 
      }
  }
  loop(result) 
  return result
};