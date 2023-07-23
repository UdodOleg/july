class Node{
    constructor(value) {
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        }
        this.size++
        
    }
    print() {
        if(this.isEmpty()) {
            console.log('Empty')
        }
        else {
            let current = this.head
            let listValues = ''
            while(current) {
                listValues+=`${current.value} `
                current=current.next
            }
            console.log(listValues)
        }
    }
}
const list = new LinkedList()
console.log(`List is empty: ${list.isEmpty()}`) // true
console.log(`List size is: ${list.getSize()}`) // 0
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()