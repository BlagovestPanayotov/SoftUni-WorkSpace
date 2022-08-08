function encryptingPassword(input) {
    let countMessages = Number(input.shift());
    let pattern = /(.+)>(?<nums>[0-9]{3})\|(?<lowwerCase>[a-z]{3})\|(?<upperCase>[A-Z]{3})\|(?<symbol>.{3})<\1/;
    for (let i = 0; i < countMessages; i++) {
        let match = pattern.exec(input[i]);
        if (match) {

            let encryptedPassword =
                match.groups.nums
                + match.groups.lowwerCase
                + match.groups.upperCase
                + match.groups.symbol;

            console.log(`Password: ${encryptedPassword}`);
        } else {
            console.log('Try another password!');
        }
    }
}
encryptingPassword(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"]);
console.log('------------------------');
encryptingPassword(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"]);