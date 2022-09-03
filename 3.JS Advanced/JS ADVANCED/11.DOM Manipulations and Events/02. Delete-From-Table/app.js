function deleteByEmail() {
    const input = document.querySelector('label input').value;
    const collection = document.querySelectorAll('#customers tbody tr td:nth-child(2)');

    let isDeleted = false;

    for (let el of collection) {
        const currentEmail = el.textContent;
        if (currentEmail === input) {
            el.parentElement.remove();
            isDeleted = true;
        }
    }

    let result = document.getElementById('result');

    if (isDeleted) {
        result.textContent = 'Deleted';
    } else {
        result.textContent = 'Not found.';
    }

   document.querySelector('label input').value = '';
}