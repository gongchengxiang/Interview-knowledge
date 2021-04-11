const arr = [['a', '0'], ['b', '1'], ['c', '2']]
const res = ['abc', 'ab2', 'a1c', 'a12', '0bc', '0b2', '01c', '012']
// 二维数组排列组合得到所有结果，实现下面这个效果
function transfer(arr1,arr2,arr3) {
    for (let a = 0; a < arr1.length;a++) {
        for (let b = 0; b < arr2.length;b++) {
            for (let c = 0; c < arr3.length;c++) {
                console.log(arr1[a]+arr2[b]+arr3[c])
            }
        }
    }
}
// 排列组合的核心就是：两两相乘，举个例子，就是arr[0]和arr[1]

function digui(arr) {
    const result = []
    function loop(arr,index,val) {
        if (index < arr.length) {
            for (let i = 0; i < arr[index].length;i++) {
                loop(arr,(index+1),val+''+arr[index][i])
            }
        } else {
            result.push(val)
        }
    }
    loop(arr, 0, '')
    return result
}

console.log(digui(arr))
