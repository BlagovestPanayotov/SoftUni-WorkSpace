function readWords(input) {
    let index = 0
    let word = input[index];
    index++;
    while (word !== 'Stop') {
        console.log(word);
        word = input[index];
        index++
    }



}
readWords(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"])
