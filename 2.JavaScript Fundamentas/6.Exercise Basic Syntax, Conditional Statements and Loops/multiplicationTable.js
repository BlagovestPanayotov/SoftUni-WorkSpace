function multiplicationTable(num) {
    num = Number(num);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }

}
multiplicationTable(5);
multiplicationTable(2);