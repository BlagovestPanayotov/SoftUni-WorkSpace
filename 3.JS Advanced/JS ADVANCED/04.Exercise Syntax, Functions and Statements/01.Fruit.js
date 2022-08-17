function fruit(fruit,weight,price){

    let fruiType = fruit;
    let weightInKilo = weight/1000;
    let money = weightInKilo * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruiType}.`);

}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);