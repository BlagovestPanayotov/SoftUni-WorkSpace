import { render } from '../../node_modules/lit-html/lit-html.js';
import { getAllBooks, createBook, getBook, updateBook, delBook } from './api.js';
import { tableTemplate } from './templates.js'

const root = document.querySelector('body');

const ctx = {
    renderAllBooks,
    editBook,
    deleteBook,
    addBook,
    upBook,
}
await renderAllBooks();
const editForm = document.getElementById('edit-form');

async function renderAllBooks() {
    const books = Object.entries(await getAllBooks());
    render(tableTemplate(books, ctx), root);
}

function editBook(event, book, id) {
    const inputs = editForm.querySelectorAll('input');
    inputs[0].setAttribute('_id', id);
    inputs[1].value = book.author;
    inputs[2].value = book.title;
    console.log(inputs[0]);

}

async function deleteBook(event, book,id) {
    delBook(id);
    await renderAllBooks();
}

async function addBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const author = formData.get('author');
    const title = formData.get('title');

    if (title == '' || author == '') return;
    event.target.reset();

    await createBook('', { author, title });
    await renderAllBooks();
}

async function upBook(event, book) {
    event.preventDefault();
    const formData = new FormData(editForm);
    const id = editForm.querySelector('input').getAttribute('_id');
    const title = formData.get('title');
    const author = formData.get('author');


    await updateBook(id, { author, title });
    await renderAllBooks()
}