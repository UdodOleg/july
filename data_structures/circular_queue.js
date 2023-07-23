class Circular_Queue{
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.current_length = 0;
        this.rear = -1;
        this.front = -1;
    }
    isFull() {
        return this.current_length === this.capacity
    }
    isEmpty(){
        return this.current_length === 0
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear++
            this.items[this.rear]=element
            this.current_length++
            if(this.front===-1){
                this.front=this.rear
            }
        }
    }
    dequeue() {
        if(this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front++
        this.current_length--
        if(this.isEmpty()) {
            this.front--
            this.rear--
        }
        return item
    }
    print() {
        if(this.isEmpty()) {console.log('Empty')}
        else {
            let i,str=''
            for(i=this.front;i!==this.rear;i=(i+1)%this.capacity) {
                str += this.items[i] + ' '
            }
            str+= this.items[i]
            console.log(str)
        }
    }
    peek() {
        if(!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }
}
const queue = new Circular_Queue(5)
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
console.log(queue.isFull())
queue.print()
queue.dequeue()
console.log(queue.isFull())
queue.print()
queue.enqueue(60)