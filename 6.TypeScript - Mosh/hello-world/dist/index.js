"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this.balance += amount;
    }
}
const account = new Account(1, "Bobo", 1000);
account.deposit(1000);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map