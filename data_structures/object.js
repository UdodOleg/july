const obj = {
    "name": 'Bruce',
    age: 25,
    syMyName: function () {
        console.log(this.name)
    }
}
obj.hobby = "football";
delete obj.hobby;
console.table(obj);
console.log(obj["name"],obj['name']);
obj.syMyName();
console.log(Object.keys(obj))
