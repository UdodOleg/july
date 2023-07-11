// //Деструктуризация//
// const Base = {
//     'name': 'Oleg',
//     address: 'Text',
//     phone_number: '+39012919290',
// }
// const {name,address}=Base;
// const {phone_number}=Base;
// // console.table(Base);
// console.log(`name = ${'name'},address = ${address},phone_number = ${phone_number}`);

// const fruits = ['Apple','Banana'];
// const [fruitOne,fruitTwo]=fruits;
// console.log(`fruitOne = ${fruitOne}, fruitTwo = ${fruitTwo}`);

//Деструктуризация в функциях//
let userProfile = [
 {
    'name':'Bogdan',
    commentsQty: 23,
    isNowAuthorized: false,
 },
 {
    'name':'Igor',
    commentsQty: 25,
    isNowAuthorized: true,
 }, {
    'name':'Anatoliy',
    commentsQty: 2,
    isNowAuthorized: false,
 },
]
const userInfo = ({name,isNowAuthorized}) => { // аттрибут - деструктуризованный параметр функции
    if(isNowAuthorized==false) {
        return `User ${name} is NOT authorized`;
    } else {
        return `User ${name} IS authorized`;}
}
for(let i = 0;i<userProfile.length;i++) {
    console.log(userInfo(userProfile[i]));
}
/*Result
    User Bogdan is NOT authorized
    User Igor IS authorized
    User Anatoliy is NOT authorized
*/

for(let i = 0;i<userProfile.length;i++) {
    for (const key in userProfile[i]) {
        console.log(`${key} : ${userProfile[i][key]}`);
    }
    console.log('------');
}
for(let i = 0;i<userProfile.length;i++) {
    Object.keys(userProfile[i]).forEach(key => {
        console.log(`${key} : ${userProfile[i][key]}`);
    })
    console.log('------');
}
/*
    name : Bogdan
    commentsQty : 23
    isNowAuthorized : false
    ------
    name : Igor
    commentsQty : 25
    isNowAuthorized : true
    ------
    name : Anatoliy
    commentsQty : 2
    isNowAuthorized : false
*/

const arr = [1,2,3]
for (const key in arr) {
    console.log(`Key №${key+1} ${arr[key]}`);
}
// for ... of нельзя использовать для обхектов!
const myString = 'Hey';
for (const letter of myString) {
    console.log(`${letter}`);
}