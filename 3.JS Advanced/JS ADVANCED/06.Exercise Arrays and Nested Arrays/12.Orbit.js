function orbit(input) {

    let martixSize = input.slice(0, 2);
    let startPoint = input.slice(-2);
    let field = [];

    for (let i = 0; i < martixSize[0]; i++) {
        field.push([]);
        for (let j = 0; j < martixSize[1]; j++) {
            field[i][j] = null;
        }
    }

    let num = 0;
    while (num <= Math.max(...martixSize)) {
        for (let i = startPoint[0] - num; i <= startPoint[0] + num; i++) {
            for (let j = startPoint[1] - num; j <= startPoint[1] + num; j++) {
                if (i >= 0 && j >= 0 && i < field.length && j < field[0].length && field[i][j] === null) {
                    field[i][j] = num + 1;
                }
            }
        }
        num++;
    }

    field.forEach(x=>{
        console.log(x.join(' '));
    });

}
orbit([4, 4, 1, 0]);
