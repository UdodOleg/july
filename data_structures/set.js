// Unique values, mixed datatypes, dynamically sized, dont have an order, iterable
const set = new Set([1,2,3])
set.add(4) // add at end
console.log(set.has(4)) // true
set.delete(3) // number 3 is deleted
console.log(set.size) // 3
for(const item of set) {
    console.log(item)
}
set.clear(); // clear all