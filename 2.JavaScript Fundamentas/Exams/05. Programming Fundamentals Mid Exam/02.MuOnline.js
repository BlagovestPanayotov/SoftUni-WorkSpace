function muOnline(dungent) {

    let rooms = dungent.split('|');

    let health = 100;
    let bitcoins = 0;
    let roomCount = 0;
    let isDead = false;

    for (let room of rooms) {
        room = room.split(" ");
        roomCount++;
        switch (room[0]) {
            case "potion":
                let potion = Number(room[1]);
                health += potion;
                if (health > 100) {
                    potion -= (health - 100);
                    health = 100;
                }
                console.log(`You healed for ${potion} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                console.log(`You found ${Number(room[1])} bitcoins.`);
                bitcoins += Number(room[1]);
                break;
            default:
                health -= Number(room[1]);
                if (health > 0) {
                    console.log(`You slayed ${room[0]}.`);
                } else {
                    console.log(`You died! Killed by ${room[0]}.`);
                    console.log(`Best room: ${roomCount}`);
                    isDead = true;
                }
                break;
        }
        if (isDead) {
            break;
        }
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");