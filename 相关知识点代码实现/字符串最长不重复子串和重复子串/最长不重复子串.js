function getLongestNoRepeatChillStr(s){
  const arr = s.split('').filter(e=>e)
  const res = []
  let childStr = ''
  arr.forEach((e)=>{
    if(!childStr.includes(e)){
      childStr+=e
    }else{
      res.push(childStr)
      childStr = childStr.slice(childStr.indexOf(e)+1) + e
    }
  })
  if(childStr.length) res.push(childStr)
  if(res.length===0) return 0
  return Math.max.apply(null,res.map(e=>e.length))
}
const s = '289fdklsfm398fdsfasjdapfk93d3124237hd02230ur0qrudjspfkads-9238u5';
// const s = 'dvsxdf5';
const res = getLongestNoRepeatChillStr(s);
console.log(res);