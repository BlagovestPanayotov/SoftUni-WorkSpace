class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([product, price]) {
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product')
        }
        this.budget -= price;
        this.products.push(product);
        return `You have successfully bought ${product}!`
    }

    recipes({ recipeName, productsList }) {
        productsList.forEach(x => {
            if (this.products.includes(x) === false) {
                throw new Error('We do not have this product');
            }
        });

        this.dishes.push({
            recipeName,
            productsList,
        });

        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        if (!this.dishes.find(x => x.recipeName === dish)) {
            throw new Error('We do not have this dish');
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        const output = [];

        const guestList = Object.entries(this.guests);

        for (const [name, dish] of guestList) {
            const currentDish = this.dishes.find(x => x.recipeName === dish);
            output.push(`${name} will eat ${dish}, which consists of ${currentDish.productsList.join(', ')}`);
        }

        return output.join('\n');
    }

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());



//----------------------------------------------------------

// Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt