function emojiDetector(input) {
    let text = input[0];

    let emojiPattern = /([:|*])\1(?<emoji>[A-Z][a-z]{2,})\1{2}/g;
    let digitsPattern = /\d/g;

    let coolThreshold = text.match(digitsPattern).reduce((a, b) => Number(a) * Number(b));
    let emojies = {};
    let emojiesCounter = 0;
    let match;

    while (match = emojiPattern.exec(text)) {
        let coolnessPoints = 0;

        for (let char of (match.groups.emoji).split('')) {
            coolnessPoints += char.charCodeAt(0);
        }

        emojies[match[0]] = coolnessPoints;
        emojiesCounter++;
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojiesCounter} emojis found in the text. The cool ones are:`);
    
    for (let emoji in emojies) {
        if (emojies[emoji] >= coolThreshold) {
            console.log(emoji);
        }
    }
}
emojiDetector((["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]));
console.log('---------------------');
emojiDetector((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]));