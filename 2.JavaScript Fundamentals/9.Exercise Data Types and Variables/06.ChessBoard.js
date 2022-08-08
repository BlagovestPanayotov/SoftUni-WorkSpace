function chessBoard(input) {
    let isBlack = true;
    let firstColorBlack = true;
    console.log('<div class="chessboard">');
    for (let i = 0; i < input; i++) {
        console.log('  <div>');
        isBlack = firstColorBlack ? true : false;
        firstColorBlack = firstColorBlack ? false : true;
        for (let j = 0; j < input; j++) {
            let color = isBlack ? 'black' : 'white';

            console.log(`    <span class="${color}"></span>`);

            isBlack = isBlack ? false : true;

        }
        console.log(' </div>');
    }
    console.log('</div>');
}
chessBoard(6);
