class Bank {
    #bankName
    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const { firstName, lastName, personalId } = customer;

        if (this.allCustomers.find(x => x.firstName === firstName && x.lastName === lastName)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }

        this.allCustomers.push({
            firstName,
            lastName,
            personalId,
            totalMoney: 0,
            transitionInformation: [],
        });

        return customer;
    }

    depositMoney(personalId, amount) {
        const currentCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        }
        // if (!currentCustomer.totalMoney) {
        //     currentCustomer.totalMoney = 0;
        // }
        currentCustomer.totalMoney += amount;

        // if (!currentCustomer.transitionInformation) {
        //     currentCustomer.transitionInformation = [];
        // }
        currentCustomer.transitionInformation.push(`${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);

        return `${currentCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const currentCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        }
        // if (!currentCustomer.totalMoney) {
        //     currentCustomer.totalMoney = 0;
        // }

        if (currentCustomer.totalMoney < amount) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        currentCustomer.totalMoney -= amount;

        // if (!currentCustomer.transitionInformation) {
        //     currentCustomer.transitionInformation = [];
        // }
        currentCustomer.transitionInformation.push(`${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`);

        return `${currentCustomer.totalMoney}$`
    }

    customerInfo(personalId) {
        const currentCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        }
        const output = [
            `Bank name: ${this.#bankName}`,
            `Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}`,
            `Customer ID: ${currentCustomer.personalId}`,
            `Total Money: ${currentCustomer.totalMoney}$`,
            `Transactions:`,
        ];

        const start = currentCustomer.transitionInformation.length - 1;
        for (let i = start; i >= 0; i--) {
            output.push(i+1 + '. ' + currentCustomer.transitionInformation[i]);
        }
        return output.join('\n');
    }
}


let name = 'SoftUni Bank';
let bank = new Bank(name);


let customer1 = bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 });
let totalMoney1 = bank.depositMoney(1111111, 250);

let totalMoney2 = bank.depositMoney(1111111, 250);

// let totalMoney3 = bank.depositMoney(3333333, 555);

let totalMoney4 = bank.withdrawMoney(1111111, 125);

let output = bank.customerInfo(1111111);
console.log(output);
