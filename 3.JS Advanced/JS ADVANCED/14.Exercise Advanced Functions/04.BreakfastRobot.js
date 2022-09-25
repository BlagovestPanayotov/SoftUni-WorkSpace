function solution() {

    const storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0, };

    const meals = {
        apple: { carbohydrate: 1, flavour: 2, },
        lemonade: { carbohydrate: 10, flavour: 20, },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, fat: 1, flavour: 3, },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10, },
    };

    function robotChef(input) {
        const [command, product, quantity] = input.split(' ');

        if (command === 'restock') {

            storage[product] += Number(quantity);
            return 'Success';

        } else if (command === 'prepare') {

            const neededProducts = Object.keys(meals[product]);

            for (const nutrition of neededProducts) {
                const neededCurrentProduct = meals[product][nutrition] * quantity;
                if (storage[nutrition] < neededCurrentProduct) {
                    return `Error: not enough ${nutrition} in stock`;
                }
            }
            for (const nutrition of neededProducts) {
                const neededCurrentProduct = meals[product][nutrition] * quantity;
                storage[nutrition] -= neededCurrentProduct;
            }

            return 'Success';

        } else if (command === 'report') {

            let result = [];
            for (const key in storage) {
                result.push(`${key}=${storage[key]}`);
            }

            return result.join(' ');

        }

    }

    return robotChef;

}
let manager = solution();
console.log(manager("restock flavour 50"));           // Success 
console.log(manager("prepare lemonade 4"));           // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));      // Success 
console.log(manager("restock flavour 10"));           // Success 
console.log(manager("prepare apple 1"));              // Success 
console.log(manager("restock fat 10"));               // Success 
console.log(manager("prepare burger 1"));             // Success 
console.log(manager("report"));                       //protein=0 carbohydrate=4 fat=3 flavour=55

console.log('--------------------------');

let manager2 = solution();
console.log(manager2('prepare turkey 1'));          //Error: not enough protein in stock
console.log(manager2('restock protein 10'));        //Success
console.log(manager2('prepare turkey 1'));          //Error: not enough carbohydrate in stock
console.log(manager2('restock carbohydrate 10'));   //Success
console.log(manager2('prepare turkey 1'));          //Error: not enough fat in stock
console.log(manager2('restock fat 10'));            //Success
console.log(manager2('prepare turkey 1'));          //Error: not enough flavour in stock
console.log(manager2('restock flavour 10'));        //Success
console.log(manager2('prepare turkey 1'));          //Success
console.log(manager2('report'));                    //protein=0 carbohydrate=0 fat=0 flavour=0
