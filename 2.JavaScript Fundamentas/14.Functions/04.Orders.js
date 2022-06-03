function orders(product, count) {

    let finalPrice = calculatePrice(price(product), count);

    printPrice(finalPrice);


    function printPrice(price) {
        console.log(price.toFixed(2));
    }

    function calculatePrice(price, count) {
        return price * count;
    }

    function price(product) {
        switch (product) {
            case 'coffee':
                return 1.5;
            case 'water':
                return 1;
            case 'coke':
                return 1.4;
            case 'snacks':
                return 2;
        }
    }

}
orders("water", 5);
orders("coffee", 2);