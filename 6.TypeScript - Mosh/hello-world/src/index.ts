class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    // Record a transaction
    this._balance += amount;
  }
  getBalance(): number {
    return this._balance;
  }

  private calculateTax() {}
}

const account = new Account(1, "Bobo", 1000);
console.log(account.getBalance());

account.deposit(1000);
console.log(account instanceof Account);
console.log(account);

// account.deposit(-1000);
