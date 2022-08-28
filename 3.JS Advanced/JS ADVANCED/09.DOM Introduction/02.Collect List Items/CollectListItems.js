function extractText() {
    let result = '';
    let colection = Array.from(document.getElementById('items').children);
    console.log(colection)
    for (let el of colection) {
        result += el.textContent + '\n';
    }
    document.getElementById('result').value = result
}