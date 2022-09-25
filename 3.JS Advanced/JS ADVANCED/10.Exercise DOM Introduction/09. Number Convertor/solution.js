function solve() {

    const selectMenu = document.querySelector('#selectMenuTo');

    const binary = document.createElement('option');
    binary.value = 'binary';
    binary.textContent = 'Binary';

    const hexadecimal = document.createElement('option');
    hexadecimal.value = 'hexadecimal';
    hexadecimal.textContent = 'Hexadecimal';

    selectMenu.appendChild(binary);
    selectMenu.appendChild(hexadecimal);

    const convertor = {
        'binary': num => {
            return num.toString(2);
        },
        'hexadecimal': num => {
            return num.toString(16).toUpperCase();
        },
    }

    let button = document.querySelector('#container button');
    button.addEventListener('click', () => {
        const input = Number(document.getElementById('input').value);
        const wantedOutput = document.getElementById('selectMenuTo').value;
        document.getElementById('result').value = convertor[wantedOutput](input);
    });
}