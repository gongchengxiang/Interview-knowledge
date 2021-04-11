
// 要点是将父级的结果通过参数传递，同级的利用父级时要将父级拷贝再使用，因为还有其他同级要的要使用
// index 在有child的时候+1,child遍历完-1

import tree from  './tree.js'
// 返回 [{}]格式
function tree2list(tree = [],keyList = []){
  const list = []
  const keys = keyList
  let index = 0

  tree.forEach(item=>{
    handleItem({},item)
  })
  
  function handleItem(res,obj){
    if(obj.value){
      res[keys[index]] = obj.value
    }
    if(obj.children){
      index++
      obj.children.forEach(e=>{
        const res1 = JSON.parse(JSON.stringify(res))
        handleItem(res1,e)
      })
      index--
    }else{
      list.push(res) 
    }
  }

  return list
}
const keys = ['province','city','name','action']
const list = tree2list(tree,keys)
console.log(list)

// 返回 [[]]格式
function tree2list1(tree = []){
  const list = []

  tree.forEach(item=>{
    handleItem([],item)
  })
  
  function handleItem(res,obj){
    if(obj.value){
      res.push(obj.value)
    }
    if(obj.children){ 
      obj.children.forEach(e=>{
        const res1 = res.slice()
        handleItem(res1,e)
      }) 
    }else{
      list.push(res) 
    }
  }

  return list
}

const list1 = tree2list1(tree)
console.log(list1)