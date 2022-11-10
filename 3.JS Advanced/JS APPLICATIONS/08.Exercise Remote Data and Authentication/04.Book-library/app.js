function init() {
    document.getElementById('loadBooks').addEventListener('click', displayBook);
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const bookList = document.querySelector('tbody');
    const formElement = document.querySelector('form');
    const [inputTitle, inputAuthor] = formElement.querySelectorAll('input');
    const formH3 = formElement.querySelector('h3');
    const formBtn = formElement.querySelector('button');

    formElement.addEventListener('submit', createEditBook);
    displayBook();

    async function createEditBook(event) {
        event.preventDefault();
        if (formBtn.textContent === 'Submit') {
            requestEditSave(url, 'post');

        } else if (formBtn.textContent === 'Save') {

            const id = formBtn.getAttribute('_id');
            formBtn.removeAttribute('_id');

            requestEditSave(`${url}/${id}`, 'put');

            formH3.textContent = 'FORM';
            formBtn.textContent = 'Submit';
        }
        

    }

    async function requestEditSave(currentUrl, method) {
        const data = Object.fromEntries(new FormData(formElement).entries());

        const title = data.title;
        const author = data.author;

        if (title === '' || author === '') {
            alert('You can not submit/edit book without title or author');
            return;
        }

        const newBook = { author, title }

        const response = await fetch(currentUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        });

        displayBook()
        formElement.reset()
    }

    async function bookManipulation(event) {
        if (event.target.tagName !== "BUTTON") {
            return;
        }

        const id = event.target.parentElement.getAttribute('_id');

        if (event.target.textContent === 'Edit') {
            try {
                const response = await fetch(`${url}/${id}`);
                const data = await response.json();

                inputTitle.value = data.title;
                inputAuthor.value = data.author;

                formH3.textContent = 'Edit FORM';
                formBtn.textContent = 'Save';
                formBtn.setAttribute('_id', id);

            } catch (error) {
                alert('Wrong url');
            }


        } else if (event.target.textContent === 'Delete') {
            if (confirm('Are you sure you wanna delete this book?')) {
                const response = await fetch(`${url}/${id}`, {
                    method: 'delete'
                });
                const data = await response.json();
                event.target.parentElement.parentElement.remove()
            }
        }
    }

    async function displayBook() {
        try {
            const response = await fetch(url);
            if (response.status !== 200) {
                throw new Error;
            }
            const data = await response.json();
            bookList.replaceChildren(...Object.entries(data).map(bookBuilder));
        } catch (error) {
            alert('Wrong url');
        }

    }

    function bookBuilder(book) {
        const newElement = document.createElement('tr');
        newElement.addEventListener('click', bookManipulation);
        const author = document.createElement('td');
        author.textContent = book[1].author;
        const title = document.createElement('td');
        title.textContent = book[1].title;
        const buttonsContainer = document.createElement('td');
        buttonsContainer.setAttribute('_id', book[0]);
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        buttonsContainer.appendChild(editBtn);
        buttonsContainer.appendChild(deleteBtn);
        newElement.appendChild(title);
        newElement.appendChild(author);
        newElement.appendChild(buttonsContainer);
        return newElement;

    }
}



init();