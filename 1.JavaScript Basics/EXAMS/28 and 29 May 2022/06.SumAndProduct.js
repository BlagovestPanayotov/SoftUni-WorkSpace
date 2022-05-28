function sumAndProduct(input) {
    let n = Number(input[0]);

    let isFound = false;
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let num = Number('' + a + b + c + d);
                    let sum = a + b + c + d;
                    let product = a * b * c * d;
                    if (((product / sum) < 4) && ((product / sum) >= 3) && n % 3 === 0) {
                        console.log('' + d + c + b + a);
                        isFound = true;
                        break;
                    }
                    if ((sum === product && n % 10 == 5)) {
                        console.log(num);
                        isFound = true;
                        break;
                    }
                }
                if (isFound) {
                    break;
                }
            }
            if (isFound) {
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if(!isFound) console.log('Nothing found');

}
sumAndProduct(["123"]);
sumAndProduct(["145"]);
sumAndProduct(["214"]);