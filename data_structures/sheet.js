class Node {
    constructor(value) {
        this.value=value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const newnode = new Node(value)
        if(this.isEmpty()) {
            this.root = newnode
        }
        else {
            this.insertnode(this.root,newnode)
        }
    }
    insertnode(root,value) {
        const newnode = new Node(value)
        if(newnode.value <= root.value) {
            if(root.left === null) {
                root.left = newnode
            }
            else {
                this.insertnode(root.left,newnode)
            }
        }
        else {
            if(root.right === null) {
                root.right = newnode
            }
            else {
                this.insertnode(root.right,newnode)
            }
        }
    }
    search(root,value) {
        if(this.isEmpty()) {return -1}
        else {
            if(root.value === value) {return true}
            else {
                if(value <= root.value) {
                    this.search(root.left,value)
                }
                else {
                    this.search(root.right,value)
                }
            }
        }
    }
}

let tree = new Tree()
tree.insert(12)
tree.insert(11)
tree.insert(14)
tree.insert(15)
console.log(tree.isEmpty())
console.log(tree.search(tree.root,15))