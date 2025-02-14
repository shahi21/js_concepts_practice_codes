class User{
    #password;
    constructor(username,password){
        this.username = username;
        this.#password = password;
    }

    check(input){
        return this.#password===input;
    }
}

const user= new User("Admin", "6789");
console.log(user.check("6789"));