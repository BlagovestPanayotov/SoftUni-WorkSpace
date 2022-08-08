function shoppingList(input) {

    let list = input.shift().split('!');

    let index = 0;
    let command = input[index++];

    while (command !== "Go Shopping!") {
        command = command.split(' ');
        let currentCommand = command.shift();
        let item = command.join(' ');

        switch (currentCommand) {
            case 'Urgent':
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (list.includes(item)) {
                    let i = list.indexOf(item);
                    list.splice(i, 1);
                }
                break;
            case 'Correct':
                item = item.split(' ');
                let oldItem = item[0];
                let newItem = item[1];
                if (list.includes(oldItem)) {
                    let i = list.indexOf(oldItem);
                    list[i] = newItem;
                }
                break;
            case 'Rearrange':
                if (list.includes(item)) {
                    let i = list.indexOf(item);
                    list.splice(i, 1);
                    list.push(item);
                }
                break;
        }

        command = input[index++];
    }
    console.log(list.join(', '));

}




shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);