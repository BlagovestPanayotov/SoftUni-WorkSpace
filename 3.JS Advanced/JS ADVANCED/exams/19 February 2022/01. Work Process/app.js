function solve() {

    const input = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        dateOfBirth: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary'),
    }

    const hireBtn = document.getElementById('add-worker');
    hireBtn.addEventListener('click', hireWorker);

    const workersTableBody = document.getElementById('tbody');
    const totalBudget = document.getElementById('sum');
    let totalBudgetValue = Number(totalBudget.textContent);

    function hireWorker(event) {
        // 
        event.preventDefault();
        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const email = input.email.value;
        const dateOfBirth = input.dateOfBirth.value;
        const position = input.position.value;
        const salary = Number(input.salary.value);

        if (firstName !== '' && lastName !== ''
            && email !== '' && dateOfBirth !== ''
            && position !== '' && salary !== '') {

            const newTrElement = elementBuilder(workersTableBody, 'tr');
            elementBuilder(newTrElement, 'td', firstName);
            elementBuilder(newTrElement, 'td', lastName);
            elementBuilder(newTrElement, 'td', email);
            elementBuilder(newTrElement, 'td', dateOfBirth);
            elementBuilder(newTrElement, 'td', position);
            elementBuilder(newTrElement, 'td', salary);

            const buttonContainer = elementBuilder(newTrElement, 'tr');
            const fireButton = elementBuilder(buttonContainer, 'button', 'Fired', 'fired');
            const editButton = elementBuilder(buttonContainer, 'button', 'Edit', 'edit');
            editButton.addEventListener('click', editWorker);
            fireButton.addEventListener('click', removeWorker);

            totalBudgetValue += salary;
            totalBudget.textContent = totalBudgetValue.toFixed(2);

            clearInput();


            function removeWorker() {
                event.preventDefault();


                totalBudgetValue -= salary;
                totalBudget.textContent = totalBudgetValue.toFixed(2);

                newTrElement.remove();
            }
            function editWorker() {
                event.preventDefault();

                input.firstName.value = firstName;
                input.lastName.value = lastName;
                input.email.value = email;
                input.dateOfBirth.value = dateOfBirth;
                input.position.value = position;
                input.salary.value = salary;

                removeWorker()
            }
        }
    }

    function elementBuilder(parent, tagName, text, className) {
        const newElement = document.createElement(tagName);
        if (text) { newElement.textContent = text; }
        if (parent) { parent.appendChild(newElement); }
        if (className) { newElement.className = className; }

        return newElement;
    }

    function clearInput() {
        input.firstName.value = '';
        input.lastName.value = '';
        input.email.value = '';
        input.dateOfBirth.value = '';
        input.position.value = '';
        input.salary.value = '';
    }


}

solve()