function wordsUppercase(input) {
    console.log(input.match(/\w+/g).map(x => x.toUpperCase()).join(', '));
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
