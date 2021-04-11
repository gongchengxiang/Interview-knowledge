// 数组转链表
const arr = [21, 2, 452, 31, 3, 14, 12, 3, 32]
function arrToChain(arr) {
    if (arr.length) {
        let head = null
        let next = {
            val: arr.shift(),
            next:null
        }
        head = next
        while (arr.length) {
            let node = {
                val: arr.shift(),
                next:null
            }
            next.next = node
            next = node
        }
        return head
    } else {
        return  null
    }
    
}

console.log(JSON.stringify(arrToChain(arr)))