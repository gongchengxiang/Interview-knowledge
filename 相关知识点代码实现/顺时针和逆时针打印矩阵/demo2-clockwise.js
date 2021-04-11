// 顺时针打印矩阵
function printMatrix(matrix){
  if(!matrix || !matrix[0]) return [];
  let col = matrix[0].length;
  let row = matrix.length;
  let start = 0;
  const res = [];
  while(start*2<row && start*2<col){
    const endx = col - start;
    const endy = row - start;
    // 从左往右
    for(let i=start;i<endx;i++){
      res.push(matrix[start][i]);
    }
    // 从上到下
    if(endy>1){
      for(let i=start+1;i<endy;i++){
        res.push(matrix[i][endx-1]);
      }
    }
    // 从下到左
    if(endy>1&&endx>1){
      for(let i=endx-1;i>start;i--){
        res.push(matrix[endy-1][i-1]);
      }
    }
    // 从左到上
    if(endy>1&&endx>1){
      for(let i=endy-1-1;i>start;i--){
        res.push(matrix[i][start]);
      }
    }
    // 尝试下一圈
    start++;
  }
  return res;
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
const matrix  = [
  [1],
  [2],
  [3],
  [4],
  [5]
];
// const matrix = [
//   [1]
// ];
// const matrix = [];
// const matrix = [
//   [1,2],
//   [3,4],
//   [5,6],
//   [7,8],
//   [9,10]
// ];
// const matrix = [[]];
const res = printMatrix(matrix);
console.log(res);