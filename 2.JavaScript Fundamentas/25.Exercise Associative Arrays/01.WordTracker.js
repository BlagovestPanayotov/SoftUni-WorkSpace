function wordTracker(input) {

    let result = {};

    let words = input.shift().split(' ');
    let sentence = input.slice();

    for(let word of words){
        result[word] = 0;
    }

    for(let word of sentence){
        if(result.hasOwnProperty(word)){
            result[word] +=1;
        }
    }

    let sorted = Object.keys(result).sort((a,b)=>result[b]-result[a]);
    sorted.forEach(element => {
        console.log(`${element} - ${result[element]}`);
    });

}


wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
wordTracker(['is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);