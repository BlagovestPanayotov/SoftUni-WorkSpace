function cinemaTicket(input) {
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTickets = 0;
    let index = 0;

    while (true) {
        let nameMovie = input[index];
        index++;
        if (nameMovie === 'Finish') {
            let totalTickets = standardTicket + studentTicket + kidTickets;
            console.log(`Total tickets: ${totalTickets}`);
            console.log(`${((studentTicket / totalTickets) * 100).toFixed(2)}% student tickets.`);
            console.log(`${((standardTicket / totalTickets) * 100).toFixed(2)}% standard tickets.`);
            console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
            break;
        }
        let capacity = Number(input[index]);
        index++;
        let soldTickets = 0;
        let ticket = '';
        while (true) {
            ticket = input[index];
            index++;
            if ((ticket === 'End') || (ticket === 'Finish')) {
                console.log(`${nameMovie} - ${((soldTickets / capacity) * 100).toFixed(2)}% full.`);
                break;
            }
            switch (ticket) {
                case 'student':
                    studentTicket++;
                    soldTickets++;
                    break;
                case 'standard':
                    standardTicket++;
                    soldTickets++;
                    break;
                case 'kid':
                    kidTickets++;
                    soldTickets++;
                    break;
            }
            if (soldTickets >= capacity) {
                console.log(`${nameMovie} - ${((soldTickets / capacity) * 100).toFixed(2)}% full.`);
                break;
            }
        }
        if (ticket === 'Finish') {
            let totalTickets = standardTicket + studentTicket + kidTickets;
            console.log(`Total tickets: ${totalTickets}`);
            console.log(`${((studentTicket / totalTickets) * 100).toFixed(2)}% student tickets.`);
            console.log(`${((standardTicket / totalTickets) * 100).toFixed(2)}% standard tickets.`);
            console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
            break;
        }
    }

}
cinemaTicket(["The Matrix",
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