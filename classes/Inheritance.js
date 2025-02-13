class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Cat extends Animal{
    constructor(name, color){
        super(name);
        this.color=color;
    }

    meow(){
        console.log(`${this.name} says meow`);
    }
}
const myCat=new Cat("Whiskers", "Brown");
myCat.eat();
myCat.meow();
console.log(myCat.name);
console.log(myCat.color);