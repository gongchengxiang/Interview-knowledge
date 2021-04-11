function BinaryTree() {
    this.root = null
    this.insert = (val) => {
        const node = new Node(val)
        if (this.root) {
            insertNode(this.root, node)
        } else {
            this.root = node
        }
        return this
    }
    function Node(val) {
        this.val = val
        this.left = null
        this.right = null
    }
    function insertNode(node,newNode) {
        if (node.val > newNode.val) {
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
}
const binaryTree = new BinaryTree()
binaryTree.insert(1)
binaryTree.insert(2)
binaryTree.insert(4)
binaryTree.insert(0)
binaryTree.insert(3)
console.log(binaryTree)
