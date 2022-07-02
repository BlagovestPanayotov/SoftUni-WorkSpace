function phoneBook(input) {
    let result = {};

    for (let line of input) {
        line = line.split(' ');
        let [name, phone] = line;
        result[name] = phone;
    }

    // let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));
    for(let person of Object.keys(result)){
        console.log(`${person} -> ${result[person]}`);
    }

}



phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
    console.log('------------');
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);