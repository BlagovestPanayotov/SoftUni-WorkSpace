function depositCalculator(input){

    let deposit = Number(input[0]);
    let termOfDeposit = Number(input[1])/100;
    let interest = Number(input[2]);

    let mounthtlyInterest = (deposit * interest) / 12
    let finalAmount = deposit + termOfDeposit * mounthtlyInterest;

    console.log(finalAmount);

}
depositCalculator(["2350",
"6 ",
"7 "]);