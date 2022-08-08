function furniture(input) {

    let text = input.join('');
    let pattern = />>(?<name>[A-Z]\w*)<<(?<price>\d+\.*\d+)!(?<quantity>\d+)/gm;
    
    let match;

    let totalPrice = 0

    console.log('Bought furniture:');

    while((match = pattern.exec(text))){
        console.log(match.groups['name']);
        totalPrice+=Number(match.groups['price'])*Number(match.groups['quantity']);
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
console.log('-'.repeat(16));
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);
console.log('-'.repeat(16));
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']);