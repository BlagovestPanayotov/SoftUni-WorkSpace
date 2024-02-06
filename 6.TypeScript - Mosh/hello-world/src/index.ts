class SeatAssignment {
  // A1, A2, ...
  // Bobo, Mosh, ...
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();

seats.A1 = "Bobo";
seats["A2"] = "Mosh";

console.log(seats);
