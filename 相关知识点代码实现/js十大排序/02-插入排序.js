// 插入排序的核心思想是，拿当前项和已排序序列做比较，插入到合适位置
// 乱序序列第一项作为初始有序序列的第一项，后续无序序列遍历的每个值，和有序序列从后往前(要求升序的话)对比，插入到合适位置并break有序序列，进入下一个值比较

function inserSort(arr) {
    if (!Array.isArray(arr)) throw new Error('params error: requeset Array')
    if (arr.length < 2) return arr 
    const len = arr.length
    for (let i = 1; i < len; i++) {
        let j = i - 1
        const current = arr[i]
        while (j >= 0&&arr[j]>=current) { 
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
}
// // const arr = [31231, 1432242, 523214, 543, 1, 4, 543, 645, 7575, 2, 6, 5, 23,432 , 57, 3, 8, 692,243 , 54, 53, 47, 98, 9, 7, 346,423 , 9, 7, 43, 5, 98, 456, 34, -24, 23, 423, 42, 423, 0, -234, 4234211, 234512, 534235423, 3]
// const arr = [5, 7575, 2, 6, 5, 23,432 , 57, 3, 8, 6,31231, 1432242, 523214, 543, 1, 4, 543, 645, 7575, 2, 6, 5, 23,432 , 57, 3, 8, 6,92,243 , 54, 53, 47, 98, 9, 7, 346,423 , 9, 7,31231, 1432242, 523214, 543, 1, 4, 543, 645, 7575, 2, 6, 5, 23,432 , 57, 3, 8, 6,31231, 1432242, 523214, 543, 1, 4, 543, 645, 7575, 2, 6, 5, 23,432 , 57, 3, 8, 6,92,243 , 54, 53, 47, 98, 9, 7, 346,423 , 9, 7, 43, 5, 98, 456, 34, -24, 23, 423, 42, 423, 0, -234, 4234211, 234512, 534235423, 3]

// const arr1 = [0, 2, 2, 4]
// inserSort(arr)
// console.log(arr)
function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left ,right) {     //分区操作
    var pivot = left,                      //设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }        
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const arr = []
let i = 1000000
arr.length = i
while (i > 0) {
    i--
    arr[i] = Math.pow((parseInt(Math.random()*10)+1),(parseInt(Math.random()*5)+1))+ (parseInt(Math.random()*5)+1)*(parseInt(Math.random()*5)+1)
}
const start = Date.now()
quickSort(arr)
// inserSort(arr)
console.log(Date.now()-start)
console.log(arr)