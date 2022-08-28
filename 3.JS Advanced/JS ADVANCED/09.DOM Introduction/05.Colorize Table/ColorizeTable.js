function colorize() {
    let collection = document.querySelectorAll('tr:nth-child(2n)');
    for (let el of collection) {
        el.style = 'background:Teal';
    }
}