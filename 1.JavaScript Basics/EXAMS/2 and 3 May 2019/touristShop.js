function touristShop(input) {
    let budget = Number(input[0]);
    let index = 1;
    let itemCount = 0;
    let spentMoney = 0;
    let counter = 1;

    while (true) {
        if (input[index++] === 'Stop') {
            console.log(`You bought ${itemCount} products for ${spentMoney.toFixed(2)} leva.`);
            break;
        }
        let itemPrice = Number(input[index++]);
        if (counter === 3) {
            itemPrice *= 0.5;
            counter = 1;
        } else {
            counter++;
        }
        if (itemPrice > budget) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${Math.abs(budget-itemPrice).toFixed(2)} leva!`);
            break;
        } else {
            budget -= itemPrice;
            spentMoney += itemPrice;
            itemCount++;
        }
    }

}
touristShop(["54",
    "Thermal underwear",
    "54",
    "Sunscreen",
    "45"]);