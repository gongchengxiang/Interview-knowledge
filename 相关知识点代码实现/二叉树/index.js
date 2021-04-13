function BinaryTree() {
    function Node(val) {
        this.val = val
    }
    function insertNode(node,newNode) {
        if (newNode.val < node.val) {
            if (node.left) {
                insertNode(node.left,newNode)
            } else {
                node.left = newNode
            }
        } else {
            if (node.right) {
                insertNode(node.right,newNode)
            } else {
                node.right = newNode
            }
        }
    }
    this.root = null
    this.insert = function (val) {
        const node = new Node(val)
        if (this.root === null) {
            this.root = node
        } else {
            insertNode(this.root,node)
        }
    }
}

const arr = [11, 9, 23, 14, 3, 12, 31, 6, 25, 42, 13, 21, 2, 49,0,234,-432,4235,432432,234,23,223,3232]

let tree = new BinaryTree()
arr.forEach(e => {
    tree.insert(e)
})
console.log(tree)


function dfs(root) {
    const arr = []
    const arr1 = []
    const arr2 = []
    const search = function (node) {
        if (!node) return
        arr.push(node.val)
        if (node.left) search(node.left)
        arr1.push(node.val)
        if (node.right) search(node.right)
        arr2.push(node.val)
    }
    search(root)
    console.log(arr)
    console.log(arr1)
    console.log(arr2)
}
dfs(tree.root)



