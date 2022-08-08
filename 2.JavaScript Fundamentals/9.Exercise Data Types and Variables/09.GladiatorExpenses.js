function gladiatorExpenses(loses, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0;
    for (let i = 1; i <= loses; i++) {
        if (i % 2 == 0) {
            totalPrice += helmPrice;
        }
        if (i % 3 == 0) {
            totalPrice += swordPrice;
        }
        if (i % 6 == 0) {
            totalPrice += shieldPrice;
        }
        if (i % 12 == 0) {
            totalPrice += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);
