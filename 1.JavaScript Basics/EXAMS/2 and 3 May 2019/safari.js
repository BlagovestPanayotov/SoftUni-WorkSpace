function safari(input){
    let boudget = Number(input[0]);
    let neededFuel = Number(input[1]);
    let day = input[2];

    let price = 100 + (neededFuel*2.1);
    if(day==='Saturday'){
        price*=0.9;
    }else{
        price*=0.8;
    }

    let diff = boudget-price;

    if(diff>=0){
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `);
    }else{
        console.log(`Not enough money! Money needed: ${Math.abs(diff).toFixed(2)} lv.`);
    }

}
safari(["105.20",
"15",
"Sunday"]);