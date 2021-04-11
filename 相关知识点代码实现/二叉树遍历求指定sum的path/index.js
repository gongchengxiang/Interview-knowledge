const root ={
    val:5,
    left:{
        val:4,
        left:{
            val:11,
            left:{val:7},
            right:{val:2}
        }
    },
    right:{
        val:8,
        left:{val:13},
        right:{
            val:4,
            right:{val:5}
        }
    }
}

function getPath(root, sum) {
    const path = []
    let result = []
    function loop(node, path) {
        const copyPath = path.slice()
        copyPath.push(node.val)
        if (!node.left && !node.right && copyPath.reduce((t, c) => t + c) === sum) {
            result.push(copyPath)
        }
        if (node.left) loop(node.left, copyPath)
        if (node.right) loop(node.right, copyPath) 
       
    }
    loop(root, path)
    return result
}
const path = getPath(root, 22)
console.log(path)