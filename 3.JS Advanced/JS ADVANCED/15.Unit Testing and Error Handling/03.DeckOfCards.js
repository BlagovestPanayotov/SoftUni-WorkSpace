function deckOfCards(carts) {
    const output = [];

    for (const cart of carts) {

        const face = cart.slice(0, -1);
        const suit = cart.slice(-1);
        let currentCart;
        try {
            currentCart = createCart(face, suit);
        } catch (err) {
            console.log(`Invalid card: ${cart}`);
            return
        }
        output.push(currentCart.toString());

    }

    console.log(output.join(' '));



    function createCart(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'D': '\u2666',
            'H': '\u2665',
            'C': '\u2663',
        }

        if (!faces.includes(face)
            || !suits.hasOwnProperty(suit)) {
            throw new Error('Invalid card');
        }

        return {
            face,
            suit: suits[suit],
            toString: function () {
                return `${this.face}${this.suit}`;
            }
        }
    }

}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);