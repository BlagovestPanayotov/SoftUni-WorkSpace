class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this.balance += amount;
  }
}

const account = new Account(1, "Bobo", 1000);

account.deposit(1000);
console.log(account instanceof Account);
console.log(account);

// account.deposit(-1000);
