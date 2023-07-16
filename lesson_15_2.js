class Animals{
    #color;
    #height;
    #food;
    #name;
    constructor(color,height,food,name) {
        this.#color=color;
        this.#height=height;
        this.#food=food;
        this.#name=name;
    }
    get_name() {
        return this.#name;
    }
    get_color(){
        return this.#color;
    }
    get_height(){
        return this.#height;
    }
    get_food(){
        return this.#food;
    }
    display() {
        console.log(`This animal is ${this.#name}`);
    }
}
Animals.prototype.voice = function() {
    console.log(`Animal ${this.get_name()} made a voice!`);
}
Animals.prototype.foo = function() {
    console.log(`Animal ${this.get_name()} made a poop!`);
}
const Giraffe = new Animals("yellow",250,`meat and leafs`,"giraffe");
Giraffe.display();
Giraffe.voice();
Giraffe.foo();
const variables = {
    color: String(Giraffe.get_color()),
    height: Number(Giraffe.get_height()),
    food: String(Giraffe.get_food()),
    name: String(Giraffe.get_name()),
}
console.log(variables);