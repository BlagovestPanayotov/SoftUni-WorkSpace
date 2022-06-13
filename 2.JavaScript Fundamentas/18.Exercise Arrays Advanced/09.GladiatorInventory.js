function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');
    for (let commands of input) {
        let currentCommands = commands.split(' ');
        let command = currentCommands.shift();
        let equipment = currentCommands.shift();
        switch (command) {
            case 'Buy':
                buy(equipment, inventory);
                break;
            case 'Trash':
                trash(equipment, inventory);
                break;
            case 'Repair':
                repair(equipment, inventory);
                break;
            case 'Upgrade':
                upgrade(equipment, inventory);
                break;
        }
    }

    console.log(inventory.join(' '));

    function buy(equipment, inventory) {
        let isBought = inventory.includes(equipment);
        if (!isBought) {
            inventory.push(equipment);
        }
    }

    function trash(equipment, inventory) {
        let index = inventory.indexOf(equipment);
        if (index > -1) {
            inventory.splice(index, 1);
        }
    }

    function repair(equipment, inventory) {
        let index = inventory.indexOf(equipment);
        if (index > -1) {
            inventory.splice(index, 1);
            inventory.push(equipment);
        }
    }

    function upgrade(equipment, inventory) {
        let equipmentWithUpgrade = equipment.split('-');
        let currentEquipment = equipmentWithUpgrade.shift();
        let upgrade = equipmentWithUpgrade.shift();
        let index = inventory.indexOf(currentEquipment);
        if (index > -1) {
            inventory.splice(index + 1, 0, `${currentEquipment}:${upgrade}`);
        }

    }

}





//gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Shield-bbb']);
