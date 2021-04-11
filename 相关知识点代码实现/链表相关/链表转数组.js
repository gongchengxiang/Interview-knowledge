const head = { "val": 21, "next": { "val": 2, "next": { "val": 452, "next": { "val": 31, "next": { "val": 3, "next": { "val": 14, "next": { "val": 12, "next": { "val": 3, "next": { "val": 32, "next": null } } } } } } } } }
function chainToArr(head) {
    const arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    return arr
}
console.log(chainToArr(head))
