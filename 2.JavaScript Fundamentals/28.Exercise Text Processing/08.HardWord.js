function hardWord(input) {

    let textAsStr = input[0];
    let text = input[0].split(' ');
    let words = input[1].sort((a, b) => b.length - a.length);
    let lostWords = [];

    for (let word of text) {
        if (word.includes('_')) {
            if (word[word.length - 1] != '_') {
                word = word.slice(0, -1);
            }
            lostWords.push(word)
        }
    }

    lostWords.sort((a, b) => b.length - a.length);
    for (let i = 0; i < words.length; i++) {
        textAsStr = textAsStr.replace(lostWords[i], words[i]);
    }

    console.log(textAsStr);

}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);