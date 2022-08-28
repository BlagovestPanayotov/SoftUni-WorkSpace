function sumTable() {
    let coll = Array.from(document.querySelectorAll('tr')).slice(1,-1);
    let sum = 0;
    for (let el of coll) {
        sum += Number(el.lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = sum;
}