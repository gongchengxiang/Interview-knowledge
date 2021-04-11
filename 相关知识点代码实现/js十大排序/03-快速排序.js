// 快速排序的核心思想是，从数组中找一个差不多是中间的值，其他值遍历一遍，小的放左边，大的放右边，左右两个数组依次递归进行该操作，知道数组中的值小于等于2

function quickSort(arr) {
    if (!Array.isArray(arr)) throw new Error('params error: requeset Array')
    if (arr.length < 2) return arr
    const centerIndex = Math.floor(arr.length / 2)
    const center = arr[centerIndex]
    const left = [], right=[]
    arr.forEach((e,i) => {
        if (i !== centerIndex) {
            if (e >= center) {
                right.push(e)
            } else {
                left.push(e)
            }
        }
    })
    if (arr.length <= 2) {
        return left.concat(center, right)
    } else {
        return quickSort(left).concat(center,quickSort(right))
    }
}
// const arr = [15, 7575, 2, 6, 5, 23,432 , 57, 3, 8, 6,31231, 1432242, 523214, 543, 1, 4, 543, 645, 7575, 2, 6, 5, 23,432 , 57, 3, 8, 6,92,243 , 54, 53, 47, 98, 9, 7, 346,423 , 9, 7,31231, 1432242, 523214, 543, 1, 4, 543, 645, 7575, 2, 6, 5, 23,432 , 57, 3, 8, 6,31231, 1432242, 523214, 543, 1, 4, 543, 645, 7575, 2, 6, 5, 23,432 , 57, 3, 8, 6,92,243 , 54, 53, 47, 98, 9, 7, 346,423 , 9, 7, 43, 5, 98, 456, 34, -24, 23, 423, 42, 423, 0, -234, 4234211, 234512, 534235423, 3]
// const arr1 = [-12,2,12,-123,32,-231,3123,213,123,-1,9]
// const res = quickSort(arr)
// console.log(res.toString())