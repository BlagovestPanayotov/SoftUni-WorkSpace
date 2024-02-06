"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
const account = new Account(1, "Bobo", 1000);
account.deposit(1000);
console.log(account.balance);
console.log(account instanceof Account);
console.log(account);
//# sourceMappingURL=index.js.map