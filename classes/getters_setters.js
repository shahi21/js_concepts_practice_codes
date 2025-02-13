class Person{
    constructor(f_name, l_name){
        this._fname=f_name;
        this._lname=l_name;
    }

    get fullNAme(){
        return `${this._fname} ${this._lname}`;
    }

    set fullNAme(name){
        const parts=name.split(" ");
        this._fname=parts[0];
        this._lname=parts[1];
    }
}

const person= new Person("John", "Doe");
console.log(person.fullNAme)

person.fullNAme= "Jane Smith";
console.log(person.fullNAme);