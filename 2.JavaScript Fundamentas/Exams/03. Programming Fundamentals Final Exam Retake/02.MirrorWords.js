function mirrorWords(input) {

    let pattern = /([#|@])(?<wordOne>[A-Za-z]{3,})(\1){2}(?<wordTwo>[A-Za-z]{3,})(\1)/g;

    let match = pattern.exec(input);

    let mirrorWords = [];
    let pairsCount = 0;

    while (match) {
        pairsCount++;

        let wordOne = match.groups.wordOne;
        let wordTwo = match.groups.wordTwo;
        let testWord = wordTwo.split('').reverse().join('');

        if (wordOne === testWord) {
            mirrorWords.push(`${wordOne} <=> ${wordTwo}`)
        }

        match = pattern.exec(input);
    }

    if (pairsCount == 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${pairsCount} word pairs found!`);
    }

    if (mirrorWords.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWords.join(', '));
    }
}


mirrorWords([
'@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log('-'.repeat(166));
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('-'.repeat(166));
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);