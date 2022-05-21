function building(input) {
    let countLevels = Number(input[0]);
    let countRooms = Number(input[1]);

    let output = '';

    for (let levels = countLevels; levels >= 1; levels--) {
        for (let rooms = 0; rooms < countRooms; rooms++) {
            if (levels === countLevels) {
                output += `L${levels}${rooms} `
            } else if (levels % 2 === 0) {
                output += `O${levels}${rooms} `
            } else {
                output += `A${levels}${rooms} `
            }
        }
        console.log(output);
        output = '';
    }

}
building(["4", "4"]);