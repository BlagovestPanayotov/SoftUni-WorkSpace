class Ticket {
  destination: string;
  price: number;
  status: string;

  constructor(info: string) {
    const __data: string[] = info.split("|");
    this.destination = __data[0];
    this.price = Number(__data[1]);
    this.status = __data[2];
  }
}

function sortByCrit(arr: string[], crit: string) {
  const tickets: Ticket[] = arr.map((x) => new Ticket(x));

  return tickets.sort((a, b) => a[crit] < b[crit] ? -1 : a[crit] > b[crit] ? 1 : 0);
}

const result = sortByCrit(["Philadelphia|94.20|available", "New York City|95.99|available", "New York City|95.99|sold", "Boston|126.20|departed"], "price");

console.log(result);
