function trans2head(arr){
  if(arr.length === 0) return null
  const head = { val:arr[0] }
  let current = head
  for(let i=1;i<arr.length;i++){
    current.next = { val:arr[i] }
    current = current.next
  }
  return head
}
trans2head([12,3,14,12,31,5423])