function pcGameShop(input) {
    let countGames = Number(input[0]);

    let countHearthstone = 0;
    let countFornite = 0;
    let countOverwatch = 0;
    let countOthers = 0;

    for (let index = 1; index <= countGames; index++) {
        const game = input[index];

        switch (game) {
            case 'Hearthstone':
                countHearthstone++;
                break;
            case 'Fornite':
                countFornite++;
                break;
            case 'Overwatch':
                countOverwatch++;
                break;
            default:
                countOthers++;
                break;
        }

    }

    console.log(`Hearthstone - ${((countHearthstone / countGames) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((countFornite / countGames) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((countOverwatch / countGames) * 100).toFixed(2)}%`);
    console.log(`Others - ${((countOthers / countGames) * 100).toFixed(2)}%`);


}
pcGameShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"]);