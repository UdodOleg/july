// Область видимости //
let a; // глобальные
let b; // глобальные
function myFn() {
    let b; // локальная
    a=true; // локально не инициализорована -> работает как глобальная
    b=10; // локальная, так как инициализирована локально
    console.log(b); // 10
}
myFn();
console.log(a); // true
console.log(b); // undefined -> запрос идет в глобальную переменную, а мы работали с локальной

// Область видимости функций //
function myFn() {
    function innerFn() {
        console.log(5);
    }
    innerFn();
}
myFn();
const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
export {
    sum,
    mul
}