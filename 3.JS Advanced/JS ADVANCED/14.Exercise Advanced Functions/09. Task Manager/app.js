function solve() {

    const [_, openSection, inProgressSection, completeSection] = Array.from(document.querySelectorAll('section')).map(x => x.querySelectorAll('div')[1]);
    const buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', add);

    function add(ev) {
        ev.preventDefault();
        const addTaskForm = document.querySelector('form');
        const addTaskInputs = Array.from(addTaskForm.querySelectorAll('input,textarea'));

        const input = {
            taskName: addTaskInputs[0],
            taskDescription: addTaskInputs[1],
            taskDeadLine: addTaskInputs[2],
        }

        if (input.taskName.value &&
            input.taskDescription.value &&
            input.taskDeadLine.value) {

            openSection.appendChild(createArticleInOpenSection(input.taskName.value, input.taskDescription.value, input.taskDeadLine.value));

            Object.values(input).forEach(x => x.value = '');
        }
    }

    function createArticleInOpenSection(name, description, deadLine) {
        const article = document.createElement('article');

        article.appendChild(createElement('h3', name));

        article.appendChild(createElement('p', `Description: ${description}`));

        article.appendChild(createElement('p', `Due Date: ${deadLine}`));

        const buttonsContainer = createElement('div', '', 'flex');
        buttonsContainer.appendChild(createElement('button', 'Start', 'green', ['click', moveArticleInProgressSection]));
        buttonsContainer.appendChild(createElement('button', 'Delete', 'red', ['click', deleteSection]));
        article.appendChild(buttonsContainer);

        return article;
    }

    function createElement(type, text, className, eventListener) {
        const element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        if (className) {
            element.className = className;
        }
        if (eventListener) {
            element.addEventListener(eventListener[0], eventListener[1]);
        }
        return element
    }

    function deleteSection(ev) {
        ev.target.parentElement.parentElement.remove();
    }

    function moveArticleInProgressSection(ev) {

        const section = ev.target.parentElement.parentElement;
        const buttonContainer = ev.target.parentElement;

        Array.from(section.querySelectorAll('button')).forEach(x => x.remove());

        buttonContainer.appendChild(createElement('button', 'Delete', 'red', ['click', deleteSection]));
        buttonContainer.appendChild(createElement('button', 'Finish', 'orange', ['click', moveToCompleteSection]));

        inProgressSection.appendChild(section);
    }

    function moveToCompleteSection(ev) {
        const section = ev.target.parentElement.parentElement;
        ev.target.parentElement.remove();
        completeSection.appendChild(section);

    }
}