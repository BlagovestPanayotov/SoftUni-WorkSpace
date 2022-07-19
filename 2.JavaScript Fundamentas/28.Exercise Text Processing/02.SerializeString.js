function serializeString(input) {

    let str = input[0];
    let collection = new Map();

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (collection.has(char)) {
            let value = collection.get(char);
            value.push(i);
            collection.set(char, value);
        } else {
            collection.set(char, [i]);
        }
    }

    for (let [char, positions] of collection) {
        let output = char + ':' + positions.join('/');
        console.log(output);
    }

}
serializeString(["abababa"]);
console.log('-'.repeat(16));
serializeString(["avjavamsdmcalsdm"]);