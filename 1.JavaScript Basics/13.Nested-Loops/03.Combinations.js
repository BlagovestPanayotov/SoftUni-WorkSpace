function combinations(input) {
    let num = Number(input[0]);
    let count = 0;
    for (let i = 0; i <= num; i++) {
        for (let j = 0; j <= num; j++) {
            for (let k = 0; k <= num; k++) {
                if ((i + j + k) == num) count++;
            }
        }
    }
    console.log(count);
}
combinations(['5']);