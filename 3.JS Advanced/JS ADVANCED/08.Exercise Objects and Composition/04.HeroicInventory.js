function heroicInventory(input) {

    let myInput = JSON.parse(JSON.stringify(input));

    let output = [];

    myInput.forEach(line => {
        let [name,level,items] = line.split(' / ');
        level = Number(level);
        if(items){
        items = items.split(', ');
        output.push({name,level,items,});
        }else{
            output.push({name,level,items:[]});
        }
    });
    console.log(JSON.stringify(output));

}
heroicInventory(['Isacc / 25 ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);