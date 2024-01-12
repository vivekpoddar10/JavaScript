class Account {
    //defining private fields
    #password = 'will not tell'; //it will not be attached to prototype
    #pin;
    constructor(owner,branch,accountNumber,pin) {
        this.owner = owner;
        this.branch = branch;
        this.accountNumber = accountNumber;
        this.#pin = pin;
        this.transaction = [];
    }
    //private methods
    #getTransactions() {
        return this.transaction;
    }
    showPassword() {
        return this.#password;
    }
    showPin() {
        return this.#pin;
    }
}

const myAccount = new Account('vivek','Delhi',1234,1111);

console.log(myAccount);
// console.log(myAccount.#getTransaction());
console.log(myAccount.showPassword());
console.log(myAccount.pin);