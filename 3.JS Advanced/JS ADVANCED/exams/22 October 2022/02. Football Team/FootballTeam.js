class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(players) {//"{name}/{age}/{playerValue}"

        const output = [];

        for (const player of players) {
            const [name, age, playerValue] = player.split('/');

            const currentPlayer = this.invitedPlayers.find(x => x.name == name);

            if (!currentPlayer) {
                this.invitedPlayers.push({
                    name,
                    age: Number(age),
                    playerValue: Number(playerValue),
                });
            } else {
                if (currentPlayer.playerValue < Number(playerValue)) {
                    currentPlayer.playerValue = Number(playerValue);
                }
            }

            if (!output.includes(name)) {
                output.push(name);
            }

        }

        return `You successfully invite ${output.join(', ')}.`

    }

    signContract(player) {
        const [name, offer] = player.split('/');

        const currentPlayer = this.invitedPlayers.find(x => x.name == name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currentPlayer.playerValue > Number(offer)) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${currentPlayer.playerValue - Number(offer)} million more are needed to sign the contract!`)
        }

        currentPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`
    }

    ageLimit(name, age) {
        const currentPlayer = this.invitedPlayers.find(x => x.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        const ageDiff = Number(age) - currentPlayer.age;

        //look here in case of error
        if (ageDiff < 0) {
            return `${name} is above age limit!`
        }
        if (ageDiff < 5) {
            return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`
        }
        if (ageDiff > 5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }

    }

    transferWindowResult() {
        const output = ['Players list:'];
        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(x => output.push(`Player ${x.name}-${x.playerValue}`));

        return output.join('\n');
    }
}



let football = new footballTeam("Barcelona", "Spain");
console.log(football.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
//You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.

