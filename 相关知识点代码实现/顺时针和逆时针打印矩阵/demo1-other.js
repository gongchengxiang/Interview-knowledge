// 顺时针打印矩阵
function printMatrix(matrix) {
  // write code here
  if(matrix == null || matrix[0].length == 0){
      return;
  }
  var hang = matrix.length; // 总共多少行
  var lie = matrix[0].length; // 总共多少列
  var start = 0; // 第几圈
  var res = [];
  while(lie > start * 2 && hang > start * 2){
    var endx = lie-1-start;
    var endy = hang-1-start;
    //左到右一行
    for(var i = start;i<=endx;i++){
        res.push(matrix[start][i]);
    }
    //上到下一行
    if(start < endy){
        for(var i = start+1;i<=endy;i++){
            res.push(matrix[i][endx])
        }
    }
    //右到左
    if(start < endx && start < endy){
        for (var i = endx - 1; i >= start; i--) {
            res.push(matrix[endy][i]);
        }
    }
    //下到上
    if (start < endx && start < endy - 1) {
        for (var i = endy - 1; i >= start + 1; i--) {
            res.push(matrix[i][start]);
        }
    }
    start++;
  }
  return res;
}