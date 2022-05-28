function excursion(input) {
    let countPPL = Number(input[0]);
    let countNights = Number(input[1]);
    let countTravelTickets = Number(input[2]);
    let countMusiumTickets = Number(input[3]);

    let totalAmount = 1.25 * (countPPL * (countNights * 20 + countTravelTickets * 1.6 + countMusiumTickets * 6));

    console.log(totalAmount.toFixed(2));

}
excursion(["20", "14", "30", "6"]);
excursion(["131", "9", "33", "46"]);
