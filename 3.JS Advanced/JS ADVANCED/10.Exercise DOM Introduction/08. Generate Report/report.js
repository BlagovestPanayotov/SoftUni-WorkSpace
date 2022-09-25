function generateReport() {

    let output = [];
    let hasObjs = false;

    let head = document.querySelectorAll('thead tr th');
    let rows = document.querySelectorAll('tbody tr');
    let rowsCount = rows.length;
    for (let i = 0; i < head.length; i++) {
        let cell = head[i];
        if (cell.querySelector('input').checked) {

            for (let j = 0; j < rowsCount; j++) {
                if (!hasObjs) {
                    output[j] = {};
                }
                let keyName = cell.textContent;
                output[j][keyName.toLowerCase().trim()] = rows[j].querySelectorAll('td')[i].textContent;
            }
            hasObjs = true;
        }

    }

    document.querySelector('#output').value = JSON.stringify(output);

}