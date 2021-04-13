function xy(arr){
  const root = {}
  const stack = [root]
  let i = 0
  while(stack.length<arr.length){
      const left = {}
      const right = {}
      stack[i].left = left 
      stack[i].right =right
      x(left,right)
      i++
  }

  function x(left,right){
      stack.push(left,right)

  }
  arr.forEach((e,i)=>{
      stack[i].val = e
  })
  return root   
}