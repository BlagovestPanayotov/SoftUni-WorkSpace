function squareOfStars(input = 5) {

    let line = '';
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
            line += '* ';
        }
        console.log(line.trim());
        line = '';
    }

}
squareOfStars();
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);