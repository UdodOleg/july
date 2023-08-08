const LinkedList = require('./list')
class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }
    pop() {
        this.list.removeFromFront()
    }
    peek() {
        return this.head.value
    }
    isEmpty() {
        return this.list.isEmpty()
    }
    getSize() {
        return this.list.getSize()
    }
    print() {
        return this.list.print()
    }
}

const list = new LinkedListStack()
console.log(list.isEmpty())
list.push(10)
list.push(20)
list.push(30)
list.pop()
list.print()