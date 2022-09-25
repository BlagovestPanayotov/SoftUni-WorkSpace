function sameNumber(input) {
    const str = input.toString();
    let sum = Number(str[0]);
    let isSame = true;
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] !== str[i]) {
            isSame = false;
        }
        sum += Number(str[i]);
    }

    console.log(isSame);
    console.log(sum);

}
sameNumber(2222222);
sameNumber(1234);