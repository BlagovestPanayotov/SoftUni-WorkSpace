class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500,
        }
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        const participant = this.listOfParticipants.find(x => x.name == name);

        if (participant) {
            return `The ${name} is already registered at the camp.`;
        }

        if (this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0,
        })

        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        const index = this.listOfParticipants.findIndex(x => x.name == name);

        if (index == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        if (typeOfGame == 'WaterBalloonFights') {
            const indexFirstPlayer = this.listOfParticipants.findIndex(x => x.name == participant1);
            const indexSecondPlayer = this.listOfParticipants.findIndex(x => x.name == participant2);

            if ((indexFirstPlayer == -1 || indexSecondPlayer == -1) || indexFirstPlayer == indexSecondPlayer) {
                throw new Error('Invalid entered name/s.');
            }

            if (this.listOfParticipants[indexFirstPlayer].condition != this.listOfParticipants[indexSecondPlayer].condition) {
                throw new Error('Choose players with equal condition.');
            }

            const diff = this.listOfParticipants[indexFirstPlayer].power - this.listOfParticipants[indexSecondPlayer].power;

            if (diff > 0) {
                this.listOfParticipants[indexFirstPlayer].wins++;
                return `The ${participant1} is winner in the game WaterBalloonFights.`
            } if (diff < 0) {
                this.listOfParticipants[indexSecondPlayer].wins++;
                return `The ${participant2} is winner in the game WaterBalloonFights.`
            } else {
                return 'There is no winner.';
            }
        }
        if (typeOfGame == 'Battleship') {
            const indexPlayer = this.listOfParticipants.findIndex(x => x.name == participant1);
            if (indexPlayer == -1) {
                throw new Error('Invalid entered name/s.');
            }

            this.listOfParticipants[indexPlayer].power += 20;

            return `The ${participant1} successfully completed the game Battleship.`
        }

    }

    toString() {
        const output = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

        this.listOfParticipants.sort((a, b) => b.wins - a.wins).forEach(x => output.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`));

        return output.join('\n');
    }

}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());

// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0