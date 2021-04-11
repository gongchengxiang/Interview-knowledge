import list from './list.js'

console.log(list)
const keys = ['province','city','name','action']
function list2tree(list=[],keyList=[]){
  const tree = []
  const keys = keyList
  let treeItem = {}
  list.forEach(item=>{
    let index = 0
    const key = keys[index]
    let targetIndex = -1
    while(item[key]){
      for(let i=0;i<tree.length;i++){
        if(tree.value==item[key]){
          targetIndex = i
        }
      }
      if(targetIndex>-1){
        
      }else{
        treeItem.value=item[key]
        index++
        
      }
    }
    
  })
}