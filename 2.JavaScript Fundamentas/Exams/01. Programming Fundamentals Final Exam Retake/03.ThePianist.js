function thePianist(input) {

    let pieces = new Map();
    let startingPiecesCount = Number(input.shift());
    let commands = {
        'Add': (pieces, pieceName, pieceComposer, pieceKey) => {
            if (!pieces.has(pieceName)) {
                pieces.set(pieceName, { composer: pieceComposer, key: pieceKey });
                console.log(`${pieceName} by ${pieceComposer} in ${pieceKey} added to the collection!`);
            } else {
                console.log(`${pieceName} is already in the collection!`);
            }
        },
        'Remove': (pieces, pieceName) => {
            if (pieces.has(pieceName)) {
                pieces.delete(pieceName);
                console.log(`Successfully removed ${pieceName}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        },
        'ChangeKey': (pieces, pieceName, newKey) => {
            if (pieces.has(pieceName)) {
                pieces.get(pieceName).key = newKey;
                console.log(`Changed the key of ${pieceName} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        }
    }

    for (let i = 0; i < startingPiecesCount; i++) {
        let currentPiece = input.shift();
        currentPiece = currentPiece.split('|');
        pieces.set(currentPiece[0], { composer: currentPiece[1], key: currentPiece[2] });
    }

    let index = 0;
    let currentComand;
    while ((currentComand = input[index++]) !== 'Stop') {
        let tokens = currentComand.split('|');
        let commandName = tokens.shift();
        commands[commandName](pieces,tokens[0],tokens[1],tokens[2]);
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