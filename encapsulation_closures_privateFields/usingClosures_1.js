function BankAccount(intialBalance){
    let balance= intialBalance;

    return {
        deposit(amount){
            balance+=amount;
            console.log(`New Balance : $ {balance}`);
        },
        getBalance(){
            return balance;
        }
    };

}
const acc=BankAccount(3000);
acc.deposit(900);
console.log(acc.getBalance());