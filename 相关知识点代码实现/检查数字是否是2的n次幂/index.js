//  检查num是否是2的n次幂
function check(num){
  if(num != 1){
      while(num != 1){
          if(num%2 == 0){
              num = num / 2;
          }else{
              return false;
          }
      }
      return true;
  }else{
      return true;
  }
}