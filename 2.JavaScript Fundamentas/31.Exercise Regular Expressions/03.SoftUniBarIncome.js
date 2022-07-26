function softUniBarIncome(arr) {
   
    let sum = 0;
    let regex = /%(?<name>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>-?\d+(?:\.\d+)?)\$/;
    
    for (let element of arr) {
        if (element === 'end of shift') {
            break;
        }
        let match = regex.exec(element);
        
        if (match !== null) {
            match.groups.price = Number(match.groups.price);
            match.groups.count = Number(match.groups.count);
            console.log(`${match.groups.name}: ${match.groups.product} - ${(match.groups.price * match.groups.count).toFixed(2)}`);
            sum += match.groups.count * match.groups.price;
     
        }
 
    }
 
    console.log(`Total income: ${sum.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
// console.log('-'.repeat(16));
// softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift']);