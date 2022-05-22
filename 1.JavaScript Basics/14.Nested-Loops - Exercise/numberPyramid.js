function numberPyramid(input) {
    let num = Number(input[0]);
    let counter = 1;
    let output = '';
    for (let index = 1; index <= num; index++) {
        for (let j = 1; j <= index; j++) {
            output += counter + ' ';
            counter++
            if (counter > num) {
                break;
            }
        }
        console.log(output);
        output = '';
        if (counter > num) {
            break;
        }

    }

}
numberPyramid(["7"]);