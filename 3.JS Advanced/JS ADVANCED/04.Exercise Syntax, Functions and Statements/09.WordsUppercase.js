function wordsUppercase(input) {
    let result = input.split(/[^\w]+/gm)
        .map(x => x.toUpperCase())
        .filter(x => { if (x) return x })
        .join(', ');
    console.log(result);
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');