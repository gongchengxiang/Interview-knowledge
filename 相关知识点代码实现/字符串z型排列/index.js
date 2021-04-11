
var convert = function(s, numRows) {
  const arr = s.split('')
  const res = []
  res.length = numRows
  res.fill([])
  let num = 0
  let flag = '+'
  arr.forEach((e,i)=>{
    if(num>numRows-1){
      num = numRows-2
      flag = '-'
    }else if(num<0){
      num = 1
      flag = '+'
    }
    if(flag === '+'){
      res[num].push(e)
      num++
    }else{
      res[num].push(e)
      num--
    }
  })
  console.log(res)
};
convert('LEETCODEISHIRING',3)