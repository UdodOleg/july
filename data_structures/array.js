const arr = [1,2,3,'Oleg'];
//BASICS
arr.push(4); // add at end
arr.unshift(0); // add at start
arr.pop(); //remove 1 elem at end
arr.shift(); // remove 1 elem at start
for(const item of arr) {
    console.log(item);
}
for(const item in arr) {
    console.log(arr[item]);
}
// ADVANCED
//map , filter, reduce, concat, slice, splice