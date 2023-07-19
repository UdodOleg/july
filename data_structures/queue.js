// FIFO - first in - first out

class Queue{
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element)
    }
    dequeue() {
        this.items.shift();
    }
    // RETURNS TOP
    peek(){
        if(!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }
    // RETURN True False if empty
    isEmpty() {
        return this.items.length===0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString())
    }
}
const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size()) // 3
queue.print() // 10,20,30
console.log(queue.dequeue()) // 10 is poped
console.log(queue.peek()) // 20
/*
    *   *   *   *   *
  front->          rear->
*/
class Optimised_Queue{
    constructor(){
        this.items = []
        this.rear = 0
        this.front = 0
    }
    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }
    dequeue() {
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty() {
        return this.rear-this.front === 0
    }
    peek() {
        return this.items[this.front]
    }
    size() {
        return this.rear-this.front
    }
    print() {
        console.log(this.items)
    }
}
const opt_queue = new Optimised_Queue();
console.log(opt_queue.isEmpty()); // true

opt_queue.enqueue(10);
opt_queue.enqueue(20);
opt_queue.enqueue(30);
console.log(opt_queue.size()) // 3
opt_queue.print() // 10,20,30
console.log(opt_queue.dequeue()) // 10 is poped
console.log(opt_queue.peek()) // 20