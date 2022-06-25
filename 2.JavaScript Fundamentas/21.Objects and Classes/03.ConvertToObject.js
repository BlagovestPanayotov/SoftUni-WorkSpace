function convertToObject(input){

    let obj = JSON.parse(input);

    let probs = Object.keys(obj);

    for(let prob of probs){
        console.log(`${prob}: ${obj[prob]}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');