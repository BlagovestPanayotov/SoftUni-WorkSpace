function solve() {

    const buttons = document.querySelectorAll('tfoot button');

    const checkButton = buttons[0];
    checkButton.addEventListener('click', checker);

    const clearButton = buttons[1];
    clearButton.addEventListener('click', clear);

    const tableRows = document.querySelectorAll('tbody tr');

    const tableElement = document.querySelector('table');
    const checkPar = document.querySelector('p');

    function checker() {
        const matrix = [];
        for (let i = 0; i < 3; i++) {
            const ceils = tableRows[i].querySelectorAll('td');
            matrix[i] = [];
            for (let j = 0; j < 3; j++) {
                matrix[i][j] = ceils[j].querySelector('input').value;
            }
        }

        if (checkRows(matrix) && columnCheck(matrix)) {
            //table border 2px solid green
            // div with an id "check" must be "You solve it! Congratulations!"
            tableElement.style.border = '2px solid green'
            checkPar.textContent = 'You solve it! Congratulations!';
            checkPar.style.color = 'green';
        } else {
            //"2px solid red"
            // "NOP! You are not done yet..."
            tableElement.style.border = '2px solid red'
            checkPar.textContent = 'NOP! You are not done yet...';
            checkPar.style.color = 'red';
        }


        function checkRows(matrix) {
            let row = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (row.includes(matrix[i][j])) {
                        return false;
                    }
                    row.push(matrix[i][j]);
                }
                row = [];
            }
            return true;
        }

        function columnCheck(matrix) {
            let column = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (column.includes(matrix[j][i])) {
                        return false;
                    }
                    column.push(matrix[j][i]);
                }
                column = [];
            }
            return true;
        }
    }

    function clear() {
        for (let row of tableRows) {
            const ceils = row.querySelectorAll('td');
            for (let ceil of ceils) {
                ceil.querySelector('input').value = '';
            }
        }
        tableElement.style.border = '';
        checkPar.textContent = '';
        checkPar.style.color = '';
    }
}