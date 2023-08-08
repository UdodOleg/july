class Node {
    constructor(value) {
        this.value= value
        this.next = null
    }
}
class LinkedListQueue {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    removeFromFront() {
        let value
        if(this.isEmpty()) {
            return -1
        }
        else {
            value = this.head.value
            this.head = this.head.next
        }
        this.size--
        return value
    }
    removeFromEnd() {
        if(this.isEmpty()) {
            return -1
        }
        const value = this.tail.value
        if(this.size === 1) {
            this.head=null
            this.tail=null
        }
        else {
            let prev = this.head
            while(prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
    }
    print() {
        if(this.isEmpty()) {
            console.log('List is empty!')
        }
        else {
            let curr = this.head
            let listValues = ''
            while(curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
    enqueue(value) {
        this.append(value)
    }
    dequeue() {
        this.removeFromFront()
    }
    peek() {
        return this.head.value
    }
}
const queue = new LinkedListQueue()
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
queue.print()
console.log(queue.peek())