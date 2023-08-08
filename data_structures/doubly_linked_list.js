class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}
class DoubleLinkedTailList {
    constructor() {
        this.head = null
        this.tail = null
    }
    isEmpty() {
        return this.head === null
    }
    getSize() {
        if(this.isEmpty()) {return 0}
        let i = 0
        let curr = this.head
        while(curr) {
            i++
            curr = curr.next
        }
        return i
    }
    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
    }
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            let curr = this.head
            for(let i = 0;i<this.getSize()-1;i++) {
                curr=curr.next
            }
            curr.next = node
            this.tail = node
            node.prev = curr
        }
    }
    print() {
        if(this.isEmpty()) {
            console.log(`List is empty!`)
            return -1
        }
        let curr = this.head
        let message = ''
        while(curr) {
            message += `${curr.value} `
            curr = curr.next
        }
        console.log(`List is: ${message}`)
        return 1
    }
    reverse() {
        if(this.isEmpty()) {
            console.log(`List is empty!`)
            return -1
        }
        let curr = this.tail
        let message = ''
        while(curr) {
            message += `${curr.value} `
            curr = curr.prev
        }
        console.log(`List is: ${message}`)
        return 1
    }
}
const list = new DoubleLinkedTailList()
list.append(10)
list.prepend(0)
list.print()
list.reverse()