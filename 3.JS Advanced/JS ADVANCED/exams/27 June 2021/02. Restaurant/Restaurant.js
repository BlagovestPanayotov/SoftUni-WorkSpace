class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        for (const product of products) {
            const [name, quantity, price] = product.split(' ');
            if (this.budgetMoney >= Number(price)) {

                this.budgetMoney -= Number(price);

                if (!this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += Number(quantity);

                this.history.push(`Successfully loaded ${quantity} ${name}`);

            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }

        }
        return this.history.join('\n');
    }
    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        }

        const products = {};

        for (const product of neededProducts) {
            const [name, quantity] = product.split(' ');
            if (!product.hasOwnProperty(name)) {
                products[name] = 0;
            }
            products[name] = Number(quantity);
        }

        this.menu[meal] = {
            products,
            price,
        }

        const meals = Object.keys(this.menu).length;

        if (meals === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have ${meals} meals in the menu, other ideas?`
        }

    }
    showTheMenu() {
        const meals = Object.entries(this.menu);

        if (meals.length == 0) {
            return 'Our menu is not ready yet, please come later...'
        }

        const output = [];

        for (const meal of meals) {
            output.push(`${meal[0]} - $ ${meal[1].price}`);
        }

        return output.join('\n');

    }
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        const neededProducts = Object.entries(this.menu[meal].products);

        for (const [product, quantity] of neededProducts) {
            if (!this.stockProducts.hasOwnProperty(product)
                || this.stockProducts[product] < quantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
        for (const [product, quantity] of neededProducts) {
            this.stockProducts[product] -= quantity;
        }
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }

}


let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu(
    'frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu(
    'Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1',
    'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());

// Your order(frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.