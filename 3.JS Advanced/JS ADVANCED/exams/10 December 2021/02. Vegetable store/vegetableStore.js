class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        const output = [];
        for (const vegetable of vegetables) {
            const [type, quantity, price] = vegetable.split(' ');
            const product = this.availableProducts.find(x => x.type == type);

            if (!product) {
                this.availableProducts.push({
                    type,
                    quantity: Number(quantity),
                    price: Number(price),
                });
            } else {
                product.quantity += Number(quantity);
                if (product.price < Number(price)) {
                    product.price = Number(price);
                }
            }

            if (!output.includes(type)) { output.push(type); }
        }
        return `Successfully added ${output.join(', ')}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const currentProduct of selectedProducts) {
            const [type, quantity] = currentProduct.split(' ');

            const product = this.availableProducts.find(x => x.type == type);

            if (!product) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            if (product.quantity < Number(quantity)) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            totalPrice += product.price * quantity;

            product.quantity -= quantity;

            // if (this.availableProducts[index].quantity == 0) {
            //     this.availableProducts.slice(index, 1);
            // }

        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        const product = this.availableProducts.find(x => x.type == type);

        if (!product) {
            throw new Error(`${type} is not available in the store.`);
        }

        product.quantity -= quantity;

        if (product.quantity <= 0) {
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }
        return `Some quantity of the ${type} has been removed.`


    }

    revision() {
        const output = ['Available vegetables:'];

        this.availableProducts.sort((a, b) => a.price - b.price).forEach(x => {
            output.push(`${x.type}-${x.quantity}-$${x.price}`);
        });

        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return output.join('\n');
    }

}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
