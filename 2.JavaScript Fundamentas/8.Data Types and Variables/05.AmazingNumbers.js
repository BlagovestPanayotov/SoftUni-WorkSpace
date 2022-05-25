function amazingNumbers(num) {
    let stringNumber = String(num);
    let sum = 0;
    let isAmazing = false;
    for (let index = 0; index < stringNumber.length; index++) {
        const element = Number(stringNumber[index]);
        sum += element;
    }

    let stringSum = String(sum);
    for (let index = 0; index < stringSum.length; index++) {
        const element = Number(stringSum[index]);
        if (element === 9) {
            isAmazing = true;
            break;
        }
    }

    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }

}
amazingNumbers(999);