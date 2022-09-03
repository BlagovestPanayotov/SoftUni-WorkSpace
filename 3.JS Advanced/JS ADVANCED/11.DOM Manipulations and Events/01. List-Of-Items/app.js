function addItem() {

    const newLi = document.createElement('li');

    let valueText = document.getElementById('newItemText').value;
    newLi.textContent = valueText;

    document.getElementById('items').appendChild(newLi);
    document.getElementById('newItemText').value = '';

}