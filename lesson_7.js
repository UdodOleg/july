// Функции //
const myFunc = function(a,b) {
    return (++a)+b;
}
console.log(myFunc(1,2));
// Стрелочная функция //
const myFunc1 = (a,b) => {
    return (++a)+b;
}
console.log(myFunc1(1,2));
setTimeout(() => {
    console.log('Message')
},10000);


// ... //
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
});
const firstPost = {
    name: 'Oleg',
    text: 'Lorem ipsum'
};
console.table(newPost(firstPost));