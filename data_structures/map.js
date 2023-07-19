// unordered Key->value, to retrieve value use key, iterable, keys may be not a String
const map = new Map([['a',1],['b',2]])
console.table(map)
/*
┌───────────────────┬─────┬────────┐
│ (iteration index) │ Key │ Values │
├───────────────────┼─────┼────────┤
│         0         │ 'a' │   1    │
│         1         │ 'b' │   2    │
└───────────────────┴─────┴────────┘
*/
for(const [key,value] of map) {
    console.log(`${key}: ${value}`)
}
/* 
a: 1
b: 2
*/
map.set('c',3)
console.log(map.has('a')); // true
console.log(map.delete('c')); // true
console.log(map.size); // 2
map.clear();//clear all