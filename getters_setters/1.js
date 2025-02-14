// VALIDATIG USER INPUT



class User{
    constructor(name){
        this._name=name;
    }
    get name(){
        return this._name.toUpperCase();
    }
    set name(newName){
        if(newName.length>0){
            this._name=newName;
    }else{
        console.log("Invalid Name");
    }
}
}
const user= new User("John");
console.log(user.name);
user.name= "Doe";
console.log(user.name)