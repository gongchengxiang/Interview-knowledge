const head = { "val": 21, "next": { "val": 2, "next": { "val": 2, "next": { "val": 31, "next": { "val": 3, "next": { "val": 14, "next": { "val": 12, "next": { "val": 3, "next": { "val": 32, "next": null } } } } } } } } }

function deleteChainValue(head, value, deleteAll = false) {
    if(!head) return head
    let prev = null
    let current = head
    while (current) {
        if (current.val === value) {
            if (prev) {
                if (deleteAll) {
                    prev.next = current.next
                    current = current.next
                } else {
                    prev.next = current.next
                    return prev
                }
            } else {
                if (deleteAll) {
                    current = current.next
                } else {
                    return current.next
                }
            }
        } else {
            prev = current
            current = current.next
        }
    }
    return head
}
deleteChainValue(head,2,true)
console.log(JSON.stringify(head))