function oddOccurrences(input) {

    let words = input.split(' ').map(x => x.toLowerCase());
    let wordsCount = new Map();

    words.forEach(x => {
        let count = 1;
        if (wordsCount.has(x)) {
            count = wordsCount.get(x)+1;
        }
        wordsCount.set(x,count);
    });

    let result = Array.from(wordsCount.keys(wordsCount)).filter(x=>wordsCount.get(x)%2!==0).join(' ');
    console.log(result);
    
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');