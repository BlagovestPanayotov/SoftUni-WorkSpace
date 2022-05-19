function eventOrOdd(input){

    let number = Number(input[0]);

    if(Math.abs(number) % 2 === 1){
        console.log('odd');
    }else{
        console.log('even');
    }

}
eventOrOdd(["-1"]);