function myFn(a) {
    console.log(a);
}
myFn(2+3);
myFn(5)
// c=c+1; // инструкция
// c=c+1 // выражение
// let a = 2 // инструкция
// myFn(c=c+1;); // инструкции в выражения не передаются
// Выражения ВСЕГДА возвращают значения
export {
    myFn,
}