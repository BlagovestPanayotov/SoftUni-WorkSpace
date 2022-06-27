function makeDictionary(input){

    let dictionary = [];
    let termsInDictionary = [];
    for(let term of input){
        let currentTrem = JSON.parse(term);
        let currentKeyTerm = Object.keys(currentTrem)[0];
            if(termsInDictionary.includes(currentKeyTerm)){
                for(let element of dictionary){
                    if(Object.keys(element).includes(currentKeyTerm)){
                        element[currentKeyTerm] = currentTrem[currentKeyTerm];
                    }
                }
            }else{
                dictionary.push(currentTrem);
                termsInDictionary.push(currentKeyTerm);
            }
    }

    dictionary.sort((a,b)=>Object.keys(a)[0].localeCompare(Object.keys(b)[0]));

    for(let term of dictionary){
        let cerrentKey = Object.keys(term)[0];
        console.log(`Term: ${cerrentKey} => Definition: ${term[cerrentKey]}`);
    }

}



makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Coffee":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);
// makeDictionary([
//     '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
//     '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
//     '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
//     '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
//     '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
//     ]);