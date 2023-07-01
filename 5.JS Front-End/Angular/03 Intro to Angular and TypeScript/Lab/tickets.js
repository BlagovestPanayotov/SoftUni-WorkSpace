var Ticket = /** @class */ (function () {
    function Ticket(info) {
        var __data = info.split("|");
        this.destination = __data[0];
        this.price = Number(__data[1]);
        this.status = __data[2];
    }
    return Ticket;
}());
function sortByCrit(arr, crit) {
    var tickets = arr.map(function (x) { return new Ticket(x); });
    return tickets.sort(function (a, b) { return a[crit] < b[crit] ? -1 : a[crit] > b[crit] ? 1 : 0; });
}
var result = sortByCrit(["Philadelphia|94.20|available", "New York City|95.99|available", "New York City|95.99|sold", "Boston|126.20|departed"], "price");
console.log(result);
