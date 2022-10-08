function tickets(arr, behavior) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const output = [];

    for (const ticket of arr) {
        output.push(new Ticket(...ticket.split('|')));
    }

    return output.sort((a, b) =>
        behavior === 'price' ? a - b
            : a[behavior].localeCompare(b[behavior]));

}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price');