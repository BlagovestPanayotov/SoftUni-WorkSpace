function solution() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };
 
    const productsQty = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    
    const functions = {
        restock(value) {
            productsQty[value[0]] += +value[1];
            return "Success";
 
        },
 
        prepare(value) {
            const currQty = Object.assign({}, productsQty)
            let currIngredients = Object.entries(recipes[value[0]])
                .map(a => [a[0], a[1] * value[1]]);
            for (let a of currIngredients) {
                if (productsQty[a[0]] < a[1]) {
                    Object.assign(productsQty, currQty)
                    return `Error: not enough ${a[0]} in stock`
                } else {
                    productsQty[a[0]] -= +a[1]
                }
            };
            return "Success";
        },
        
        report() {
            let result = "";
            const currQty = Object.entries(productsQty)
                                .forEach(a => result += `${a[0]}=${a[1]} `);
            return result.trim();
        }
    };
 
    function result(input) {
        let [command, ...value] = input.split(" ");
        return functions[command](value);
    };
 
    return result;
};