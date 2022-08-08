function inventory(input) {

    let collection = input.shift().split(', ');

    let index = 0;
    let commands = input[index++];

    while (commands !== 'Craft!') {
        let currentComand = commands.split(' - ');
        let command = currentComand[0];
        let item = currentComand[1];

        switch (command) {
            case 'Collect':
                if (!collection.includes(item)) {
                    collection.push(item);
                }
                break;
            case 'Drop':
                if (collection.includes(item)) {
                    let itemIndex = collection.indexOf(item);
                    collection.splice(itemIndex, 1);
                }
                break;
            case 'Combine Items':
                item = item.split(':');
                let oldItem = item[0];
                let newItem = item[1];
                if (collection.includes(oldItem)) {
                    let itemIndex = collection.indexOf(oldItem);
                    collection.splice(itemIndex + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (collection.includes(item)) {
                    let itemIndex = collection.indexOf(item);
                    collection.splice(itemIndex, 1);
                    collection.push(item);
                }
                break;
        }

        commands = input[index++];

    }

    console.log(collection.join(', '));


}





// inventory(['Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!']);
inventory(['Iron, Sword',
    // 'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);