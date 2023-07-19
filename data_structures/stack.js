// LIFO -> last IN - first OUT
// is abstract -> BASICS push and pop
class Stack{
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        this.items.pop();
    }
    // RETURNS TOP
    peek(){
        return this.items[this.items.length-1];
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
const stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size()) // 3
stack.print() // 10,20,30
console.log(stack.pop()) // 30 is poped
console.log(stack.peek()) // 20