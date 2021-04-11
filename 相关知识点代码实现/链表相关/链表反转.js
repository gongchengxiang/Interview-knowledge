const head = { "val": 21, "next": { "val": 2, "next": { "val": 452, "next": { "val": 31, "next": { "val": 3, "next": { "val": 14, "next": { "val": 12, "next": { "val": 3, "next": { "val": 32, "next": null } } } } } } } } }

function reverseChain(head) {
    if (!head || !head.next) return head
    let prev = null
    let current = head
    while (current.next) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }
    current.next = prev
    return current
}

console.log(JSON.stringify(reverseChain(head)))