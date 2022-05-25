function cinemaTickets(input) {
    let index = 0;
    let command = input[index++];

    let totalKit = 0;
    let totalStudent = 0;
    let totalStandart = 0;

    while (command !== 'Finish') {
        let nameMovie = command;
        let capacity = Number(input[index++]);
        let currentCounter = 0;
        command = input[index++];
        while (command !== 'End') {
            currentCounter++;
            switch (command) {
                case 'standard':
                    totalStandart++;
                    break;
                case 'student':
                    totalStudent++;
                    break;
                case 'kid':
                    totalKit++;
                    break;
            }
            if (capacity <= currentCounter) {
                console.log(`${nameMovie} - 100.00% full.`);
                break;
            }
            command = input[index++];
        }
        if (capacity > currentCounter) {
            console.log(`${nameMovie} - ${((currentCounter / capacity) * 100).toFixed(2)}% full.`);
        }
        command = input[index++];
    }

    let totalTickets = totalKit + totalStudent + totalStandart;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((totalStudent / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((totalStandart / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((totalKit / totalTickets) * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);