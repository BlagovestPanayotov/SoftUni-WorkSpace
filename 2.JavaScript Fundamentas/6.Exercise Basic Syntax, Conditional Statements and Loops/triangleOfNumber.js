function triangleOfNumber(num) {
    num = Number(num);
    let sequence = '';
    for (let index = 1; index <= num; index++) {
        for (let k = 1; k <= index; k++) {
            sequence += index;
            if (k !== index) {
                sequence += ' ';
            }
        }
        console.log(sequence);
        sequence = '';
    }
}
triangleOfNumber(5);