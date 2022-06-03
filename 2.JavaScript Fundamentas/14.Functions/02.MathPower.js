function mathPower(n, x) {
    let result = 1;

    for (let i = 1; i <= x; i++) {
        result *= n;
    }

    console.log((result));
}
mathPower(2, 8);