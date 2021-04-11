function getChildSquenceNum(parent,child){
  if(parent == child) return 0
  if(parent.length <= child.length) return 0
  const parentArr = parent.split('')
  const childArr = child.split('')
  const parentList = []
  let index = parentArr.indexOf(childArr[0])
  while(index > -1){
    parentArr.splice(0,index+1)
    parentList.push([childArr[0],...parentArr.slice()])
    index = parentArr.indexOf(childArr[0])
  }
  const res = []
  function getNum(arr){
    function loop(arrp,arrc){
      const head = arrc.shit()
      let index = arrp.indexOf(head)
      let num = 1
      while(arrc.length){
        
        
      }
    }
  }

}

const parent = '21341234';
const child = '134';
getChildSquenceNum(parent,child)