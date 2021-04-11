function getAllCase(arr) {
    function combine(arr1, arr2) {
        const arr = []
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length;j++) {
                arr.push(arr1[i]+""+arr2[j])
            }
        }
        return arr
    }
    return arr.reduce((res,curr) => {
        return combine(res,curr)
    },[""])
}
const arr = [['a', '0'], ['b', '1'], ['c', '2']]
console.log(getAllCase(arr))
