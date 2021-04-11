// 冒泡排序，原理是挨个两两相比，大的往后后移一位，每次找到剩余值中最大的放到最终位置，时间复杂度是n^2,空间复杂度是xxx
// 时间复杂度 n * (n - 1) + n * (n - 2) + ..... + n * 1;
function bubbleSort (arr) {
  const sortArr = arr;
  const len = sortArr.length;
  for (let i = 0; i < len; i++) {
    let finishFlag = true;
    for (let j = 0; j < len - 1 - i; j++) {
      if (sortArr[j] > sortArr[j + 1]) {
        [[sortArr[j], sortArr[j + 1]]] = [[sortArr[j + 1], sortArr[j]]];
        finishFlag = false;
      }
    } 
    if (finishFlag) break;
  }
  return sortArr;
}

export default bubbleSort;