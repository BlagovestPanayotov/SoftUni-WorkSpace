function censoredWords(sentence, word) {

    while (sentence.includes(word) && !word.includes('*')) {
        sentence = sentence.replace(word,'*'.repeat(word.length));
    }
    console.log(sentence);


}

censoredWords('A small sentence with some words', 'small');
console.log('-'.repeat(20));
censoredWords('Find the hidden word', 'hidden');
