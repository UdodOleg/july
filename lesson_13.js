class Comment {
    constructor(text) {
        this.text=text
        this.quotesQty = 0
    }
    upvote() {
        this.quotesQty++;
    }
    static display(text,quotesQty) {
        return `${text} -> ${quotesQty} times`;
    }
}
// const com = new Comment('1212');
// console.table(com);
// class Comment2 extends Comment{
//     constructor() {
//         this.date = Date();
//     } 
//     display() {
//         console.log(`${this.date} -> ${this.text}`);
//     }
// }
// const com2 = new Comment2(com);
// com2.display();
console.log(Comment.display('First Comment',(!!5)*5));