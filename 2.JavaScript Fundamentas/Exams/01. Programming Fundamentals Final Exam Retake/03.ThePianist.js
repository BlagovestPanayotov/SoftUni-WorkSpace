function thePianist(input) {

    let pieces = new Map();
    let startingPiecesCount = Number(input.shift());

    for (let i = 0; i < startingPiecesCount; i++) {
        let currentPiece = input.shift();
        currentPiece = currentPiece.split('|');
        pieces.set(currentPiece[0], { composer: currentPiece[1], key: currentPiece[2] });
    }

    let index = 0;
    let currentComand;
    while ((currentComand = input[index++]) !== 'Stop') {
        currentComand = currentComand.split('|');
        switch (currentComand[0]) {
            case 'Add':
                {
                    let pieceName = currentComand[1];
                    let pieceComposer = currentComand[2];
                    let pieceKey = currentComand[3];
                    if (!pieces.has(pieceName)) {
                        pieces.set(pieceName, { composer: pieceComposer, key: pieceKey });
                        console.log(`${pieceName} by ${pieceComposer} in ${pieceKey} added to the collection!`);
                    } else {
                        console.log(`${pieceName} is already in the collection!`);
                    }
                }
                break;
            case 'Remove':
                {
                    let pieceName = currentComand[1];
                    if (pieces.has(pieceName)) {
                        pieces.delete(pieceName);
                        console.log(`Successfully removed ${pieceName}!`);
                    } else {
                        console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                    }
                }
                break;
            case 'ChangeKey':
                {
                    let pieceName = currentComand[1];
                    let newKey = currentComand[2];
                    if (pieces.has(pieceName)) {
                        let currentPiece = pieces.get(pieceName);
                        currentPiece.key = newKey;
                        pieces.set(pieceName, currentPiece);
                        console.log(`Changed the key of ${pieceName} to ${newKey}!`);
                    } else {
                        console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                    }
                }
                break;
        }
    }


    let iterable = pieces.entries();
    for (let [piece, pieceInfo] of iterable) {
        console.log(`${piece} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`);
    }
}
// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);