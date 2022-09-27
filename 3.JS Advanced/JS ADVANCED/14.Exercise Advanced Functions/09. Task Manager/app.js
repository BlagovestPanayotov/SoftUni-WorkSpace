function solve() {

    const buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', add);

    function add(ev) {
        ev.preventDefault();
        const addTaskForm = document.querySelector('form');
        const addTaskInputs = Array.from(addTaskForm.querySelectorAll('input,textarea'));

        const taskName = addTaskInputs[0].value;
        const taskDescription = addTaskInputs[1].value;
        const taskDeadLine = addTaskInputs[2].value;

        if (taskName &&
            taskDescription &&
            taskDeadLine) {

            const openSection = document.querySelectorAll('section')[1].querySelectorAll('div')[1];

            openSection.appendChild(createArticleInOpenSection(taskName, taskDescription, taskDeadLine));

            // addTaskInputs[0].value = '';
            // addTaskInputs[1].value = '';
            // addTaskInputs[2].value = '';
        }

    }



    function createArticleInOpenSection(name, description, deadLine) {
        const article = document.createElement('article');

        const header = document.createElement('h3');
        header.textContent = name;
        article.appendChild(header);

        const parDesc = document.createElement('p');
        parDesc.textContent = `Description: ${description}`;
        article.appendChild(parDesc);

        const parDeadLine = document.createElement('p');
        parDeadLine.textContent = `Due Date: ${deadLine}`;
        article.appendChild(parDeadLine);

        const buttonGreen = document.createElement('button');
        buttonGreen.textContent = 'Start'
        buttonGreen.className = 'green';
        
        const buttonRed = document.createElement('button');
        buttonRed.textContent = 'Delete'
        buttonRed.className = 'red';
        
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'flex';
        buttonsContainer.appendChild(buttonGreen);
        buttonsContainer.appendChild(buttonRed);
        article.appendChild(buttonsContainer);
        
        
        buttonGreen.addEventListener('click', moveArticleInProgressSection);
        buttonRed.addEventListener('click', deleteSection);
        return article;
    }

    function deleteSection(ev) {
        ev.target.parentElement.parentElement.remove();
    }

    function moveArticleInProgressSection(ev){

        const section = ev.target.parentElement.parentElement;
        const inProgressSection = document.querySelectorAll('section')[2].querySelectorAll('div')[1];

        const buttons = section.querySelectorAll('button');
        const deleteButton = buttons[0];
        const finishButton = buttons[1];

        deleteButton.removeEventListener('click', moveArticleInProgressSection);
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'red';
        deleteButton.addEventListener('click', deleteSection);

        finishButton.removeEventListener('click', deleteSection);
        finishButton.textContent = 'Finish';
        finishButton.className = 'orange';
        finishButton.addEventListener('click',moveToCompleteSection);

        inProgressSection.appendChild(section);
    }

    function moveToCompleteSection(ev){

        const section = ev.target.parentElement.parentElement;
        const completeSection = document.querySelectorAll('section')[3].querySelectorAll('div')[1];
        
        ev.target.parentElement.remove();

        completeSection.appendChild(section);
        
    }

}