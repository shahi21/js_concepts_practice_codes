class Employee{
    #salary;
    constructor(name,salary){
        this.name=name;
        this.#salary=salary;
    }

    get(){
        return `Confidential`;
    }
}
const employee= new Employee("Shah", 10000);
console.log(employee.get())