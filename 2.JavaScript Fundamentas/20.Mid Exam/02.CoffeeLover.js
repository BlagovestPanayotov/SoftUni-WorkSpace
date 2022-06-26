function coffeeLover(input) {

    let coffeeList = input.shift().split(' ');
    let numberCommands = Number(input.shift());

    for (let currentCommand of input) {
        let command = currentCommand.split(' ');
        switch (command[0]) {
            case 'Include':
                {
                    let coffee = command[1];
                    coffeeList.push(coffee);
                }
                break;
            case 'Remove':
                {
                    let position = command[1];
                    let countCoffees = command[2];
                    if (countCoffees <= coffeeList.length) {
                        if (position === 'first') {
                            coffeeList.splice(0, countCoffees);
                        } else if (position === 'last') {
                            coffeeList.splice(-countCoffees);
                        }
                    }
                }
                break;
            case 'Prefer':
                {
                    let indexCoffeeOne = Number(command[1]);
                    let indexCoffeeTwo = Number(command[2]);
                    if (indexCoffeeOne >= 0 && indexCoffeeOne < coffeeList.length
                        && indexCoffeeTwo >= 0 && indexCoffeeTwo < coffeeList.length) {
                        let token = coffeeList[indexCoffeeOne];
                        coffeeList[indexCoffeeOne] = coffeeList[indexCoffeeTwo];
                        coffeeList[indexCoffeeTwo] = token;
                    }
                }
                break;
            case 'Reverse':
                coffeeList.reverse();
                break;
        }

    }

    console.log('Coffees:');
    console.log(coffeeList.join(' '));

}



coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]);
coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"]);
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"]);