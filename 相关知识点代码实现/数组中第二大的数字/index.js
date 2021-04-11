function secondNum(arr){
  const res = []
  arr.forEach((e,i) => {
    if(res.length<2){
      res.push(e)
    }else{
      if(e>res[1]){
        res[0] = res[1]
        res[1] = e
      }else if(e>res[0]&&e<res[1]){
        res[0] = e
      }
    }
  });
  console.log(res)
  return res[0]
}


var arr = [312,2312,523,41,235,34623,412,5,34,123,534,6457,23,774,25,8,34,523,42,542] 
// var arr = [1,2,3,4,5,6,7,8,9] 
console.log(secondNum(arr))
