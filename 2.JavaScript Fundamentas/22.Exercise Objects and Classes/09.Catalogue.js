function catalogue(input) {

    class Product {
        constructor(name = 'banana', price) {
            this.name = name;
            this.price = price;
            this.firstLetter = this.name[0];
        }

    }

    let objs = [];

    for(let obj of input){
        obj = obj.split(' : ');
        let name = obj[0];
        let price = obj[1];

        objs.push(new Product(name,price));
    }

    objs.sort((a,b)=>(a.name).localeCompare(b.name));

    let letter = 'A';
    let isFirstObjOfLetter = true;
    for(let i=0;i<objs.length;i++){
        let obj = objs[i];
        if(obj.firstLetter===letter){
            if(isFirstObjOfLetter){
                console.log(letter);
                console.log(`  ${obj.name}: ${obj.price}`);
                isFirstObjOfLetter=false;
            }else{
                console.log(`  ${obj.name}: ${obj.price}`);
            }
        }else{
            letter=String.fromCharCode(letter.charCodeAt(0)+1);
            i--;
            isFirstObjOfLetter = true;
        }
    }
}



catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);