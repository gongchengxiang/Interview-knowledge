const head = { "val": 21, "next": { "val": 2, "next": { "val": 452, "next": { "val": 31, "next": { "val": 3, "next": { "val": 14, "next": { "val": 12, "next": { "val": 3, "next": { "val": 32, "next": null } } } } } } } } }

function copyChain(head) {
    if (!head)  return null
    let copy = {val:head.val,next:null}
    let current = copy
    while (head.next) {
        const node = {
            val: head.next.val,
            next: null
        }
        current.next = node
        current = node
        head = head.next
    }
    return copy
}

console.log(JSON.stringify(copyChain(head)))