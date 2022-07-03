function wordOccurrences(input) {

    let result = new Map();

    for (let word of input) {
        let count = result.has(word)
            ? result.get(word) + 1
            : 1;

        result.set(word, count);
    }

    let sorted = Array.from(result.entries()).sort((a, b) => b[1] - a[1]);
    for(let tokens of sorted){
        console.log(`${tokens[0]} -> ${tokens[1]} times`);
    }

}


wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);