class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    // Record a transaction
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  // set balance(value: number) {
  //   if (value < 0) {
  //     throw new Error("Invalid value");
  //   }
  //   this._balance = value;
  // }

  // private calculateTax() {}
}

const account = new Account(1, "Bobo", 1000);

account.deposit(1000);
console.log(account.balance);
console.log(account instanceof Account);
console.log(account);

// account.deposit(-1000);
