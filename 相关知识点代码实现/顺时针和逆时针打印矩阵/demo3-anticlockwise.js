// 逆时针打印矩阵
function validateMatrix(matrix){
  let valid = true
  if(matrix && matrix instanceof Array && matrix.length>0){
    for(let i=0;i<matrix.length;i++){
      if(!(matrix[i] instanceof Array)){
        valid =  false;
      } else if(matrix[i].length != matrix[0].length){
        valid =  false;
      }
    }
  }else{
    valid = false;
  }
  return valid;
}
function printMatrixByAntiClockwise(matrix){
  if(validateMatrix(matrix)) {
    const row = matrix.length;
    const col = matrix[0].length;
    let start = 0;
    const res = [];
    while(start*2<row && start*2<col){
      const endX = col - start;
      const endY = row - start;
      if(endY>0){ // 从上到下
        for(let i=start;i<endY;i++){
          res.push(matrix[i][start]);
        }
      }
      if(endY>0&&endX>1){ // 从下到右
        for(let i=start+1;i<endX;i++){
          res.push(matrix[endY-1][i]);
        }
      }
      if(endX>1&&endY>1){ // 从右往上
        for(let i=endY-1;i>start;i--){
          res.push(matrix[i-1][endX-1]);
        }
      }
      if(endX>1&&endY>1){// 从上往左
        for(let i= endX-1-1;i>start;i--){
          res.push(matrix[start][i])
        }
      }

      start++
    }
    return res;
  }else{
    throw new Error('入参不是矩阵');
  }
}
// 测试用例
// const matrix  = [
//   [ 1, 2, 3, 4, 5],
//   [ 6, 7, 8, 9,10],
//   [11,12,13,14,15],
//   [16,17,18,19,20],
// ]; 
// const matrix  = [
//   [ 1, 2, 3, 4, 5]
// ]; 
// const matrix  = [
//   [1],
//   [2],
//   [3],
//   [4],
//   [5]
// ];
// const matrix = [
//   [1]
// ];
// const matrix = [[]];
const matrix = [
  [1,2],
  [3,4],
  [5,6],
  [7,8],
  [9,10]
];
const res = printMatrixByAntiClockwise(matrix);
console.log(res);
