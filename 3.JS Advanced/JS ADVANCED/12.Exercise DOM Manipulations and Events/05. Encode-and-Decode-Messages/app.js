function encodeAndDecodeMessages() {
    //take input
    const textAreas = document.querySelectorAll('textarea');
    const textInput = textAreas[0];
    const textOutputArea = textAreas[1];
    //add event

    const encodeButton = textInput.parentElement.querySelector('button');
    encodeButton.addEventListener('click', encode);

    const decodeButton = textOutputArea.parentElement.querySelector('button');
    decodeButton.addEventListener('click', decode);
    //encode
    function encode(ev) {
        const input = textInput.value;
        if (input) {
            let encodedPassword = '';
            for (let char of input) {
                let newChar = String.fromCharCode(char.charCodeAt(0) + 1);
                encodedPassword += newChar
            }
            //send
            textOutputArea.value = encodedPassword;
            //clear
            textInput.value = '';
        }
        decodeButton.disabled = false;

    }

    //decode
    function decode(ev) {
        const output = textOutputArea.value;
        if (output) {
            let message = '';
            for (let char of output) {
                let newChar = String.fromCharCode(char.charCodeAt(0) - 1);
                message += newChar
            }
            textOutputArea.value = message;
        }
        decodeButton.disabled = true;

    }
}