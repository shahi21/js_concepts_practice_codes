class Dog{
    constructor(name,breed){
        this.name=name;
        this.breed=breed;
    }

    bark(){
        console.log("woof")
    }

    describe(){
        console.log(`This dog's name is ${this.name} and it is a ${this.breed}`);
    }
}
const myDog= new Dog("Buddy", "Golden Retriever");
myDog.bark();
myDog.describe();