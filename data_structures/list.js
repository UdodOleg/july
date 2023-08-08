class Node {
    constructor(value) {
        this.value= value
        this.next = null
    }
}
// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty() {
//         return this.size === 0
//     }
//     getSize() {
//         return this.size
//     }
//     prepend(value) {
//         const node = new Node(value)
//         if(this.isEmpty()) {
//             this.head = node
//         }
//         else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     print() {
//         if(this.isEmpty()) {
//             console.log('List is empty!')
//         }
//         else {
//             let curr = this.head
//             let listValues = ''
//             while(curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }
//     append(value) {
//         const node = new Node(value)
//         if(this.isEmpty()) {
//             this.head = node
//         }
//         else {
//             let prev = this.head
//             while(prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }
//     insert(value,index) {
//         if(index<0 || index > this.getSize()) {
//             return
//         }
//         if(index === 0) {
//             this.prepend(value)
//         }
//         else {
//             const node = new Node(value)
//             let prev = this.head
//             for(let i = 0;i<index-1;i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }
//     remove(index) {
//         if(index<0 || index>this.getSize()) {
//             return
//         }
//         let afterdel
//         if(index === 0) {
//             afterdel = this.head
//             this.head = this.head.next
//             this.size--
//             return

//         }
//         else {
//             let prev = this.head
//             for(let i = 0;i<index-1;i++) {
//                 prev = prev.next
//             }
//             afterdel = prev.next
//             prev.next = afterdel.next
//             this.size--
//         }
//     }
//     removeValue(value) {
//         if(this.isEmpty()) {
//             return null
//         }
//         if(this.head.value === value) {
//             this.head = this.head.next
//             this.size--
//             return value
//         }
//         else {
//             let prev = this.head
//             while(prev.next && prev.next.value !== value) {
//                 prev = prev.next
//             }
//             if(prev.next) {
//                 let removedNode = prev.next
//                 prev.next = removedNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }
//     search(value) {
//         if(this.isEmpty()) {
//             return -1
//         }
//         let i = 0
//         let curr = this.head
//         while(curr) {
//             if(curr.value === value) {
//                 return i
//             }
//             curr = curr.next
//             i++
//         }
//         return -1
//     }
//     reverse() {
//         let prev = null
//         let curr= this.head
//         while(curr) {
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }
// }


// let list = new LinkedList()
// list.prepend(20)
// list.prepend(30)
// list.append(500)
// list.append(5000)
// list.insert(2,2)
// list.removeValue(20)
// console.log(list.isEmpty())
// console.log(list.getSize())
// list.print()
// console.log(list.search(5000))
// list.reverse()
// list.print()



class LinkedListTail {
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
}

let tailList = new LinkedListTail()
tailList.append(10)
tailList.append(340)
tailList.append(50)
tailList.prepend(20)
tailList.removeFromFront()
tailList.removeFromEnd()
tailList.print()

module.exports = LinkedListTail