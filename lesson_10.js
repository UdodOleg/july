const Array1 = [1,2,3];
const Array2 = new Array(1,2,3);
// Array1 !== Array2 -> в разных местах памяти созданы
// Array1.push(4,5); // добавить в конец
// Array1.unshift(4,5); // добавить в начало
// Array1.pop(); // убрать один последний элемент, возвращает удаленный документ как результат
// Array1.shift(); // убрать первый элемент
Array1.forEach(el => {
    el*=2;
    console.log(el);
});
const Array3 = Array2.map(el=>el*3); // создает новый массив, не меняя старый
