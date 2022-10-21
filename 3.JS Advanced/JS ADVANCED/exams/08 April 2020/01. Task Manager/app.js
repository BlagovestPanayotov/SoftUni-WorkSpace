function solve() {

    const input = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    }

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addToOpenSection);

    const [___, openSection, inProgressSection, completeSection] = Array.from(document.querySelectorAll('section div:nth-child(2)'));

    function addToOpenSection(event) {
        event.preventDefault();

        const task = input.task.value;
        const description = input.description.value;
        const date = input.date.value;

        if (task == '' || description == '' || date == '') return;

        const newArticle = elementBuilder(openSection, 'article');
        elementBuilder(newArticle, 'h3', task);
        elementBuilder(newArticle, 'p', `Description: ${description}`);
        elementBuilder(newArticle, 'p', `Due Date: ${date}`);
        const btnContainer = elementBuilder(newArticle, 'div',undefined,'flex');
        const startBtn =elementBuilder(btnContainer, 'button', 'Start', 'green', startTask);
        elementBuilder(btnContainer, 'button', 'Delete', 'red', deleteTask);

        input.task.value = '';
        input.description.value = '';
        input.date.value = '';

        function startTask() {
            inProgressSection.appendChild(newArticle);
            startBtn.remove();
            elementBuilder(btnContainer, 'button', 'Finish', 'orange', finishTask)
        }
        function finishTask(){
            completeSection.appendChild(newArticle);
            btnContainer.remove();
        }
        function deleteTask() {
            newArticle.remove();
        }

    }

    function elementBuilder(parent, tagName, content, className, eventListener) {
        const newElement = document.createElement(tagName);
        parent.appendChild(newElement);
        if (content) { newElement.textContent = content; }
        if (className) { newElement.className = className; }
        if (eventListener) { newElement.addEventListener('click', eventListener); }

        return newElement;
    }

}