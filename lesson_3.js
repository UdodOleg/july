//Функции//

function sum(a,b) {
    return a+b
}
console.log(sum(2,3))

const personOne = {
    name: 'Bob',
    age: 21
}
function increasePersonAge(person){
    const person2 = JSON.parse(JSON.stringify(person))
    person2.age++;
    return person2;
}
const personTwo = increasePersonAge(personOne);
console.log(personOne.age,personTwo.age);

// callback - function //

function anotherFunction(){
    console.log('Hello!');
}
function func_with_callback(callbackFunction) {
    callbackFunction();
}
func_with_callback(anotherFunction);

// пример callback //
function printMyName() {
    console.log('Bogdan');
}
setTimeout(printMyName,1000);