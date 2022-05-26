function cost(input){

    let area = Number(input[0]);
    let totalCost = area * 7.61;
    let discount = totalCost * 0.18;

    let finalPrice = totalCost - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
cost(["550"]);
