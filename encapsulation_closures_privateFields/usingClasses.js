class BankAccount{
    #balance;
    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposit(amount){
        this.#balance += amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const acc=new BankAccount(6785);
console.log(acc.getBalance());
// console.log(acc.#balance);