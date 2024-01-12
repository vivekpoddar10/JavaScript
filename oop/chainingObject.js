class Account{
    constructor(name, accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.transactions = [];
    }

    withdraw(value) {
        this.transactions.push(value * -1);
        return this;
    }
    deposit(value) {
        this.transactions.push(value);
        return this;
    }
    showTransactions() {
        return this.transactions;
    }
}


const myAccount = new Account('vivek',1234);
myAccount.withdraw(10).deposit(100).withdraw(30).withdraw(50);
console.log(myAccount.showTransactions());