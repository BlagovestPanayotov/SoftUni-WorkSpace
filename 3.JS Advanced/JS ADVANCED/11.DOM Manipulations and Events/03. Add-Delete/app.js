function addItem() {
    const newElValue = document.getElementById('newItemText').value;

    if(!newElValue) return;

    const newEl = document.createElement('li');
    newEl.textContent = newElValue;

    const anchorTag = document.createElement('a');
    anchorTag.textContent = '[Delete]';
    anchorTag.href = '#';
    anchorTag.addEventListener('click',deleteLi);
    newEl.appendChild(anchorTag);

    document.getElementById('items').appendChild(newEl);
    document.getElementById('newItemText').value = '';

    function deleteLi(ev){
        ev.target.parentElement.remove();
    }

}