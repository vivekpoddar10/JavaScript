class Account{
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.transactions = []; //defining default property for all the objects
        
        console.log(`Dear ${this.owner}, Thank for opening an account`);
    }
    deposit(amount) {
        this.transactions.push(amount);
    }
    withdraw(amount){
        this.transactions.push(amount*(-1));
    }

    /**
     * @returns sum of deposited amount
     * also, it creates a new property which will hold the sum of deposits
     */
    totalDeposit(){
        const deposits = this.transactions.filter(
            function(value){
                return value>0
            }).reduce(function(acc,sum){
                return acc+sum});
        this.depositAmount = deposits;
        return deposits;
    }

    /**
     * @returns sum of withdrawl amount
     * also, it creates a new property which will hold the sum of withdraws
     */
    totalWithdrawl(){
        const withdraws =  this.transactions.filter(
            function(value) {
                return value < 0;
            }
        ).reduce(function(acc,value) {
            return acc + value;
        }) * (-1);
        this.withdrawlAmount = withdraws;
        return withdraws;
    }
    balance() {
        return (`Dear ${this.owner}, your account balance is ${this.depositAmount ?? this.totalDeposit() - this.withdrawlAmount ?? this.totalWithdrawl()}`);
    }
}

const myAccount = new Account('Vivek', 'INR', 1234);
myAccount.deposit(100);
myAccount.deposit(-100);
myAccount.deposit(800);
myAccount.deposit(-300);
console.log(myAccount);
console.log(myAccount.totalDeposit());
console.log(myAccount.totalWithdrawl());
console.log(myAccount.balance());
console.log(myAccount);
myAccount.deposit(50);
console.log(myAccount);