function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];
    let output = [];
    for (let i = 0; i < height; i++) {
        output.push([]);
        for (let j = 0; j < width; j++) {
            output[i].push('0');
        }
    }
    let maxRotation = width > height ? width : height;
    let incrementX = 0;
    let incrementY = 0;
    let num = 1;
    for (let i = 0; i < maxRotation; i++) {
        for (let j = incrementX; j <= Math.abs(incrementX); j++) {
            if (j + x < 0 || j + x >= output.length) {
                continue;
            }
            for (let k = incrementY; k <= Math.abs(incrementX); k++) {

                if (k + y < 0 || k + y >= output[0].length) {
                    continue;
                }
                if (output[j + x][k + y] == 0) {
                    output[j + x][k + y] = num;
                }
            }
        }
        num++;
        incrementX--;
        incrementY--;

    }

    for (let arr of output) {
        console.log(arr.join(' '));
    }
    // console.table(output);

}

orbit([5, 5, 0, 2]);