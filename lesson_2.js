const post = {
    title: 'MyPost',
    likesQty: 5
};
const post2 = post;
post2.likesQty = 6;
console.log(post.likesQty); // 6
const post3 = Object.assign({}, post); // если нет вложенных объектов
post3.likesQty = 7;
console.log(post.likesQty); // 6
console.log(post3.likesQty); // 7

const person = {
    name: "Oleg",
    age: 19,
    contact: {
        phone: '+380669275418',
        city: 'Zaporizhya',
        country: 'Ukraine'
    }
}
// const person1 = Object.assign({},person);
// person1.contact.city='Kyiv';
// console.log(person.contact.city); // изменится

// const person2 = {...person}; // ссылки на вложенные объекты сохраняются
const person2 = JSON.parse(JSON.stringify(person));
person2.contact.city='Kyiv';
console.log(person.contact.city);  