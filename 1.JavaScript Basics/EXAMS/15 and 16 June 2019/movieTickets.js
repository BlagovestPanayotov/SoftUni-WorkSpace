function movieTickets(input) {

    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for (let i = a1; i < a2; i++) {
        if (i % 2 !== 0) {
            for (let k = 1; k <= n - 1; k++) {
                for (let j = 1; j <= (n / 2) - 1; j++) {
                    let sum = i + k + j;
                    if (sum % 2 !== 0) {
                        console.log(`${String.fromCharCode(i)}-${k}${j}${i}`);
                    }
                }
            }
        }
    }

}
movieTickets(["69",
    "72",
    "4 "]);